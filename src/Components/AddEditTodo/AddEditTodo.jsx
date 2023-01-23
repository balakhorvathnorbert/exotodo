import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, Button, View, Pressable, Modal } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import DatePicker from 'react-native-date-picker';

import {useTodoStore} from "../../context/TodosContext";

const AddEditTodo = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [open, setOpen] = useState(false)

  const todoStore = useTodoStore()
  const todoId = route.params ? route.params.todoId : false
  const typeOfHandler = todoId ? 'Update' : 'Add'

  useFocusEffect(
    useCallback(() => {
      if (todoId) {
        const existingTodo = todoStore.getTodo(todoId)
        setText(existingTodo.content)
        setDeadline(new Date(existingTodo.deadline))
      }
    }, [todoId])
  )

  const changeHandler = (value) => {
    setText(value);
  };

  const submitAndClear = () => {
   
    const todo = {
      id: todoId,
      content: text,
      deadline: deadline.toString()
    }
   todoId ? todoStore.alterTodo(todo) : todoStore.addTodo(todo)
    changeHandler("");
    navigation.navigate('Home')
  };

  const formattedDeadline = (deadline) => {
    const month = String(deadline).split(" ")[1]
    const day = String(deadline).split(" ")[2]
    return `${day} ${month}`
  }
  
  return (
    <View className="flex flex-1 mt-10">
      <TextInput
        style={styles.input}
        placeholder="Add new todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <View className="flex flex-row gap-8 items-center">
      <Pressable onPress={() => setOpen(true)} title="">
      <FontAwesomeIcon icon="fa-regular fa-calendar-days" size="38" />
      </Pressable>
      <Text className="text-lg">{ formattedDeadline(deadline) }</Text>
      </View>
      <DatePicker
        modal
        open={open}
        date={deadline}
        mode="date"
        size={30}
        onConfirm={(date) => {
          setOpen(false)
          setDeadline(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <View style={{flex: 1, justifyContent: 'flex-end', width: '100%'}}>
      <Button
        onPress={() => submitAndClear(text)}
        title={typeOfHandler}
        color="#668aff"
        className=""
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
    
    fontSize: 26,
    color: "gray",
    
  },
});

export default AddEditTodo;