import React from 'react';
import {View, Text, Pressable, Alert } from 'react-native';
import Checkbox from '../Base/Checkbox';
import {useTodoStore} from "../../context/TodosContext";
import { useNavigation } from '@react-navigation/native';


const TodoItem = ({ todo }) => {
  const todoStore = useTodoStore();
  const navigation = useNavigation();

  const formattedDeadline = (deadline) => {
    const month = deadline.split(" ")[1]
    const day = deadline.split(" ")[2]
    return `${day} ${month}`
  }

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
    <Pressable onPress={alertMessage} onLongPress={() => navigation.navigate('Add', {todoId: todo.id})}>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
		    borderRadius: 10,
        backgroundColor: 'coral',
      }}>
      <Checkbox isCompleted={todo.isCompleted} />
      <Text>{ todo.content }</Text>
      <Text>{ formattedDeadline(todo.deadline) }</Text>
    </View>
    </ Pressable>
  );
};

export default TodoItem;