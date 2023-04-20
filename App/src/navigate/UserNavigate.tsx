import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Items from '../screens/Items';

import DostOrders from '../screens/DostOrders';


export const UserNavigate = () => {
  const Stack = createNativeStackNavigator();

  Stack.Navigator.defaultProps = {
    screenOptions: {
      headerShown: false,
    },
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Items" component={Items} />
    </Stack.Navigator>
  );
};
