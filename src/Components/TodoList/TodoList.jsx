import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {observer, inject} from 'mobx-react';
import { Observer, useObserver } from "mobx-react";

import {useTodoStore} from "../../context/TodosContext";
import TodoItem from "../TodoItem/TodoItem"
import FallBack from "../Base/FallBack"

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