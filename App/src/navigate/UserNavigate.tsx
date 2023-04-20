import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RestaurantMenu from '../screens/RestaurantMenu';



export const UserNavigate = () => {
  const Stack = createNativeStackNavigator();

  Stack.Navigator.defaultProps = {
    screenOptions: {
      headerShown: false,
    },
  };

  return (
    <Stack.Navigator initialRouteName='Restaurant'>
      <Stack.Screen name="Restaurant" component={RestaurantMenu} />
    </Stack.Navigator>
  );
};
