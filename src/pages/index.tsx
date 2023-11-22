import { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import { TaskListProvider } from '../context/TaskListContext';

const Home: React.FC = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <div>
      <h1>Task Tracker</h1>
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <TaskListProvider>
      <Home />
    </TaskListProvider>
  );
};

export default App;
