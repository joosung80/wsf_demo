import React from 'react';
import { Box, Typography, List } from '@mui/material';
import { Todo } from '../../types/todo';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onStatusChange: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onStatusChange, onDelete }) => {
  if (todos.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6" color="text.secondary">
          할 일이 없습니다. 새로운 할 일을 추가해보세요!
        </Typography>
      </Box>
    );
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onStatusChange={() => onStatusChange(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </List>
  );
};
