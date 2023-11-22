// components/TaskList.tsx
import React, { useContext } from 'react';
import List from '@mui/material/List';
import TaskListItem from './TaskListItem';
import { TaskListContext } from '../context/TaskListContext';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Task } from '@/interfaces/task.interface';

const useStyles = makeStyles((theme) => ({
  completedTasksContainer: {
    marginTop: '2px',
  },
}));

const TaskList: React.FC = () => {
  const { tasks } = useContext(TaskListContext) ;
  const classes = useStyles();

  const completedTasks = tasks.filter((task: Task) => task.status === 'completed');
  const incompleteTasks = tasks.filter((task: Task) => task.status === 'incomplete');

  return (
    <div>

      <List>
        {incompleteTasks.map((task: Task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </List>
      {completedTasks.length > 0 && (
        <div className={classes.completedTasksContainer}>
          <Typography variant="h6">Completed Tasks</Typography>
          <List>
            {completedTasks.map((task: Task) => (
              <TaskListItem key={task.id} task={task} />
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

export default TaskList;
