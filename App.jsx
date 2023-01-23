import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TodoProvider} from './src/context/TodosContext';
import MyTabs from './src/navigation/Tabs';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faSquareCheck} from '@fortawesome/free-regular-svg-icons/faSquareCheck';
import {faSquare} from '@fortawesome/free-regular-svg-icons/faSquare';
import {faCalendarDays} from '@fortawesome/free-regular-svg-icons/faCalendarDays';
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse';
import {faTableList} from '@fortawesome/free-solid-svg-icons/faTableList';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import {faFaceSmile} from '@fortawesome/free-regular-svg-icons/faFaceSmile';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';

library.add(
  faSquareCheck,
  faSquare,
  faCalendarDays,
  faHouse,
  faTableList,
  faCirclePlus,
  faFaceSmile,
  faXmark,
);

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MyTabs}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
};

export default App;
