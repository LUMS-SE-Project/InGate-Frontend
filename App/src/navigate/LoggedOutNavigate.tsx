import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from '../screens/LandingPage';
import LoginPage from '../screens/LoginPage';

const Stack = createNativeStackNavigator();
Stack.Navigator.defaultProps = {
    screenOptions: {
        headerShown: false,
    },
};


export const LoggedOutNavigate = () => {


    return (
        <Stack.Navigator>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="LoginPage" component={LoginPage} />
        </Stack.Navigator>
    );
};
