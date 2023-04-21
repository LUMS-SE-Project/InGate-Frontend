import React, {useState, useEffect ,useContext} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMagnifyingGlass,
  faBars,
  faLeftLong,
} from '@fortawesome/free-solid-svg-icons';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';
import SideBar from '../components/SideBar';
import { AuthContext } from '../context/AuthContext';

export interface Khareedar1Props {
  cart: [];
  setPage: (page: number) => void;
}
const KhareedarOrderDetails1 = (props: Khareedar1Props) => {
  const {user} = useContext(AuthContext);

  const {cart, setPage} = props;
  const [sideBar, setSideBar] = useState(false);
  const [total, setTotal ] = useState(0);

  const items: any = cart;

  useEffect(()=>{
    let temp = 0;
    items.forEach((item : any)=>{
      if (item) {
        console.log(`item.item_price * item.quantity = ${item.item_price * item.quantity}`)
        temp = temp + (item.item_price * item.quantity)
      }
    })
    setTotal(temp)
  }, [])

  const onPressSideBar = () => {
    setSideBar(true);
    console.log(sideBar);
  };

  const onPressSubmit = () => {
    setPage(5);
  };
  const onPressBack = () => {
    console.log('back Button pressed');
    setPage(2);
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

          <View className="h-auto rounded-tr-3xl rounded-tl-3xl w-max bg-white pt-3">
            <View>
              <View className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-auto placeholder-slate-900 mt-5 pb-4">
                <Text className="text-2xl text-CTA-primary font-Questrial mt-4 mb-2 ml-1">
                  Delivery Details
                </Text>
                <View>
                  <Text className="20 text-base font-Questrial mt-2 ml-1">
                    {user.name}
                  </Text>
                  <Text className="text-base font-Questrial mt-2 ml-1">
                    Customer Address
                  </Text>
                  <Text className="text-base font-Questrial mt-2 ml-1">
                    Partial Order
                  </Text>
                  <Text className="text-base font-Questrial mt-2 ml-1">
                    Gender Preference
                  </Text>
                </View>
              </View>

              <View className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-auto placeholder-slate-900 mt-5 pb-8">
                <Text className="text-2xl text-CTA-primary font-Questrial mt-4 ml-1">
                  Order Summary
                </Text>
                <View
                  className="pt-2"
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
                {items.map((item: any) => {
                  return (
                    <View>
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                          }}>
                          <Text className="w-40 text-lg font-Questrial mt-2 ml-1">
                            {item["item_name"]}
                          </Text>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                          }}>
                          <Text className="w-20 text-lg font-Questrial mt-2 ml-2">
                            {item["quantity"]}
                          </Text>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                          }}>
                          <Text className="w-20 text-lg font-Questrial mt-2 ml-2">
                            {item["item_price"]}
                          </Text>
                        </View>


                      </View>
                    </View>
                  );
                })}
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View>
                    <Text className="text-xl text-CTA-primary font-Questrial mt-4 ml-1">
                      Total Amount
                    </Text>
                  </View>
                  <View>
                    <Text className="text-lg text-CTA-primary font-Questrial mt-4 ml-20">
                      {total}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'center'}}
                className="pt-2 mb-2">
                <TouchableOpacity
                  onPress={onPressSubmit}
                  className="mb-4 shadow-2xl ml-1">
                  <View
                    className="h-12 rounded-2xl mt-5 shadow-2xl px-8 bg-CTA-primary"
                    shadow-2xl>
                    <Text className="text-lg font-Questrial text-center mt-2 text-white">
                      Continue
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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

export default KhareedarOrderDetails1;
