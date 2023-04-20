import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RestaurantMenu from '../screens/RestaurantMenu';


import RequestItem from '../screens/RequestItemPage';
import PartialOrder from '../screens/PartialOrder';
import KhareedarOrderDetails1 from '../screens/KhareedarOrderDetails1';
import KhareedarOrderDetails2 from '../screens/KhareedarOrderDetails2';
import OrderPlaced from '../screens/OrderPlaced';
import ItemsPage from '../screens/Items';
import DostOrders3 from '../screens/DostOrders3';
import DostOrders4 from '../screens/DostOrders4';
import DostOrdersPage from '../screens/DostOrders';
import OrderCompleted from '../screens/OrderCompleted';
import OrderFailed from '../screens/OrderFailed';
import KhareedarFeedback from '../screens/KhareedarFeedback';
export const UserNavigate = () => {
  const Stack = createNativeStackNavigator();

  Stack.Navigator.defaultProps = {
    screenOptions: {
      headerShown: false,
    },
  };

  return (
    <Stack.Navigator initialRouteName="DostOrders4">
      <Stack.Screen name="Restaurant" component={RestaurantMenu} />
      <Stack.Screen name="Items" component={ItemsPage} />
      <Stack.Screen name="RequestItem" component={RequestItem} />
      <Stack.Screen name="PartialOrder" component={PartialOrder} />
      <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
      <Stack.Screen name="DostOrdersPage" component={DostOrdersPage} />
      <Stack.Screen name="DostOrders3" component={DostOrders3} />
      <Stack.Screen name="DostOrders4" component={DostOrders4} />
      <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
      <Stack.Screen name="OrderFailed" component={OrderFailed} />
      <Stack.Screen name="KhareedarFeedback" component={KhareedarFeedback} />


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
