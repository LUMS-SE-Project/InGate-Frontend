// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   Text,
//   View,
//   ImageBackground,
//   KeyboardAvoidingView,
// } from 'react-native';
// import {TextInput, TouchableOpacity} from 'react-native';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {
//   faLock,
//   faAirFreshener,
//   faAnchor,
// } from '@fortawesome/free-solid-svg-icons';
// import {
//   faAdobe,
//   faApple,
//   faMicrosoft,
// } from '@fortawesome/free-brands-svg-icons';
// import {ScrollView} from 'react-native-gesture-handler';
// import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

// const KhareedarOrderDetails2 = () => {
//   const onPressSubmit = () => {
//     console.log('Continue Pressed');
//   };

//   const data = [
//     {id: 1, name: 'Jeelay ke kabab', quantity: 'Qty', price: 'price'},
//     {id: 2, name: 'Jeelay ke mohabattan', quantity: 'Qty', price: 'price'},
//     {id: 3, name: 'Jeelay ki wajah se death', quantity: 'Qty', price: 'price'},
//   ]; //dummy data

//   const renderItem = item => (
//     <View className="flex-row">
//       <View key={item.id} className="">
//         <Text className="px-3 text-base font-Questrial text-center mt-3 text-black text-left">
//           {item.name}
//         </Text>
//       </View>

//       <View key={item.id}>
//         <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-right">
//           {item.quantity}
//         </Text>
//       </View>
//     </View>
//   );
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{flex: 1}}>
//       <ScrollView
//         contentContainerStyle={{flexGrow: 1}}
//         style={{backgroundColor: '#fff'}}>
//         <View className=" flex justify-center align-middle bg-CTA-primary">
//           <View>
//             <Text className="text-5xl font-Montserrat text-center text-white pb-4 pt-6 mt-3">
//               Order Details
//             </Text>
//           </View>

//           <View className="items-stretch bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white">
//             <View
//               className="bg-gray-200 flex-col items-stretch mx-6 rounded-2xl mt-5 shadow-2xl "
//               shadow-2xl>
//               <Text className="pl-3 py-2 text-xl font-Questrial text-center mt-2 text-CTA-primary text-left">
//                 Delivery Details
//               </Text>
//               <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
//                 Customer Name
//               </Text>
//               <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
//                 Customer Address
//               </Text>
//               <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
//                 Partial Order
//               </Text>
//               <Text className="pl-3 pb-4 text-base font-Questrial text-center mt-3 text-black text-left">
//                 Gender Preference
//               </Text>
//             </View>

//             <View
//               className="bg-gray-200  mx-6 rounded-2xl mt-5 shadow-2xl flex-col items-stretch"
//               shadow-2xl>
//               <Text className="pl-3 py-2 text-xl font-Questrial text-center mt-2 text-CTA-primary text-left">
//                 Order Summary
//               </Text>

//               <ScrollView>{data.map(item => renderItem(item))}</ScrollView>
//               <View className="flex-row">
//                 <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
//                   Delivery Charges
//                 </Text>
//                 <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
//                   price
//                 </Text>
//               </View>
//               <View className="flex-row">
//                 <Text className="pl-3 pb-4 text-lg font-Questrial text-center mt-3 text-CTA-primary text-left">
//                   Total cost
//                 </Text>
//                 <Text className="pl-3 pb-4 text-lg font-Questrial text-center mt-3 text-CTA-primary text-left">
//                   Price
//                 </Text>
//               </View>
//             </View>

//             <TouchableOpacity
//               onPress={onPressSubmit}
//               className="my-5 shadow-2xl">
//               <View
//                 className="bg-CTA-primary h-14 mx-24 rounded-3xl  shadow-2xl"
//                 shadow-2xl>
//                 <Text className="text-3xl font-Questrial text-center mt-3 text-white">
//                   Continue
//                 </Text>
//               </View>
//             </TouchableOpacity>
//             <View className="h-8">
//               <></>
//             </View>
//           </View>
//           <View>
//             <KhareedarDostBottomButtons
//               onKhareedarPress={() => console.log('Khareedar button pressed')}
//               onDostPress={() => console.log('Dost button pressed')}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default KhareedarOrderDetails2;

// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   Text,
//   View,
//   ImageBackground,
//   KeyboardAvoidingView,
// } from 'react-native';
// import {TextInput, TouchableOpacity} from 'react-native';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {
//   faCircleUser,
//   faLight,
//   faMagnifyingGlass,
//   faLeft,
//   faLeftLong,
// } from '@fortawesome/free-solid-svg-icons';
// import {ScrollView} from 'react-native-gesture-handler';
// import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

// const KhareedarOrderDetails2 = () => {
//   const [itemSearched, setItemSearched] = useState('');

//   const onPressSubmit = () => {
//     console.log('Order Placed');
//   };
//   const onPressProfile = () => {
//     console.log('Profile button pressed');
//   };

//   const data = [
//     {id: 1, name: 'Jeelay ke kabab', quantity: 'Qty', price: 'price'},
//     {id: 2, name: 'Jeelay ke mohabattan', quantity: 'Qty', price: 'price'},
//     {id: 3, name: 'Jeelay ki wajah se death', quantity: 'Qty', price: 'price'},
//   ]; //dummy data

//   const onPressBack = () => {
//     console.log('back Button pressed');
//   };
//   const renderItem = item => (
//     <View className="flex-row">
//       <View key={item.id} className="">
//         <Text className="px-3 text-base font-Questrial text-center mt-3 text-black text-left">
//           {item.name}
//         </Text>
//       </View>

//       <View key={item.id}>
//         <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-right">
//           {item.quantity}
//         </Text>
//       </View>
//     </View>
//   );
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{flex: 1}}>
//       <ScrollView
//         contentContainerStyle={{flexGrow: 1}}
//         style={{backgroundColor: '#fff'}}>
//         <View className="bg-CTA-primary">
//           <View className="min-h-screen min-w-screen flex justify-center align-middle">
//             <View className="flex-row">
//               <TouchableOpacity className="mt-14 ml-2" onPress={onPressBack}>
//                 <FontAwesomeIcon icon={faLeftLong} size={27} color={'white'} />
//               </TouchableOpacity>
//               <View className="flex-row ml-3  mb-9  mt-12 w-9/12 h-10 bg-gray-200 rounded-xl">
//                 <View className="mx-3 mt-2">
//                   <FontAwesomeIcon
//                     icon={faMagnifyingGlass}
//                     size={27}
//                     color={'white'}
//                   />
//                 </View>
//                 <TextInput
//                   className=" w-8/12 h-10 bg-gray-200"
//                   placeholder="Search a location"
//                 />
//               </View>
//               <TouchableOpacity
//                 className="ml-2 mr-1 mb-9 mt-12 pt-1 rounded-xl"
//                 onPress={onPressProfile}>
//                 <FontAwesomeIcon
//                   icon={faCircleUser}
//                   size={30}
//                   color={'white'}
//                 />
//               </TouchableOpacity>
//             </View>

//             <View className="items-stretch bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white">
//               <View
//                 className="bg-gray-200 flex-col items-stretch mx-6 rounded-2xl mt-5 shadow-2xl "
//                 shadow-2xl>
//                 <Text className="pl-3 py-2 text-xl font-Questrial text-center mt-2 text-CTA-primary text-left">
//                   Delivery Details
//                 </Text>
//                 <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
//                   Customer Name
//                 </Text>
//                 <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
//                   Customer Address
//                 </Text>
//                 <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
//                   Partial Order
//                 </Text>
//                 <Text className="pl-3 pb-4 text-base font-Questrial text-center mt-3 text-black text-left">
//                   Gender Preference
//                 </Text>
//               </View>

//               <View
//                 className="bg-gray-200  mx-6 rounded-2xl mt-5 shadow-2xl flex-col items-stretch"
//                 shadow-2xl>
//                 <Text className="pl-3 py-2 text-xl font-Questrial text-center mt-2 text-CTA-primary text-left">
//                   Order Summary
//                 </Text>

