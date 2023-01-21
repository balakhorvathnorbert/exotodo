/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TodoProvider} from "./src/context/TodosContext";
import {useTodoStore} from "./src/context/TodosContext";
import { Observer, useObserver } from "mobx-react";
import TodoList from "./src/Components/TodoList/TodoList"
import AddEditTodo from "./src/Components/AddEditTodo/AddEditTodo"
import MyTabs from "./src/Navigation/Tabs"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons/faSquareCheck'
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons/faCalendarDays'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faTableList } from '@fortawesome/free-solid-svg-icons/faTableList'

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

library.add(faSquareCheck, faSquare, faCalendarDays, faHouse, faTableList)

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = "bg-green-300 dark:bg-slate-900"

  return (
    <>
      <TodoProvider>
      <NavigationContainer>
        <MyTabs />
        </NavigationContainer>
      </TodoProvider>
    <Text className="font-bold text-green-800">Hello</Text>
    </>
  );
}

export default App;
