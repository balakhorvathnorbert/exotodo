import React from 'react';
import {View} from 'react-native';
import {observer, inject} from 'mobx-react';
import { useObserver } from "mobx-react";

import {useTodoStore} from "../../context/TodosContext";
import TodoItem from "../todoitem/TodoItem"
import FallBack from "../base/FallBack"

const TodoList = observer(({ todos }) => {
  const todoStore = useTodoStore()
  const style = {alignItems: 'center'};

  return useObserver(() => {
    return (
			<View contentContainerStyle={style}>
				{todoStore.todos.length !== 0 ? (
					todoStore.todos.map(todo => <TodoItem todo={todo} key={todo.id} />)
				) : (
					<FallBack />
				)}
			</View>
		);
  })
})

export default TodoList;