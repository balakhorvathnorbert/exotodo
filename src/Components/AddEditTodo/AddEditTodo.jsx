import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, TextInput, Button, View, Pressable } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import DatePicker from 'react-native-date-picker';

import {useTodoStore} from "../../context/TodosContext";

const AddEditTodo = ({ route }) => {
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
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add new todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Pressable onPress={() => setOpen(true)} title="">
      <FontAwesomeIcon icon="fa-regular fa-calendar-days" />
      </Pressable>
      <DatePicker
        modal
        open={open}
        date={deadline}
        mode="date"
        onConfirm={(date) => {
          setOpen(false)
          setDeadline(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <Button
        onPress={() => submitAndClear(text)}
        title={typeOfHandler}
        color="#668aff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddEditTodo;