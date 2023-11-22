import { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import List from '@mui/material/List';
import TaskListItem from './TaskListItem';

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
