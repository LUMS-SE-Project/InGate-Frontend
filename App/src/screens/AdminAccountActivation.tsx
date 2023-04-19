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
// import {Picker} from '@react-native-picker/picker';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

const AdminAccountActivation = () => {
  const [blockDeets, setBlockDeets] = useState('');
  const [addComments, setAddComments] = useState('');
  // const [bgColor, setBgColor] = useState('');

  const [name, setName] = useState('Sarim');
  const [phoneNumber, setPhoneNumber] = useState('03210239865');
  const [email, setEmail] = useState('sarim.khan@gmail.com');
  const data:any =[
    {name:'sarim', email:"blabla@bla.com", phone:"090078601"},
    {name:'sarim', email:"blabla@bla.com", phone:"090078601"},
    {name:'sarim', email:"blabla@bla.com", phone:"090078601"},
    {name:'sarim', email:"blabla@bla.com", phone:"090078601"},
    {name:'sarim', email:"blabla@bla.com", phone:"090078601"},
    {name:'sarim', email:"blabla@bla.com", phone:"090078601"},
    {name:'sarim', email:"blabla@bla.com", phone:"090078601"},
    
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
          {/* INSERT A BACK BUTTON HERE */}
          <Text className="text-4xl font-Montserrat text-center text-white pb-6 pt-10">
            Account Activation
          </Text>
          {/* INSERT A PROFILE BUTTON HERE */}
          
          <View className="h-auto bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white pt-3">
          {data.map((element:any)=>{
            return(
                <View className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-auto placeholder-slate-900 mt-5">
                <Text className="text-base font-Questrial mt-4 ml-1">
                  Name: {element.name}
                </Text>
                <Text className="text-base font-Questrial mt-2 ml-1">
                  Email: {element.email}
                </Text>
                <Text className="text-base font-Questrial mt-2 ml-1">
                  Phone Number: {element.phone}
                </Text>
                <View style={{flexDirection: 'row'}} className='pt-3'>
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
                </View>
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

export default AdminAccountActivation;
