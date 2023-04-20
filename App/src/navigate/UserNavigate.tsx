import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Items from '../screens/Items';

import DostOrders from '../screens/DostOrders';
import RequestItem from '../screens/RequestItemPage';
import PartialOrder from '../screens/PartialOrder';
import KhareedarOrderDetails1 from '../screens/KhareedarOrderDetails1';
import KhareedarOrderDetails2 from '../screens/KhareedarOrderDetails2';
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
      <Stack.Screen name="RequestItem" component={RequestItem} />
      <Stack.Screen name="PartialOrder" component={PartialOrder} />
      <Stack.Screen
        name="KhareedarOrderDetails1"
        component={KhareedarOrderDetails1}
      />
      <Stack.Screen
        name="KhareedarOrderDetails2"
        component={KhareedarOrderDetails2}
      />
    </Stack.Navigator>
  );
};
