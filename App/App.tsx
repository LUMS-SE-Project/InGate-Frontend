import {SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingPage from './src/screens/LandingPage';
import LoginPage from './src/screens/LoginPage';
import SignUp1 from './src/screens/SignUp1';
import SignUp2 from './src/screens/SignUp2';
import KhareedarOrderDetails1 from './src/screens/KhareedarOrderDetails1';
import KhareedarOrderDetails2 from './src/screens/KhareedarOrderDetails2';
import RequestItem from './src/screens/RequestItemPage';
import ItemsPage from './src/screens/Items';

// import PartialOrder from './src/screens/PartialOrder';
import DostFeedback from './src/screens/DostFeedback';
import KhareedarFeedback from './src/screens/KhareedarFeedback';
import OrderPlaced from './src/screens/OrderPlaced';
import AdminPortal from './src/screens/AdminPortal';
import InvalidAccess from './src/screens/InvalidAccess';
import SignUpSuccessful from './src/screens/SignUpSuccess';

// import PartialOrder from './src/screens/PartialOrder';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView className="bg-[#3D63FF]" />
      <SafeAreaView className="min-h-screen min-w-screen flex justify-center align-middle bg-white">
        <Stack.Navigator initialRouteName="KhareedarFeedback">
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUpPage"
            component={SignUp1}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUpPage2"
            component={SignUp2}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="RequestItem"
            component={RequestItem}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="ItemsPage"
            component={ItemsPage}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="KhareedarOrderDetails1"
            component={KhareedarOrderDetails1}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="DostFeedback"
            component={DostFeedback}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="KhareedarFeedback"
            component={KhareedarFeedback}
            options={{
              headerShown: false,
            }}
          />

          {/* <Stack.Screen
            name="PartialOrder"
            component={PartialOrder}
            options={{
              headerShown: false,
            }}
          /> */}

          <Stack.Screen
            name="KhareedarOrderDetails2"
            component={KhareedarOrderDetails2}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="OrderPlaced"
            component={OrderPlaced}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="AdminPortal"
            component={AdminPortal}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="InvalidAccess"
            component={InvalidAccess}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUpSuccessful"
            component={SignUpSuccessful}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
