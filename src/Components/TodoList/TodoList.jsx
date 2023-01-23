import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import { observer, inject } from 'mobx-react';
import { useObserver } from "mobx-react";

import { useTodoStore } from "../../context/TodosContext";
import TodoItem from "../todoitem/TodoItem"
import FallBack from "../base/FallBack"
import ScreenTitle from "../screentitle/ScreenTitle"

const TodoList = observer(({ navigation, todos, route }) => {
	const todoStore = useTodoStore()
	const style = { alignItems: 'center' };
	const todoCondition = route.params.todoType === 'incomplete' ? false : true
	const filteredTodos = todoStore.todos.filter(todo => todo.isCompleted === todoCondition)
	const titleText = route.params.todoType === 'incomplete' ? 'My task' : 'Completed'

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: () => <ScreenTitle titleText={titleText} todoCount={filteredTodos.length} />,
			headerShadowVisible: false,
			headerTitleStyle: {
				fontWeight: 'bold',
			},
			headerTitleAlign: 'center',
		})
	}, [navigation, filteredTodos])

	return useObserver(() => {
		return (
			<View contentContainerStyle={style}>
				{filteredTodos.length !== 0 ? (
					filteredTodos.map(todo => <TodoItem todo={todo} key={todo.id} />)
				) : (
					<FallBack />
				)}
			</View>
		);
	})
})

export default TodoList;