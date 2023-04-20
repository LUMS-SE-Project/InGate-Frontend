import React, {useState, useEffect} from 'react';
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
  faLock,
  faAirFreshener,
  faAnchor,
  faSolid,
  faCircleXmark,
  faSharp,
  fas,
  faBurger,
  faLeftLong,
} from '@fortawesome/free-solid-svg-icons';
// import {Picker} from '@react-native-picker/picker';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

const DostOrders3 = ({navigation}) => {
  const [blockDeets, setBlockDeets] = useState('');
  const [addComments, setAddComments] = useState('');
  // const [bgColor, setBgColor] = useState('');

  const [name, setName] = useState('Sarim');
  const [phoneNumber, setPhoneNumber] = useState('03210239865');
  const [email, setEmail] = useState('sarim.khan@gmail.com');
  const items: any = [
    {name: 'Malai Boti', quantity: '2', price: 'Rs 800'},
    {name: 'Chicken Tikka', quantity: '1', price: 'Rs 230'},
  ];
  const data: any = [
    {
      restname: 'Zakir',
      name: 'Jazlan',
      phoneNumber: '090078601',
      ItemName: items,
      location:
        'LUMS',
    },
  ];

  const onPressBack = () => {
    console.log('back Button pressed');
    navigation.navigate('DostOrdersPage');
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

          <View className="h-auto bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white pt-3">
            {data.map((element: any) => {
              return (
                <View className="shadow-2xl mx-8 rounded-xl bg-gray-100 mb-5 px-4 h-auto placeholder-slate-900 mt-5 pb-8">
                  <View
                    className=""
                    style={{display: 'flex', flexDirection: 'row'}}>
                    <View
                      className=""
                      style={{display: 'flex', flexDirection: 'column'}}>
                      <Text className="w-36 text-3xl text-CTA-primary font-Questrial mt-4 ml-1">
                        {element.restname}
                      </Text>
                      <Text className="w-36 text-lg font-Questrial mt-10 ml-1">
                        Name: {element.name}
                      </Text>
                      <Text className="text-lg font-Questrial mt-2 ml-1">
                        Phone: {element.phoneNumber}
                      </Text>
                    </View>
                    <View
                      className="mt-3 ml-20"
                      style={{display: 'flex', flexDirection: 'column'}}>
                      <FontAwesomeIcon
                        icon={faBurger}
                        size={80}
                        color={'#6B85F1'}
                      />
                    </View>
                  </View>

                  <Text className="text-lg font-Questrial mt-2 ml-1">
                    Location: {element.location}
                  </Text>

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
                  {items.map((item: any) => {
                    return (
                      <View>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <View
                            style={{display: 'flex', flexDirection: 'column'}}>
                            <Text className="w-40 text-lg font-Questrial mt-2 ml-1">
                              {item.name}
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
                              {item.price}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </View>
        <View className='w-3/4 h-72'></View>
        <View>
          <KhareedarDostBottomButtons
            onKhareedarPress={() => navigation.navigate('Items')}
            onDostPress={() => navigation.navigate('DostOrdersPage')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DostOrders3;
