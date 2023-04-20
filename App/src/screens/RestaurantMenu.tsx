import {useEffect, useState} from 'react';
import {
  Platform,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCircleUser,
  faMagnifyingGlass,
  faBars,
  faLeftLong,
} from '@fortawesome/free-solid-svg-icons';
import MenuButton from '../components/MenuButton';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import SideBar from '../components/SideBar';

const RestaurantMenu = (props: any) => {
  const {navigation} = props;
  const [sideBar, setSideBar] = useState(false);

  const handleButtonPress = () => {
    console.log('Button pressed');
  };

  // Dummy data for testing purposes
  const data = [
    {id: 1, name: 'Item name A', typeAndMoney: 'Food Type 1, $10'},
    {id: 2, name: 'Restaurant B', typeAndMoney: 'Food Type 2, $15'},
    {id: 3, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    {id: 4, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    {id: 5, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    {id: 6, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    {id: 7, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    {id: 8, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    {id: 9, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 10, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 11, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 12, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 13, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 14, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 15, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 16, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 17, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 18, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 19, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 120, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
  ];
  const onPressSideBar = () => {
    console.log('here');

    setSideBar(true);
    console.log(sideBar);
  };
  const onPressBack = () => {
    console.log('back Button pressed');
  };
  const onPressRequestItem = () => {
    console.log('pressed');
    navigation.navigate('RequestItem');
  };
  const onPressCart = () => {
    console.log('pressed');
    navigation.navigate('KhareedarOrderDetails1');
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
            <View className="flex-row">
              <TouchableOpacity className="mt-14 ml-5" onPress={onPressBack}>
                <FontAwesomeIcon icon={faLeftLong} size={27} color={'white'} />
              </TouchableOpacity>
              <View className="flex-row ml-3  mb-9  mt-12 w-8/12 h-10 bg-gray-200 rounded-xl">
                <View className="mx-3 mt-2">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size={27}
                    color={'white'}
                  />
                </View>
                <TextInput
                  className=" w-9/12 h-10 bg-gray-200"
                  placeholder="Search a location"
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setSideBar(true);
                }}>
                <View className="ml-5 mr-1 mb-9 mt-12 pt-1 rounded-xl">
                  <FontAwesomeIcon icon={faBars} size={30} color={'white'} />
                </View>
              </TouchableOpacity>
            </View>

            <View className=" min-h-screen  rounded-tr-3xl rounded-tl-3xl w-max   bg-white flex  ">
              <View>
                {data.map(item => (
                  <MenuButton
                    key={item.id}
                    onPress={handleButtonPress}
                    name={item.name}
                    typeAndMoney={item.typeAndMoney}
                  />
                ))}
              </View>
              <TouchableOpacity
                onPress={onPressCart}
                className="mt-10 shadow-2xl bg-CTA-primary mx-10  rounded-xl">
                <View className="h-16 mx-28 rounded-2xl shadow-2xl ">
                  <Text className="text-xl font-Questrial text-center  text-black">
                    Add to Cart
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onPressRequestItem}
                className="mt-10 shadow-2xl bg-CTA-primary mx-10 mb-5 rounded-xl">
                <View className="h-16 mx-28 rounded-2xl shadow-2xl ">
                  <Text className="text-xl font-Questrial text-center  text-black">
                    Request Item
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {sideBar ? (
              <SideBar
                onClosePress={() => {
                  setSideBar(false);
                }}
              />
            ) : (
              []
            )}
            <KhareedarDostBottomButtons
              onKhareedarPress={() => navigation.navigate('Items')}
              onDostPress={() => navigation.navigate('DostOrdersPage')}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RestaurantMenu;
