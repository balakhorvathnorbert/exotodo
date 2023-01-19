import uuid from 'react-uuid';

export const createTodoStore = () => {
  return {
    todos: [],
    addTodo(todoContent) {
      const todoItem = {
        id: uuid(),
        content: todoContent,
        isCompleted: false
      }
      this.todos.push(todoItem)
    },
    completeTodo(todo) {
      this.todos = this.todos.map(todoObject => todoObject.id === todo.id ? { ...todoObject, isCompleted: true } : todoObject)
    },
    deleteTodo(todo) {
      const todoToRemove = this.todos.findIndex(todoObject => todoObject.id === todo.id)
      todoToRemove !== -1 ? this.todos.splice(todoToRemove, 1) : return
    },
    alterTodo(todo) {
      this.todos = this.todos.map(todoObject => todoObject.id === todo.id ? {...todo} : todoObject)
    }
  }
}