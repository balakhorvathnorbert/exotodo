/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {TodoProvider} from "./src/context/TodosContext";
import {useTodoStore} from "./src/context/TodosContext";
import { Observer, useObserver } from "mobx-react";
import TodoList from "./src/Components/TodoList/TodoList"
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

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

library.add(faSquareCheck, faSquare)

function Section({children, title}: SectionProps): JSX.Element {
  const todoStore = useTodoStore()

  return useObserver(() => {
    return (
      <View className="mt-8 px-2">
        <Text className="text-2xl text-black dark:text-white">
          Todos
        </Text>
        <Text className="mt-2 text-lg text-black dark:text-white">
          {children}
        </Text>
      </View>
    );
  })
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = "bg-neutral-300 dark:bg-slate-900"

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <TodoProvider>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <Header />
        <View className="bg-white dark:bg-black">
          <Section title="Step One">
            <TodoList />
          </Section>
        </View>
      </ScrollView>
      </TodoProvider>
    </SafeAreaView>
  );
}

export default App;
