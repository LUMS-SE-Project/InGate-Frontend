import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

const AdminPortal = () => {
  const [blockDeets, setBlockDeets] = useState('');

  const onPressSubmit = () => {
    console.log('Block Details: ', blockDeets);

  };

  return (
    <View className="min-h-screen min-w-screen flex pt-16 bg-white items-center">
        <Text className="text-5xl font-Montserrat text-center text-CTA-primary">
          Admin Portal
        </Text>
          
          <View style={{flexDirection: 'column'}} className='pt-28'>
            <TouchableOpacity
              onPress={onPressSubmit}
              className="mt-10 shadow-2xl">
              <View
                style={{width: "100%"}}
                className="bg-CTA-primary h-24 rounded-2xl mt-5 shadow-2xl px-16 align-middle justify-center"
                shadow-2xl>
                <Text className="text-2xl font-Questrial text-center text-white">
                  Account{"\n"}Management
                </Text>
              </View>
            </TouchableOpacity>
      
            <TouchableOpacity
              onPress={onPressSubmit}
              className="mt-10 shadow-2xl">
              <View
                style={{width: '100%'}}
                className="bg-CTA-primary h-24 rounded-2xl mt-16 shadow-2xl px-16 align-middle justify-center"
                shadow-2xl>
                <Text className="text-2xl font-Questrial text-center text-white">
                  Request{"\n"}Management
                </Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>

  );
};

export default AdminPortal;
