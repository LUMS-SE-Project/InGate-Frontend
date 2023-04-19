import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AdminPortal from '../screens/AdminPortal';


export const AdminNavigate = () => {

    const Stack = createNativeStackNavigator();
    Stack.Navigator.defaultProps = {
        screenOptions: {
            headerShown: false,
        },
    };

    return (
        <Stack.Navigator>
            <Stack.Screen name="AdminPortal" component={AdminPortal} />
        </Stack.Navigator>
    )

};