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

  const todoStyle= {
    icon: todo.isCompleted ? 'fa-regular fa-square-check' : 'fa-regular fa-square',
    iconColor: todo.isCompleted ? 'red' : 'blue',
    deadlineColor: todo.isCompleted ? 'text-red-800' : 'text-black',
    contentDecoration: todo.isCompleted ? 'line-through' : ''
  }

  const alertMessageText = todo.isCompleted ? 'Are you sure you want to toggle completion?' : 'Are you sure you want to complete this todo?'

  const alertMessage = () => Alert.alert('Confirmation', alertMessageText, [
    {
      text: 'OK',
      onPress: () => todo.isCompleted ? todoStore.undoCompleteTodo(todo) : todoStore.completeTodo(todo)
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
       className="flex flex-row rounded-sm p-6 m-2 shadow-2xl bg-white border-r-4 border-r-indigo-500" style={{shadowColor: "#000",
       shadowOffset: {
         width: 0,
         height: 5,
       },
       shadowOpacity: 0.36,
       shadowRadius: 6.68,
       elevation: 11,}}>
      <Checkbox todoStyle={todoStyle} className="" />
      <Text className={`mr-4 truncate ${todoStyle.contentDecoration}`}>{ todo.content.toUpperCase() } </Text>
      <Text className={todoStyle.deadlineColor}>{ formattedDeadline(todo.deadline) }</Text>
    </View>
    </ Pressable>
  );
};

export default TodoItem;