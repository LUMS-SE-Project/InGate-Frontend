import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../screens/LoginPage';
import SignUpPage from '../screens/SignUpPage';

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
        </Stack.Navigator>
    );
};
