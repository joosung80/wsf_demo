import { CreateTodoInput, Todo, UpdateTodoInput } from '../types/todo';
import { mockTodos } from '../mocks/todos';

// 실제 API가 구현되면 이 부분을 실제 API 호출로 대체
export class TodoService {
  private todos: Todo[] = [...mockTodos];

  async getTodos(): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.todos]);
      }, 500); // 실제 API 호출처럼 보이게 하기 위한 지연
    });
  }

  async createTodo(input: CreateTodoInput): Promise<Todo> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTodo: Todo = {
          id: Math.random().toString(36).substr(2, 9),
          ...input,
          status: 'PENDING',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        this.todos.push(newTodo);
        resolve(newTodo);
      }, 500);
    });
  }

  async updateTodo(id: string, input: UpdateTodoInput): Promise<Todo> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex === -1) {
          reject(new Error('Todo not found'));
          return;
        }
        
        const updatedTodo = {
          ...this.todos[todoIndex],
          ...input,
          updatedAt: new Date().toISOString(),
        };
        this.todos[todoIndex] = updatedTodo;
        resolve(updatedTodo);
      }, 500);
    });
  }

  async deleteTodo(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex === -1) {
          reject(new Error('Todo not found'));
          return;
        }
        
        this.todos.splice(todoIndex, 1);
        resolve();
      }, 500);
    });
  }
}

export const todoService = new TodoService();
