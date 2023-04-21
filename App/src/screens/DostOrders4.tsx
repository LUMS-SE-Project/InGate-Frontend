import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCircleUser,
  faBurger,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';
import instance from '../api/api';
import {AuthContext} from '../context/AuthContext';
export interface Orders1Props {
  orderData: (OrderData: any) => void;
  setPage: (page: number) => void;
  whichDostOrder: string;
}
const DostOrders4 = (props: Orders1Props) => {
  const {orderData, setPage, whichDostOrder} = props;

  const {token} = useContext(AuthContext);
  const [orderDetails, setOrderDetails] = useState<any>([]);
  const [restDeets, setRestDeets] = useState<any>({});

  useEffect(() => {
    console.log(`Order ID is ${whichDostOrder}`);
    instance
      .get(`/user/get-order-detail/${whichDostOrder}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        console.log('hello');

        // console.log(res.data["order"]["items"])
        setOrderDetails(res.data['order']['items']);
        setRestDeets(res.data['order']);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const onPressSuccess = () => {
    console.log("kabir");
    
    console.log(restDeets["_id"]);
    
    instance
      .put(
        '/user/complete-order',
        {
          order_id: restDeets["_id"],
        }
        ,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(res => {
        console.log('hello', res.data);
      })
      .catch(err => {
        console.log(err);
      });

    setPage(12);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{backgroundColor: '#fff'}}>
        <View className="bg-CTA-primary">
          <View className="flex-row">
            <View className="flex-row ml-3  mb-9  mt-12 w-10/12 h-10 bg-gray-200 rounded-xl">
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
            <View className="ml-3 mr-1 mb-9 mt-12 pt-1 rounded-xl">
              <FontAwesomeIcon icon={faCircleUser} size={30} color={'white'} />
            </View>
          </View>
          {/* INSERT A BACK BUTTON HERE */}
          {/* INSERT A PROFILE BUTTON HERE */}

          <View className="h-auto bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white pt-3">
            <View className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-auto placeholder-slate-900 mt-5 pb-8">
              <View
                className=""
                style={{display: 'flex', flexDirection: 'row'}}>
                <View
                  className=""
                  style={{display: 'flex', flexDirection: 'column'}}>
                  <Text className="w-36 text-3xl text-CTA-primary font-Questrial mt-4 ml-1">
                    {restDeets.order_location}
                  </Text>
                  <Text className="w-78 text-lg font-Questrial  ml-1">
                    Email: {restDeets.order_email}
                  </Text>
                  <Text className="w-78 text-lg font-Questrial  ml-1">
                    Delivery Location: {restDeets.delivery_location}
                  </Text>
                  <Text className="text-lg font-Questrial  ml-1">
                    Phone: {restDeets.order_number}
                  </Text>
                </View>
              </View>
              <View
                className="pt-6"
                style={{display: 'flex', flexDirection: 'row'}}>
                <View style={{display: 'flex', flexDirection: 'column'}}>
                  <Text className="w-40 text-xl text-CTA-primary font-Questrial mt-2 ml-1">
                    Item Name
                  </Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'column'}}>
                  <Text className="w-20 text-xl text-CTA-primary font-Questrial mt-2 ml">
                    Qty
                  </Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'column'}}>
                  <Text className="w-20 text-xl text-CTA-primary font-Questrial mt-2">
                    Price
                  </Text>
                </View>
              </View>
              {orderDetails.map((item: any) => {
                return (
                  <View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <View style={{display: 'flex', flexDirection: 'column'}}>
                        <Text className="w-40 text-lg font-Questrial mt-2 ml-1">
                          {item.item_name}
                        </Text>
                      </View>
                      <View style={{display: 'flex', flexDirection: 'column'}}>
                        <Text className="w-20 text-lg font-Questrial mt-2 ml-2">
                          {item.quantity}
                        </Text>
                      </View>
                      <View style={{display: 'flex', flexDirection: 'column'}}>
                        <Text className="w-20 text-lg font-Questrial mt-2 ml-2">
                          {item.item_price}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', justifyContent: 'center'}}
          className="pt-2 mb-2">
          <TouchableOpacity
            onPress={onPressSuccess}
            className="mb-4 shadow-2xl">
            <View
              style={{
                width: '100%',
                backgroundColor: '#6B85F1',
              }}
              className="h-20 w-40 rounded-2xl mt-5 shadow-2xl px-8"
              shadow-2xl>
              <Text className="text-lg font-Questrial text-center mt-2 text-white">
                Complete{'\n'} Order
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <KhareedarDostBottomButtons
            onKhareedarPress={() => setPage(0)}
            onDostPress={() => setPage(9)}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DostOrders4;
