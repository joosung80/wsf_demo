import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import { CreateTodoInput } from '../../types/todo';

interface AddTodoFormProps {
  onSubmit: (todo: CreateTodoInput) => void;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({
      title: title.trim(),
      description: description.trim(),
    });

    setTitle('');
    setDescription('');
  };

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="할 일"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          multiline
          rows={2}
        />
        <Box sx={{ mt: 2, textAlign: 'right' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!title.trim()}
          >
            추가
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
