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
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const todoStore = useTodoStore()

  return useObserver(() => {
    return (
      <View className="mt-8 px-2">
        <Text className="text-2xl text-black dark:text-white">
          {todoStore.todos[0].id}
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
            Edit <Text className="font-bold">App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
      </TodoProvider>
    </SafeAreaView>
  );
}

export default App;
