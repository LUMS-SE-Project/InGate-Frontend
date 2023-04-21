import {useEffect, useState, useContext} from 'react';
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
import instance from '../api/api';
import {AuthContext} from '../context/AuthContext';

export interface RestaurantProps {
  cart: [];
  setPage: (page: number) => void;
  setLocationSelected: (locationSelected: string) => void;
  setCart: (cart: {}) => void;
  AddToCart : (item : any) => void;
  RemoveFromCart : (item : any) => void;
}

const RestaurantMenu = (props: any) => {
  const {token} = useContext(AuthContext);

  const {cart, setPage, locationSelected, setCart, AddToCart, RemoveFromCart} = props;
  const [sideBar, setSideBar] = useState(false);
  const [menu, setMenu] = useState([]);

  const handleButtonPress = () => {
    console.log('Button pressed');
  };


  useEffect(()=>{
    instance.get(
      `/user/displayitems/${locationSelected}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response)=>{
      const items : any = [];
      response.data["displayItems"].forEach((item:any)=>{

        // try and find the item in the cart
        const index = cart.findIndex((cartItem: any) => cartItem.item_name === item["item_name"]);

        items.push({
          item_name: item["item_name"],
          item_price: item["item_price"],
          item_desription: item['item_desription'],
          quantity: index !== -1 ? cart[index].quantity : 0,
        })
      })
      setMenu(items)
    }).catch((err)=>{console.log(err)})
  }, [])
  // Dummy data for testing purposes
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
    // setCart(menu);
    setPage(3);
  };
  const onPressCart = () => {
    // setCart(menu);
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
                {menu.map(item => (
                  <MenuButton
                    name={item["item_name"]}
                    price={item["item_price"]}
                    description={item["item_desription"]}
                    item={item}
                    AddToCart={AddToCart}
                    RemoveFromCart={RemoveFromCart}
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
              onKhareedarPress={() => setPage(0)}
              onDostPress={() => setPage(9)}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RestaurantMenu;
