import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

const RequestItem = () => {
  const [itemName, setItemName] = useState('');
  const [partialOrder, setPartialOrder] = useState('none');
  const [genderPreference, setGenderPreference] = useState('none');

  const onPressSubmit = () => {
    console.log('Item Name:', itemName);
    console.log('Partial Order:', partialOrder);
    console.log('Gender Preference:', genderPreference);
  };

  return (
    <View className="min-h-screen min-w-screen flex justify-center align-middle">
      <ImageBackground
        source={require('../images/GradientBackground.png')}
        resizeMode="stretch"
        className="min-h-screen min-w-screen flex justify-center align-middle">
        <TextInput
          className="ml-5 mr-5 mb-9 w-296 h-34 bg-gray-200 rounded-xl"
          placeholder="Search a location"
        />
        <View className="h-4/5 bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white">
          <View>
            <Text className="text-2xl font-Questrial text-CTA-primary pt-10 pl-8 mt-10 mb-2">
              Partial Order
            </Text>
            <View style={{position: 'relative', marginLeft: 8}}>
              <Picker
                style={{width: '100%', height: 49, backgroundColor: 'rgba(26, 67, 78, 0.05)', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5}}
                selectedValue={partialOrder}
                onValueChange={(itemValue, itemIndex) => setGenderPreference(itemValue)}
              >
                <Picker.Item label="None" value="none" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </View>
          </View>

            <View>
                <Text className="text-2xl font-Questrial text-CTA-primary pl-8 mt-9 mb-2">
                Gender Preferences
                </Text>
                <View style={{position: 'relative', marginLeft: 8}}>
              <Picker
                style={{width: '100%', height: 49, backgroundColor: 'rgba(26, 67, 78, 0.05)', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5}}
                selectedValue={partialOrder}
                onValueChange={(itemValue, itemIndex) => setPartialOrder(itemValue)}
              >
                <Picker.Item label="None" value="none" />
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </View>
            </View>
            <View className="h-10">
                <></>
            </View>
            <TouchableOpacity onPress={onPressSubmit} className="mt-10 shadow-2xl">
                <View
                style={{ backgroundColor: '#6B85F1' }} // change background color here
                className="bg-CTA-secondary h-12 mx-28 rounded-2xl mt-5 shadow-2xl"
                shadow-2xl
                >
                <Text className="text-xl font-Questrial text-center mt-2 text-white">
                    Continue
                </Text>
                </View>
            </TouchableOpacity>
            </View>

            <KhareedarDostBottomButtons
            onKhareedarPress={() => console.log('Khareedar button pressed')}
            onDostPress={() => console.log('Dost button pressed')}
            />
        </ImageBackground>
        </View>
    );
    };

    export default RequestItem;
