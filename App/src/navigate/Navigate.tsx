import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from '../screens/LandingPage';
import LoginPage from '../screens/LoginPage';
import ItemsPage from '../screens/Items';

const LoggedOutStack = createStackNavigator();
LoggedOutStack.Navigator.defaultProps = {
    screenOptions: {
        headerShown: false,
    },
}


const Navigate = () => {
    return (
        <NavigationContainer>
            <LoggedOutStack.Navigator>
                <LoggedOutStack.Screen name="LandingPage" component={LandingPage} />
                <LoggedOutStack.Screen name="LoginPage" component={LoginPage} />
                <LoggedOutStack.Screen name="ItemsPage" component={ItemsPage} />
            </LoggedOutStack.Navigator>
        </NavigationContainer>
    );

};

export default Navigate;