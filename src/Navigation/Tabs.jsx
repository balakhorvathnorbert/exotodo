import React from 'react';
import { View, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import TodoList from "../Components/TodoList/TodoList"
import AddEditTodo from "../Components/AddEditTodo/AddEditTodo"

const Tab = createBottomTabNavigator();

const MyTabs = () => {

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={TodoList} options={{
          tabBarIcon:({size,color}) => (
            <FontAwesomeIcon icon="fa-solid fa-house" size={24} color="coral" />
          ),
      }} />
      <Tab.Screen name="Add" component={AddEditTodo} options={{
          tabBarIcon:({size,color}) => (
            <FontAwesomeIcon icon="fa-solid fa-table-list" size={24} color="coral" />
          ),
      }} />
    </Tab.Navigator>
  );
}

export default MyTabs;