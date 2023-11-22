import React, { createContext, ReactNode, useState, useEffect } from 'react';
import { Task } from '../interfaces/task.interface';

interface TaskListContextProps {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
  toggleTaskStatus: (id: number) => void;
  editTaskTitle: (id: number, title: string) => void;
}

const TaskListContext = createContext<TaskListContextProps | undefined>(undefined);

const TaskListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = typeof window !== "undefined" && localStorage.getItem('tasks');
    return storedTasks ? (JSON.parse(storedTasks) as Task[]) : [];
  });

  useEffect(() => {
    typeof window !== "undefined" && localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      status: 'incomplete',
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTaskStatus = (id: number) => {
    const updatedTasks: Task[] = tasks.map((task) =>
      task.id === id
        ? { ...task, status: task.status === 'completed' ? 'incomplete' : 'completed' }
        : task
    );
    setTasks(updatedTasks);
  };

  const editTaskTitle = (id: number, title: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <TaskListContext.Provider
      value={{ tasks, addTask, deleteTask, toggleTaskStatus, editTaskTitle }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export { TaskListContext, TaskListProvider };
