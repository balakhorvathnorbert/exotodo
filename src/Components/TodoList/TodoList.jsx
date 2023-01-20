import React from 'react';
import {ScrollView, Text} from 'react-native';
import {observer, inject} from 'mobx-react';
import { Observer, useObserver } from "mobx-react";

import {useTodoStore} from "../../context/TodosContext";
import TodoItem from "../TodoItem/TodoItem"
import FallBack from "../Base/FallBack"

const TodoList = () => {
  const todoStore = useTodoStore()
  const style = {alignItems: 'center'};

  return useObserver(() => {
    return (
			<ScrollView contentContainerStyle={style}>
				{todoStore.todos.length !== 0 ? (
					todoStore.todos.map(todo => <TodoItem todo={todo} key={todo.id} />)
				) : (
					<FallBack />
				)}
			</ScrollView>
		);
  })
}

export default TodoList;