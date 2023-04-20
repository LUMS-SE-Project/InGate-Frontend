import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/AuthContext';
import Navigate from './src/navigate/Navigate';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import ItemsPage from './src/screens/Items';

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <SafeAreaView className="bg-[#3D63FF]" />
        <SafeAreaView className="min-h-screen min-w-screen flex justify-center align-middle bg-white">
          <Navigate />
          {/* <Stack.Navigator initialRouteName="ItemsPage">
            <Stack.Screen
              name="ItemsPage"
              component={ItemsPage}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator> */}
        </SafeAreaView>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
