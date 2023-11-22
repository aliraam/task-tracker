import { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import List from '@mui/material/List';
import TaskListItem from './TaskListItem';
import { Task } from '@/interfaces/task.interface';
interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </List>
  );
};

export default TaskList;
