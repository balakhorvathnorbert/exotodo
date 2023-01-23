import React, {createContext, useContext} from 'react';
import {createTodoStore} from '../store/TodoStore';
import {useLocalObservable} from 'mobx-react';

const TodosContext = createContext(null);
export const TodoProvider = ({children}) => {
  const todoStore = useLocalObservable(createTodoStore);

  return (
    <TodosContext.Provider value={todoStore}>{children}</TodosContext.Provider>
  );
};

export const useTodoStore = () => useContext(TodosContext);