//                 <ScrollView>{data.map(item => renderItem(item))}</ScrollView>
//                 <View className="flex-row">
//                   <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
//                     Delivery Charges
//                   </Text>
//                   <Text className="pl-3 text-base font-Questrial text-center mt-3 text-black text-left">
//                     price
//                   </Text>
//                 </View>
//                 <View className="flex-row">
//                   <Text className="pl-3 pb-4 text-lg font-Questrial text-center mt-3 text-CTA-primary text-left">
//                     Total cost
//                   </Text>
//                   <Text className="pl-3 pb-4 text-lg font-Questrial text-center mt-3 text-CTA-primary text-left">
//                     Price
//                   </Text>
//                 </View>
//               </View>

//               <TouchableOpacity
//                 onPress={onPressSubmit}
//                 className="my-5 shadow-2xl">
//                 <View
//                   className="bg-CTA-secondary h-14 mx-24 rounded-3xl  shadow-2xl"
//                   shadow-2xl>
//                   <Text className="text-3xl font-Questrial text-center mt-3 text-white">
//                     Place Order
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//               <View className="h-8">
//                 <></>
//               </View>
//             </View>
//             <View>
//               <KhareedarDostBottomButtons
//                 onKhareedarPress={() => console.log('Khareedar button pressed')}
//                 onDostPress={() => console.log('Dost button pressed')}
//               />
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default KhareedarOrderDetails2;

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
  faCircleUser,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

const KhareedarOrderDetails2 = ({navigation}) => {
  const [blockDeets, setBlockDeets] = useState('');
  const [addComments, setAddComments] = useState('');
  // const [bgColor, setBgColor] = useState('');

  const [name, setName] = useState('Sarim');
  const [phoneNumber, setPhoneNumber] = useState('03210239865');
  const [email, setEmail] = useState('sarim.khan@gmail.com');
  const items: any = [
    {name: 'Biscuits', quantity: '1', price: '10$'},
    {name: 'Chips', quantity: '6', price: '70$'},
    {name: 'Drinks', quantity: '2', price: '20$'},
    {name: 'Biscuits', quantity: '1', price: '10$'},
    {name: 'Chips', quantity: '6', price: '70$'},
    {name: 'Drinks', quantity: '2', price: '20$'},
    {name: 'Biscuits', quantity: '1', price: '10$'},
    {name: 'Chips', quantity: '6', price: '70$'},
  ];
  const data: any = [
    {
      restname: 'Zakir',
      name: 'Kabir',
      phoneNumber: '090078601',
      ItemName: items,
      location:
        'Khyaban-e-Jinnah, opposite Sector U،, Phase 5 D.H.A, Lahore, Punjab 54792',
    },
  ];

  const onPressSubmit = () => {
    console.log('Block Details: ', blockDeets);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{backgroundColor: '#fff'}}>
        <View className="bg-CTA-primary">
          <Text className="text-4xl font-Montserrat text-center text-white pb-6 pt-10">
            Order Details
          </Text>

          <View className="h-auto bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white pt-3">
            {data.map((element: any) => {
              return (
                <View>
                  <View className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-auto placeholder-slate-900 mt-5 pb-4">
                    <Text className="text-2xl text-CTA-primary font-Questrial mt-4 mb-2 ml-1">
                      Delivery Details
                    </Text>
                    <View>
                      <Text className="20 text-base font-Questrial mt-2 ml-1">
                        Delivery Status
                      </Text>
                      <Text className="text-base font-Questrial mt-2 ml-1">
                        Delivery Time
                      </Text>
                      <Text className="text-base font-Questrial mt-2 ml-1">
                        Cusomter Address
                      </Text>
                      <Text className="text-base font-Questrial mt-2 ml-1">
                        Dost Name
                      </Text>
                      <Text className="text-base font-Questrial mt-2 ml-1">
                        Dost Phone Number
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
                                {item.name}
                              </Text>
                            </View>
                            <View
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                              }}>
                              <Text className="w-20 text-lg font-Questrial mt-2 ml-2">
                                {item.quantity}
                              </Text>
                            </View>
                            <View
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                              }}>
                              <Text className="w-20 text-lg font-Questrial mt-2 ml-2">
                                {item.price}
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
                          Total Price
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
              );
            })}
          </View>
        </View>
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

export default KhareedarOrderDetails2;
