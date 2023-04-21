import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';
import SideBar from '../components/SideBar';

export interface Khareedar2Props {
  partial: boolean;
  genderPref: string;
  cart: [];
  custLocation: string;
  locationSelected: string;
  whichOrder: number;
  allOrders: any;
  setPage: (page: number) => void;
}

const KhareedarOrderDetails2 = (props: Khareedar2Props) => {
  const {partial, genderPref, cart, custLocation, locationSelected, setPage, whichOrder, allOrders} =
    props;
  const [sideBar, setSideBar] = useState(false);
  const [name, setName] = useState('Sarim');
  const [phoneNumber, setPhoneNumber] = useState('03210239865');
  const [email, setEmail] = useState('sarim.khan@gmail.com');
  const [items, setItems] = useState([]);
  const [total, setTotal ] = useState(0);

  const  [orderToDisplay, setOrderToDisplay] = useState<any>({});

  const calculateTotal = async () => {
    let temp = 0;
    items.forEach((item : any)=>{
      if (item) {
        temp = temp + (item.item_price * item.quantity)
      }
    })
    setTotal(temp)
  }

  useEffect(()=>{
    const display = allOrders.filter((order:any) => order.order_number === whichOrder)
    setOrderToDisplay(display[0])
    console.log("Order to display", orderToDisplay)
    setItems(display[0]["items"])
  }, [])

  useEffect(()=>{
    if (items.length > 0) {
      calculateTotal()
    }
  }, [items])


  useEffect(()=>{

  }, [])

  const onPressSubmit = () => {
    orderToDisplay["accepted"] ? setPage(8) : setPage(15);
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
            <Text className="text-4xl font-Montserrat text-center ml-20 text-white pl-3 pb-6 pt-10">
              Order Details
            </Text>
            <TouchableOpacity
              onPress={() => {
                setSideBar(true);
              }}>
              <View className="ml-8 mr-1 mb-9 mt-10 pt-1 rounded-xl">
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
                    { orderToDisplay["accepted"] ? "Delivered" : "Not Delivered"}
                  </Text>
                  <Text className="text-base font-Questrial mt-2 ml-1">
                    Gender Preferences : {orderToDisplay["gender_preferences"] ? orderToDisplay["gender_preferences"] : "None"}
                  </Text>
                  <Text className="text-base font-Questrial mt-2 ml-1">
                    Partial Delivery : {orderToDisplay["partial_delivery"] ? orderToDisplay["partial_delivery"] : "No"}
                  </Text>
                  <Text className="text-base font-Questrial mt-2 ml-1">
                    Delivery Location : {orderToDisplay["delivery_location"]}
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

export default KhareedarOrderDetails2;
