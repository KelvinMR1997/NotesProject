import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/Navigator/StackNavigator';
import {Text} from 'react-native';
import {tableStyles} from './src/Theme/appTheme';

const App = () => {
  return (
    <NavigationContainer style={tableStyles.globalMargin}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
