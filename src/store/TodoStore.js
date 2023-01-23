import uuid from 'react-uuid';
import {initialMockTodos} from '../mock/InitialTodos';

export const createTodoStore = () => {
  return {
    todos: initialMockTodos,
    addTodo(todo) {
      const todoItem = {
        id: uuid(),
        content: todo.content,
        deadline: todo.deadline,
        isCompleted: false,
      };
      this.todos.push(todoItem);
    },
    getTodo(id) {
      const requestedTodo = this.todos.find(todo => todo.id === id);
      return requestedTodo;
    },
    completeTodo(todo) {
      this.todos = this.todos.map(todoObject =>
        todoObject.id === todo.id
          ? {...todoObject, isCompleted: true}
          : todoObject,
      );
    },
    undoCompleteTodo(todo) {
      this.todos = this.todos.map(todoObject =>
        todoObject.id === todo.id
          ? {...todoObject, isCompleted: false}
          : todoObject,
      );
    },
    deleteTodo(todo) {
      const todoToRemove = this.todos.findIndex(
        todoObject => todoObject.id === todo.id,
      );
      if (todoToRemove !== -1) {
        this.todos.splice(todoToRemove, 1);
      }
    },
    alterTodo(todo) {
      this.todos = this.todos.map(todoObject =>
        todoObject.id === todo.id ? {...todoObject, todo} : todoObject,
      );
    },
  };
};
