import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DostOrdersPage from '../screens/DostOrders';
import DostOrders3 from '../screens/DostOrders3;
import AdminItemRequest from '../screens/DostOrders2';
import DostOrders4 from '../screens/DostOrders4';

export const DostNavigate = () => {
  const Stack = createNativeStackNavigator();

  Stack.Navigator.defaultProps = {
    screenOptions: {
      headerShown: false,
    },
  };

  return (
    <Stack.Navigator initialRouteName="DostOrders4">
      <Stack.Screen name="DostOrders" component={DostOrdersPage} />
      <Stack.Screen name="DostOrders4" component={DostOrders4} />
    </Stack.Navigator>
  );
};
