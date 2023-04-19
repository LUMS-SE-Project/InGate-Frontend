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
  faCircleCheck,
  faCartShopping,
  faCircleUser,
  faLight,
  faBurger,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
// import {Picker} from '@react-native-picker/picker';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

const AdminItemRequest = () => {
  const [blockDeets, setBlockDeets] = useState('');
  const [addComments, setAddComments] = useState('');
  // const [bgColor, setBgColor] = useState('');

  const [name, setName] = useState('Sarim');
  const [phoneNumber, setPhoneNumber] = useState('03210239865');
  const [email, setEmail] = useState('sarim.khan@gmail.com');
  const items:any = [
    {name:'Biscuits', quantity:'1', price:"10$"},
    {name:'Chips', quantity:'6', price:"70$"},
    {name:'Drinks', quantity:'2', price:"20$"},
    {name:'Biscuits', quantity:'1', price:"10$"},
    {name:'Chips', quantity:'6', price:"70$"},
    {name:'Drinks', quantity:'2', price:"20$"},
    {name:'Biscuits', quantity:'1', price:"10$"},
    {name:'Chips', quantity:'6', price:"70$"},
  ]
  const data:any =[
    {restname:'Jammin', name: "Kabir", phoneNumber:"090078601", ItemName:items, location:"Khyaban-e-Jinnah, opposite Sector U،, Phase 5 D.H.A, Lahore, Punjab 54792"},
  ]

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
          {/* INSERT A BACK BUTTON HERE */}
          {/* INSERT A PROFILE BUTTON HERE */}
          
          <View className="h-auto bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white pt-3">
          {data.map((element:any)=>{
            return(
                <View className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-auto placeholder-slate-900 mt-5 pb-8 mb-8">
                    <View className="" style={{display:'flex', flexDirection:'row'}}>
                        <View className="" style={{display:'flex', flexDirection:'column'}}>
                            <Text className="w-36 text-3xl text-CTA-primary font-Questrial mt-4 ml-1">{element.restname}</Text>
                            <Text className="w-36 text-lg font-Questrial mt-10 ml-1">Name: {element.name}</Text>
                            <Text className="text-lg font-Questrial mt-2 ml-1">Phone: {element.phoneNumber}</Text>
                        </View>
                        <View className="mt-3 ml-20" style={{display:'flex', flexDirection:'column'}}>
                            <FontAwesomeIcon icon={faBurger} size={80} color={'#6B85F1'}/>
                        </View>
                    </View>
                    <Text className="text-lg font-Questrial mt-2 ml-1">Location: {element.location}</Text>

                    <View className='pt-6' style={{display:'flex', flexDirection:'row'}}>
                        <View style={{display:'flex', flexDirection:'column'}}>
                            <Text className="w-40 text-xl text-CTA-primary font-Questrial mt-2 ml-1">Item Name</Text>
                        </View>
                        <View style={{display:'flex', flexDirection:'column'}}>
                            <Text className="w-20 text-xl text-CTA-primary font-Questrial mt-2 ml">Qty</Text>
                        </View>
                        <View style={{display:'flex', flexDirection:'column'}}>
                            <Text className="w-20 text-xl text-CTA-primary font-Questrial mt-2">Price</Text>
                        </View>
                    </View>
                    {items.map((item:any)=>{
                        return(
                            <View>
                                <View style={{display:'flex', flexDirection:'row'}}>
                                    <View style={{display:'flex', flexDirection:'column'}}>
                                        <Text className="w-40 text-lg font-Questrial mt-2 ml-1">{item.name}</Text>
                                    </View>
                                    <View style={{display:'flex', flexDirection:'column'}}>
                                        <Text className="w-20 text-lg font-Questrial mt-2 ml-2">{item.quantity}</Text>
                                    </View>
                                    <View style={{display:'flex', flexDirection:'column'}}>
                                        <Text className="w-20 text-lg font-Questrial mt-2 ml-2">{item.price}</Text>
                                    </View>
                                </View>
                            </View>
                        )

                    })}
     
                {/* <View style={{flexDirection: 'row'}} className='pt-3'>
                  <TouchableOpacity
                    onPress={onPressSubmit}
                    className="mb-4 shadow-2xl ml-1">
                    <View
                      style={{
                        width: "100%",
                        backgroundColor: '#F13737',
                      }}
                      className="h-12 rounded-2xl mt-5 shadow-2xl px-10"
                      shadow-2xl>
                      <Text className="text-xl font-Questrial text-center mt-2 text-white">
                        Reject
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={onPressSubmit}
                    className="mb-4 shadow-2xl ml-7"> 
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: '#6B85F1',
                      }}
                      className="h-12 rounded-2xl mt-5 shadow-2xl px-10"
                      shadow-2xl>
                      <Text className="text-xl font-Questrial text-center mt-2 text-white">
                        Accept
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View> */}
              </View>
            )
          })}            
          </View>
        </View>
        <View>
          <KhareedarDostBottomButtons
            onKhareedarPress={() => console.log('Khareedar button pressed')}
            onDostPress={() => console.log('Dost button pressed')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AdminItemRequest;
