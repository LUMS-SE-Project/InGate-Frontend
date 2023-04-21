import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBurger, faLeftLong} from '@fortawesome/free-solid-svg-icons';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';
import instance from '../api/api';
import { AuthContext } from '../context/AuthContext';

export interface OrdersProps {
  orderData: (OrderData: any) => void;
  setPage: (page: number) => void;
  whichDostOrder : string;
}

const DostOrders3 = (props:OrdersProps) => {
  const {orderData, setPage, whichDostOrder} = props;
  const {token} = useContext(AuthContext);
  const [orderDetails, setOrderDetails] = useState<any>([])
  const [restDeets, setRestDeets] = useState<any>({})


  const [items, setItems] = useState([]);

  useEffect(()=>{
    console.log(`Order ID is ${whichDostOrder}`)
    instance.get(
      `/user/get-order-detail/${whichDostOrder}`,
      {
        headers : {
          Authorization: `Bearer ${token}`
        }
      }
    ).then((res)=>{
      console.log('hello');
      
      // console.log(res.data["order"]["items"])
      setOrderDetails(res.data["order"]["items"])
      setRestDeets(res.data["order"])
      
    }).catch((err)=>{
      console.log(err)
    }
    )
  }, [])

  const onPressBack = () => {
    setPage(9);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{backgroundColor: '#fff'}}>
        <View className="bg-CTA-primary">
          <View className="flex-row ">
            <TouchableOpacity className="mt-12 ml-7 w-16" onPress={onPressBack}>
              <FontAwesomeIcon icon={faLeftLong} size={27} color={'white'} />
            </TouchableOpacity>
            <Text className="text-4xl font-Montserrat text-center text-white pb-6 ml-1 pt-10">
              Order Details
            </Text>
          </View>

          <View className="h-auto rounded-tr-3xl rounded-tl-3xl w-max bg-white pt-3">
                <View className="shadow-2xl mx-8 rounded-xl bg-gray-100 mb-5 px-4 h-auto placeholder-slate-900 mt-5 pb-8">
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
                          <View
                            style={{display: 'flex', flexDirection: 'column'}}>
                            <Text className="w-40 text-lg font-Questrial mt-2 ml-1">
                              {item.item_name}
                            </Text>
                          </View>
                          <View
                            style={{display: 'flex', flexDirection: 'column'}}>
                            <Text className="w-20 text-lg font-Questrial mt-2 ml-2">
                              {item.quantity}
                            </Text>
                          </View>
                          <View
                            style={{display: 'flex', flexDirection: 'column'}}>
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
        <View className='w-3/4 h-72'></View>
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

export default DostOrders3;
