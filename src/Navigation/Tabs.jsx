import React from 'react';
import { View, ScrollView, Button, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import TodoList from "../components/todoList/TodoList"
import AddEditTodoScreen from "../screens/AddEditTodoScreen"

const Tab = createBottomTabNavigator();

const MyTabs = () => {

  return (
    <Tab.Navigator initialRouteName="Init" screenOptions={() => ({
      tabBarShowLabel: false,
      tabBarStyle: { backgroundColor: 'transparent', position: 'absolute', elevation: 0 },
      tabBarActiveTintColor: '#006d5b',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={TodoList} initialParams={{ todoType: 'incomplete' }} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon="fa-solid fa-house" size={24} color={color} />
        ),
        title: 'My task',
      }} />

      <Tab.Screen name="Add" component={AddEditTodoScreen} options={({ route, navigation }) => ({
        tabBarStyle: { display: "none" },
        title: 'Add New Task',
        headerStyle: {
          backgroundColor: 'transparent'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        tabBarIcon: ({ size }) => (
          <View
            style={{
              position: 'absolute',
              bottom: 15,
              height: 58,
              width: 58,
              borderRadius: 58,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon icon="fa-solid fa-circle-plus" size={58} color="#5a95ff" />
          </View>
        )
      })}
      />

      <Tab.Screen name="Completed" component={TodoList} initialParams={{ todoType: 'complete' }} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon="fa-solid fa-table-list" size={24} color={color} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default MyTabs;