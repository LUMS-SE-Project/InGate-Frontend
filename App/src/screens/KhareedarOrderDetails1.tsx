import React, {useState} from 'react';
import {SafeAreaView, Text, View, ImageBackground} from 'react-native';
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

const KhareedarOrderDetails1 = () => {
  const [itemSearched, setItemSearched] = useState('');

  const onPressSubmit = () => {
    console.log('Order Placed');
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
    <View className=" flex justify-center align-middle bg-CTA-primary">
      <View className="mt-10">
        <TextInput
          className="shadow-2xl mx-8  rounded-xl bg-gray-100 px-4 h-12 placeholder-slate-900 mb-4"
          placeholder="Search an item"
          value={itemSearched}
          onChangeText={inputItem => setItemSearched(inputItem)}
        />
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

        <TouchableOpacity onPress={onPressSubmit} className="my-5 shadow-2xl">
          <View
            className="bg-CTA-secondary h-14 mx-24 rounded-3xl  shadow-2xl"
            shadow-2xl>
            <Text className="text-3xl font-Questrial text-center mt-3 text-white">
              Place Order
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
  );
};

export default KhareedarOrderDetails1;
