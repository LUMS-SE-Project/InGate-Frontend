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
  faMagnifyingGlass,
  faBars,
  faLeftLong,
} from '@fortawesome/free-solid-svg-icons';
import MenuButton from '../components/MenuButton';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';
import React from 'react';
import SideBar from '../components/SideBar';

export interface RestaurantProps {
  cart: [];
  setPage: (page: number) => void;
  setLocationSelected: (locationSelected: string) => void;
  setCart: (cart: {}) => void;
}

const RestaurantMenu = (props: any) => {
  const {cart, setPage, setLocationSelected, setCart} = props;
  const [sideBar, setSideBar] = useState(false);

  const handleButtonPress = () => {
    console.log('Button pressed');
  };

  // Dummy data for testing purposes
  const data = [

    {id: 1, name: 'chicken roll', typeAndMoney: 200, quantity: 0},
    {id: 2, name: 'Pizza', typeAndMoney: 300, quantity: 0},
    {id: 3, name: 'BIryani', typeAndMoney: 500, quantity: 0},

  ];
  const onPressSideBar = () => {
    console.log('here');

    setSideBar(true);
    console.log(sideBar);
  };
  const onPressBack = () => {
    console.log('back Button pressed');
    setPage(1);
  };
  const onPressRequestItem = () => {
    console.log('pressed');
    setCart(data);
    setPage(3);
  };
  const onPressCart = () => {
    console.log('pressed');
    setCart(data);
    setPage(4);
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
              {/* mapping the restaurant items here */}
              <View>
                {data.map(item => (
                  <MenuButton
                    key={item.id}
                    name={item.name}
                    typeAndMoney={item.typeAndMoney}
                    item={item}
                  />
                ))}
              </View>
              {/* All the items selected will be pushed to the cart by using this */}
              <TouchableOpacity
                onPress={onPressCart}
                className="mt-10 shadow-2xl bg-CTA-primary mx-10  rounded-xl">
                <View className="h-16 mx-28 rounded-2xl shadow-2xl ">
                  <Text className="text-xl font-Questrial text-center  text-black">
                    Add to Cart
                  </Text>
                </View>
              </TouchableOpacity>
              {/* If the user wants to order something separately */}
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
            {/* This is the side bar functionality */}
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
              onKhareedarPress={() => setPage(1)}
              onDostPress={() => setPage(9)}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RestaurantMenu;
