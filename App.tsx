/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {TamaguiProvider, getTokenValue} from 'tamagui';

import config from './tamagui.config';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import Starter from './src/screens/Starter';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from './src/components/Icon/Icon';
import TestScreen from './src/screens/Test';
import NextScreen from './src/screens/Next';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const nswColor = getTokenValue('$blue01', 'color');

const HomeScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Test" component={TestScreen} />
      <Stack.Screen name="Next" component={NextScreen} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: () => {
              let iconName = 'Home';
              if (route.name === 'Settings') {
                iconName = 'Settings';
              } else if (route.name === 'Notifications') {
                iconName = 'Vibrate';
              } else if (route.name === 'More') {
                iconName = 'MoreHorizontal';
              } else if (route.name === 'Start') {
                iconName = 'Play';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={22} color={nswColor} />;
            },
            tabBarActiveTintColor: nswColor,
            tabBarInactiveTintColor: nswColor,
          })}>
          <BottomTab.Screen
            name="BottomTab"
            component={HomeScreens}
            options={{headerShown: false}}
          />
          <BottomTab.Screen name="Start" component={Starter} />
          <BottomTab.Screen name="Notifications" component={HomeScreen} />
          <BottomTab.Screen name="Settings" component={Starter} />
          <BottomTab.Screen name="More" component={HomeScreen} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  );
};

export default App;
