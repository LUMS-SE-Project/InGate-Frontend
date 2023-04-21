import React, {useState, useContext, useEffect} from 'react';
import {View, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCircleUser,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';
import DostButton from '../components/DostButton';
import { AuthContext } from '../context/AuthContext';
import instance from '../api/api';


export interface OrdersProps {
  whichDostOrder : string;
  setWhichDostOrder : (whichDostOrder : string) => void;
  setOrderData: (OrderData: any) => void;
  setPage: (page: number) => void;
  setOrderId: (orderId: string) => void;
}

const DostOrdersPage = (props: OrdersProps) => {
  const {setOrderData, setPage, whichDostOrder, setWhichDostOrder, setOrderId} = props;

  const {user, token} = useContext(AuthContext);
  const [orders, setOrders] = useState<any>([]);

  const handleButtonPress = (item: any) => {
    console.log('Button pressed');
    setOrderData(item);
    setPage(10);

  };


  useEffect(()=>{
    instance.get(
      `/user/display-orders/${user.email}`,
      {
        headers : {
          Authorization : `Bearer ${token}`
        }
      }
    ).then((res)=>{
      console.log(res.data)
      setOrders(res.data["orders"])
      console.log(orders)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])

  // Dummy data for testing purposes
  const data = [
    {id: 1, name: 'Zakir', typeAndMoney: 'Rs 1030'},
  ];

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
                <FontAwesomeIcon
                  icon={faCircleUser}
                  size={30}
                  color={'white'}
                />
              </View>
            </View>

            <View className=" min-h-screen  rounded-tr-3xl rounded-tl-3xl w-max   bg-white flex  ">
              <View>
                {orders.map((item : any) => (
                  <DostButton
                    whichDostOrder={whichDostOrder}
                    setWhichDostOrder={setWhichDostOrder}
                    setOrderData={setOrderData}
                    item={item}
                    setPage={setPage}
                    name={item.name}
                    typeAndMoney={item.typeAndMoney}
                    setOrderId={setOrderId}
                    // handleCheckBoxClick={() => {
                    //   setOrderData(item);
                    //   setPage(11);
                    // }}

                  />
                ))}
              </View>
            </View>
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

export default DostOrdersPage;
