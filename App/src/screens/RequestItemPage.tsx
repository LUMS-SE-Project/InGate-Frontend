import React, {useState} from 'react';
import {SafeAreaView, Text, View, ImageBackground} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native';
import Footer from '../components/Footer';

const RequestItem = () => {
  const [itemName, setItemName] = useState('');
  const [location, setLocation] = useState('');
  const onPressForgotPassword = () => {
    console.log('forgot password');
  };

  const onPressSubmit = () => {
    console.log('Item Name:', itemName);
    console.log('Item Location:', location);
  };
  return (
    <View className="min-h-screen min-w-screen flex justify-center align-middle">
      <ImageBackground
        source={require('../images/GradientBackground.png')}
        resizeMode="stretch"
        className="min-h-screen min-w-screen flex justify-center align-middle">
        <Text className="text-5xl font-Montserrat text-center text-white pb-8 pt-8">
          Request Item
        </Text>
        <View className="h-4/5 bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white">
          <View>
            <Text className="text-2xl font-Questrial  text-CTA-primary pt-10 pl-8 mt-10 mb-2">
              Item Name
            </Text>
            <TextInput
              keyboardType="email-address"
              className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-12 placeholder-slate-900"
              placeholder="Enter your Email Address"
              value={itemName}
              onChangeText={inputItemName => setItemName(inputItemName)}
            />
          </View>
          <View>
            <Text className="text-2xl font-Questrial  text-CTA-primary  pl-8 mt-9 mb-2">
              Item Location
            </Text>
            <TextInput
              className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-12 "
              placeholder="Enter your Password"
              value={location}
              onChangeText={inputLocation => setLocation(inputLocation)}
            />
          </View>
          <View className="h-10">
            <></>
          </View>
          <TouchableOpacity
            onPress={onPressSubmit}
            className="mt-10 shadow-2xl">
            <View
              className="bg-CTA-secondary h-12 mx-28 rounded-2xl mt-5 shadow-2xl"
              shadow-2xl>
              <Text className="text-xl font-Questrial text-center mt-2 text-white">
                Request Item
              </Text>
            </View>
          </TouchableOpacity>
          <Footer></Footer>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RequestItem;
