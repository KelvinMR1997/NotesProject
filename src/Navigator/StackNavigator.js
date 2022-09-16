import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../Screens/Home';
import {Note} from '../Screens/Note';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Note" component={Note} />
    </Stack.Navigator>
  );
};
