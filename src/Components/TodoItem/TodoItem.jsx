import React from 'react';
import {View, Text, Pressable, Alert } from 'react-native';
import Checkbox from '../Base/Checkbox';
import {useTodoStore} from "../../context/TodosContext";


const TodoItem = ({ todo }) => {
  const todoStore = useTodoStore()

  const alertMessage = () => Alert.alert('Confirmation', 'Are you sure you want to complete this todo?', [
    {
      text: 'OK',
      onPress: () => todoStore.completeTodo(todo)
    },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancelled'),
      style: 'cancel'
    }
  ]);

  return (
    <Pressable onPress={alertMessage}>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
		    borderRadius: 10,
        backgroundColor: 'coral',
        margin: 20
      }}>
      <Checkbox isCompleted={todo.isCompleted} />
      <Text>{ todo.content }</Text>
      <Text>{ todo.deadline }</Text>
    </View>
    </ Pressable>
  );
};

export default TodoItem;