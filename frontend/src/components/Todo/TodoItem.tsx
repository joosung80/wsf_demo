import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo } from '../../types/todo';

interface TodoItemProps {
  todo: Todo;
  onStatusChange: () => void;
  onDelete: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onStatusChange, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="삭제" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={onStatusChange} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.status === 'COMPLETED'}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              component="span"
              style={{
                textDecoration:
                  todo.status === 'COMPLETED' ? 'line-through' : 'none',
              }}
            >
              {todo.title}
            </Typography>
          }
          secondary={todo.description}
        />
      </ListItemButton>
    </ListItem>
  );
};
