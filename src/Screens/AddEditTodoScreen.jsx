import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddEditTodo from '../components/addedittodo/AddEditTodo';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  Pressable
} from 'react-native';


const AddEditTodoScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator>
        <Stack.Screen name="Add" component={AddEditTodo} options={({ navigation }) => ({
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" size={30} color="black" />
            </Pressable>
          ),
          title: 'Add New Task',
        })}
        />
      </Stack.Navigator>
  );
}

export default AddEditTodoScreen;
