import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faLock,
  faAirFreshener,
  faAnchor,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAdobe,
  faApple,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';
import {ScrollView} from 'react-native-gesture-handler';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

const KhareedarOrderDetails2 = () => {
  const onPressSubmit = () => {
    console.log('Continue Pressed');
  };

  const data = [
    {id: 1, name: 'Jeelay ke kabab', quantity: 'Qty', price: 'price'},
    {id: 2, name: 'Jeelay ke mohabattan', quantity: 'Qty', price: 'price'},
    {id: 3, name: 'Jeelay ki wajah se death', quantity: 'Qty', price: 'price'},
  ]; //dummy data

  const renderItem = item => (
    <View className="flex-row">
      <View key={item.id} className="">
        <Text className="px-3 text-base font-Questrial text-center mt-3 text-black text-left">
          {item.name}
        </Text>
      </View>

      <View key={item.id}>
        <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-right">
          {item.quantity}
        </Text>
      </View>
    </View>
  );
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{backgroundColor: '#fff'}}>
        <View className=" flex justify-center align-middle bg-CTA-primary">
          <View>
            <Text className="text-5xl font-Montserrat text-center text-white pb-4 pt-6 mt-3">
              Order Details
            </Text>
          </View>

          <View className="items-stretch bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white">
            <View
              className="bg-gray-200 flex-col items-stretch mx-6 rounded-2xl mt-5 shadow-2xl "
              shadow-2xl>
              <Text className="pl-3 py-2 text-xl font-Questrial text-center mt-2 text-CTA-primary text-left">
                Delivery Details
              </Text>
              <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
                Customer Name
              </Text>
              <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
                Customer Address
              </Text>
              <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
                Partial Order
              </Text>
              <Text className="pl-3 pb-4 text-base font-Questrial text-center mt-3 text-black text-left">
                Gender Preference
              </Text>
            </View>

            <View
              className="bg-gray-200  mx-6 rounded-2xl mt-5 shadow-2xl flex-col items-stretch"
              shadow-2xl>
              <Text className="pl-3 py-2 text-xl font-Questrial text-center mt-2 text-CTA-primary text-left">
                Order Summary
              </Text>

              <ScrollView>{data.map(item => renderItem(item))}</ScrollView>
              <View className="flex-row">
                <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
                  Delivery Charges
                </Text>
                <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
                  price
                </Text>
              </View>
              <View className="flex-row">
                <Text className="pl-3 pb-4 text-lg font-Questrial text-center mt-3 text-CTA-primary text-left">
                  Total cost
                </Text>
                <Text className="pl-3 pb-4 text-lg font-Questrial text-center mt-3 text-CTA-primary text-left">
                  Price
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={onPressSubmit}
              className="my-5 shadow-2xl">
              <View
                className="bg-CTA-primary h-14 mx-24 rounded-3xl  shadow-2xl"
                shadow-2xl>
                <Text className="text-3xl font-Questrial text-center mt-3 text-white">
                  Continue
                </Text>
              </View>
            </TouchableOpacity>
            <View className="h-8">
              <></>
            </View>
          </View>
          <View>
            <KhareedarDostBottomButtons
              onKhareedarPress={() => console.log('Khareedar button pressed')}
              onDostPress={() => console.log('Dost button pressed')}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KhareedarOrderDetails2;
