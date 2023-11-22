// components/TaskListItem.tsx
import React, { useContext, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import DeleteTaskDialog from './DeleteTaskDialog';
import { TaskListContext } from '../context/TaskListContext';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  completedTask: {
    color: '#c9c9c9', // Change this to the desired color
  },
  incompleteTask: {
    color: 'black',
  },
}));
interface TaskListItemProps {
  task: Task;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
  const { toggleTaskStatus, editTaskTitle } = useContext(TaskListContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);


const classes = useStyles();



  const handleEditSubmit = () => {
    editTaskTitle(task.id, editedTitle);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTitle(task.title); // Reset the edited title on cancel
  };

  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setIsDeleteDialogOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEditSubmit();
    }
  };

  return (
    <ListItem className={task.status === 'completed' ? classes.completedTask : classes.incompleteTask} sx={{
      borderBottom:'1px solid #c9c9c9'
    }}>
      <Checkbox
        checked={task.status === 'completed'}
        onChange={() => toggleTaskStatus(task.id)}
      />
      {isEditing ? (
        <>
          <TextField
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onKeyPress={handleKeyPress}
            sx={{
              width:'100%'
            }}
          />
          <IconButton onClick={handleEditSubmit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleCancelEdit}>Cancel</IconButton>
        </>
      ) : (
        <>
          <ListItemText primary={task.title} onClick={handleEditClick} />
          <IconButton onClick={handleEditClick}>
            <EditIcon />
          </IconButton>
        </>
      )}
      <IconButton onClick={handleDeleteClick}>
        <DeleteIcon />
      </IconButton>
      <DeleteTaskDialog
        open={isDeleteDialogOpen}
        handleClose={handleDeleteDialogClose}
        taskId={task.id}
      />
    </ListItem>
  );
};

export default TaskListItem;
