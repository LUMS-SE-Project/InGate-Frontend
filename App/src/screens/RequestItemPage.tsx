import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';
const RequestItem = (props: any) => {
  const {navigation} = props;
  const [itemName, setItemName] = useState('');
  const [location, setLocation] = useState('');

  const onPressSubmit = () => {
    console.log('Item Name:', itemName);
    console.log('Item Location:', location);
  };
  const onPressRequestItem = () => {
    console.log('pressed');
    navigation.navigate('Restaurant');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{backgroundColor: '#fff'}}>
        <View className="bg-CTA-primary">
          <View className="min-h-screen min-w-screen flex justify-center align-middle">
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
                onPress={onPressRequestItem}
                className="mt-10 shadow-2xl bg-CTA-primary mx-10  rounded-xl">
                <View className="h-16 mx-28 rounded-2xl shadow-2xl ">
                  <Text className="text-xl font-Questrial text-center  text-black">
                    Request Item
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
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

export default RequestItem;
