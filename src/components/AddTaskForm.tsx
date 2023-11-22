// components/AddTaskForm.tsx
import { useState, useContext, KeyboardEvent } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddTaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskListContext);

  const handleSubmit = () => {
    if (title.trim()) {
      addTask(title);
      setTitle('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div>
      <TextField
        label="Task Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{
            width:'100%',
            marginTop:'10px'
        }}
      />
      <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth sx={{marginTop:'10px'}}>
        Add Task
      </Button>
    </div>
  );
};

export default AddTaskForm;
