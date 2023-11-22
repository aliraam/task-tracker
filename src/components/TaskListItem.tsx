import { useContext, useState } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';

interface TaskListItemProps {
  task: Task;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
  const { deleteTask, toggleTaskStatus, editTaskTitle } = useContext(
    TaskListContext
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEditSubmit = () => {
    editTaskTitle(task.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <ListItem>
      <Checkbox
        checked={task.status === 'completed'}
        onChange={() => toggleTaskStatus(task.id)}
      />
      {isEditing ? (
        <>
          <TextField
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <IconButton onClick={handleEditSubmit}>
            <EditIcon />
          </IconButton>
        </>
      ) : (
        <>
          <ListItemText primary={task.title} />
          <IconButton onClick={() => setIsEditing(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
      <IconButton onClick={() => deleteTask(task.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TaskListItem;
