import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminPortal from '../screens/AdminPortal';
import AdminAccountActivation from '../screens/AdminAccountActivation';
import AdminBlockAccount from '../screens/AdminBlockAccount';
import AdminItemRequest from '../screens/DostOrders2';

export const AdminNavigate = () => {

    console.log("AdminNavigate")
    const Stack = createNativeStackNavigator();
    Stack.Navigator.defaultProps = {
        screenOptions: {
            headerShown: false,
        },
    };

    return (
        <Stack.Navigator>
            <Stack.Screen name="AdminPortal" component={AdminPortal} />
            <Stack.Screen name="AdminAccountActivation" component={AdminAccountActivation} />
            <Stack.Screen name="AdminBlockAccount" component={AdminBlockAccount} />
            <Stack.Screen name="AdminItemRequest" component={AdminItemRequest} />
        </Stack.Navigator>
    )

};