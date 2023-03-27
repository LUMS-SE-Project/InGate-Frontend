/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';



function App(): JSX.Element {
  return (
    <SafeAreaView className=''>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className=''>

        <View className='min-h-screen min-w-screen flex justify-center align-middle bg-CTA-primary'>
          <Text className='text-4xl font-Montserrat text-center text-white'>Welcome to InGate</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
