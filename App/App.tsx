/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useState, Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar,
  Platform,
  StyleSheet,
  AppRegistry,
} from 'react-native';
import {Button} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingPage from './src/screens/LandingPage';
import LoginPage from './src/screens/LoginPage';
import SignUp1 from './src/screens/SignUp1';
import SignUp2 from './src/screens/SignUp2';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView className="bg-[#3D63FF]" />
      <SafeAreaView className="min-h-screen min-w-screen flex justify-center align-middle bg-white">
        <Stack.Navigator initialRouteName="SignUpPage">
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUpPage"
            component={SignUp1}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUpPage2"
            component={SignUp2}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
