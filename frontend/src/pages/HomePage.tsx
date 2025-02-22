import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { TodoList } from '../components/Todo/TodoList';
import { AddTodoForm } from '../components/Todo/AddTodoForm';
import { CreateTodoInput, Todo } from '../types/todo';
import { todoService } from '../services/todoService';

export const HomePage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const loadedTodos = await todoService.getTodos();
      setTodos(loadedTodos);
    } catch (error) {
      console.error('할 일 목록을 불러오는데 실패했습니다:', error);
    }
  };

  const handleAddTodo = async (input: CreateTodoInput) => {
    try {
      const newTodo = await todoService.createTodo(input);
      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      console.error('할 일을 추가하는데 실패했습니다:', error);
    }
  };

  const handleStatusChange = async (id: string) => {
    try {
      const todo = todos.find((t) => t.id === id);
      if (!todo) return;

      const newStatus = todo.status === 'COMPLETED' ? 'PENDING' : 'COMPLETED';
      const updatedTodo = await todoService.updateTodo(id, { status: newStatus });
      
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? updatedTodo : t))
      );
    } catch (error) {
      console.error('할 일 상태를 변경하는데 실패했습니다:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await todoService.deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('할 일을 삭제하는데 실패했습니다:', error);
    }
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        할 일 목록
      </Typography>
      <AddTodoForm onSubmit={handleAddTodo} />
      <TodoList
        todos={todos}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </Box>
  );
};
