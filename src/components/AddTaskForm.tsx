import { useState, useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddTaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskListContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Task Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Task
      </Button>
    </form>
  );
};

export default AddTaskForm;
