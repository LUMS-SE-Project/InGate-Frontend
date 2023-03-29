/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import { 
  Button 
} from 'react-native-elements';
import {
  NavigationContainer
} from '@react-navigation/native';
import { 
  createNativeStackNavigator 
} from '@react-navigation/native-stack';

import LandingPage from './src/screens/LandingPage';
import LoginPage from './src/screens/LoginPage';


const Stack = createNativeStackNavigator();

function App(): JSX.Element {


  return (
    <NavigationContainer>
      
      <SafeAreaView className='min-h-screen min-w-screen flex justify-center align-middle'>
        <StatusBar backgroundColor='transparent'/>

        <Stack.Navigator initialRouteName='LandingPage'>
          <Stack.Screen 
            name="LandingPage" 
            component={LandingPage}
            options={{
              headerShown: false,
            }}
            />

          <Stack.Screen
            name="LoginPage" 
            component={LoginPage} 
            options = {{
              headerShown: false,
            }}
            />
        </Stack.Navigator>
      
      </SafeAreaView>
    </NavigationContainer>
  );
}



export default App;
