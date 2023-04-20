import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../screens/LoginPage';
import SignUpPage from '../screens/SignUpPage';
import SignUpSuccessful from '../screens/SignUpSuccess';
import ForgetPassword from '../screens/ForgetPassword';

const Stack = createNativeStackNavigator();
Stack.Navigator.defaultProps = {
    screenOptions: {
        headerShown: false,
    },
};


export const LoggedOutNavigate = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="SignUpPage" component={SignUpPage} />
            <Stack.Screen name="SignUpSuccessful" component={SignUpSuccessful} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        </Stack.Navigator>
    );
};
