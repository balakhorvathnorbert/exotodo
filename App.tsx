/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TodoProvider} from './src/context/TodosContext';
import MyTabs from './src/navigation/Tabs';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faSquareCheck} from '@fortawesome/free-regular-svg-icons/faSquareCheck';
import {faSquare} from '@fortawesome/free-regular-svg-icons/faSquare';
import {faCalendarDays} from '@fortawesome/free-regular-svg-icons/faCalendarDays';
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse';
import {faTableList} from '@fortawesome/free-solid-svg-icons/faTableList';

library.add(faSquareCheck, faSquare, faCalendarDays, faHouse, faTableList);

function App(): JSX.Element {
  return (
    <>
      <TodoProvider>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </TodoProvider>
    </>
  );
}

export default App;
