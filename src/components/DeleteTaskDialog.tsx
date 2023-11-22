import React, { useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { TaskListContext } from '../context/TaskListContext';

interface DeleteTaskDialogProps {
  open: boolean;
  handleClose: () => void;
  taskId: number | null;
}

const DeleteTaskDialog: React.FC<DeleteTaskDialogProps> = ({
  open,
  handleClose,
  taskId,
}) => {
  const { deleteTask } = useContext(TaskListContext);

  const handleDelete = () => {
    if (taskId !== null) {
      deleteTask(taskId);
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirm Removal</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to remove this task?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="primary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteTaskDialog;
