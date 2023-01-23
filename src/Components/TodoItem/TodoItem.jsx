import React from 'react';
import {View, Text, Pressable, Alert } from 'react-native';
import Checkbox from '../base/Checkbox';
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
       className="flex flex-row rounded-xl p-2 m-2 shadow-2xl bg-gray-600">
      <Checkbox isCompleted={todo.isCompleted} className="" />
      <Text className="mr-4 truncate">{ todo.content } </Text>
      <Text>{ formattedDeadline(todo.deadline) }</Text>
    </View>
    </ Pressable>
  );
};

export default TodoItem;