import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewPalette from './screens/AddPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen
      name="ColorPalette"
      component={ColorPalette}
      options={({ route }) => ({ title: route.params.paletteName })}
    />
  </MainStack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator
      screenOptions={{
        presentation: 'modal',
      }}
    >
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="AddNewPalette" component={AddNewPalette} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
