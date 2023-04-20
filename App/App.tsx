import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/AuthContext';
import Navigate from './src/navigate/Navigate';

function App(): JSX.Element {

  return (
    <AuthProvider>
      <NavigationContainer>
        <SafeAreaView className="bg-[#3D63FF]" />
        <SafeAreaView className="min-h-screen min-w-screen flex justify-center align-middle bg-white">
          <Navigate />
        </SafeAreaView>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
