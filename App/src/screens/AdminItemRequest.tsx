import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
// import {Picker} from '@react-native-picker/picker';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleUser, faLeftLong} from '@fortawesome/free-solid-svg-icons';
import AdminFooter from '../components/AdminFooter';
const AdminItemRequest = ({navigation}) => {
  const [blockDeets, setBlockDeets] = useState('');
  const [addComments, setAddComments] = useState('');
  // const [bgColor, setBgColor] = useState('');

  const [name, setName] = useState('Sarim');
  const [phoneNumber, setPhoneNumber] = useState('03210239865');
  const [email, setEmail] = useState('sarim.khan@gmail.com');
  const data: any = [
    {
      name: 'sarim',
      email: 'blabla@bla.com',
      ItemName: 'Biscuits',
      location: 'Nothing',
    },
    {
      name: 'sarim',
      email: 'blabla@bla.com',
      ItemName: 'Biscuits',
      location: 'MY NAME IS SARIM AND I LIKE TO PARTY',
    },
  ];

  const onPressSubmit = () => {
    console.log('Block Details: ', blockDeets);
  };
  const onPressBack = () => {
    navigation.navigate('AdminPortal');
  };
  const onPressProfile = () => {
    console.log('Profile button pressed');
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
            <TouchableOpacity className="mt-10 ml-5" onPress={onPressBack}>
              <FontAwesomeIcon icon={faLeftLong} size={27} color={'white'} />
            </TouchableOpacity>
            <Text className="text-3xl font-Montserrat w-64 text-center text-white pb-6 pt-9 ml-5">
              Items Request
            </Text>
            <TouchableOpacity
              className="ml-5  mb-9 mt-9 pt-1 rounded-xl"
              onPress={onPressProfile}>
              <FontAwesomeIcon icon={faCircleUser} size={30} color={'white'} />
            </TouchableOpacity>
          </View>

          <View className="min-h-screen h-auto rounded-tr-3xl rounded-tl-3xl w-max bg-white pt-3">
            {data.map((element: any) => {
              return (
                <View className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-auto placeholder-slate-900 mt-5">
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <View style={{display: 'flex', flexDirection: 'column'}}>
                      <Text className="w-36 text-base font-Questrial mt-4 ml-1">
                        {element.name}
                      </Text>
                      <Text className="w-36 text-base font-Questrial mt-2 ml-1">
                        {element.email}
                      </Text>
                    </View>
                    <View
                      style={{display: 'flex', flexDirection: 'column'}}
                      className="ml-6">
                      <Text className="w-36 text-base font-Questrial mt-4">
                        {element.ItemName}
                      </Text>
                      <Text className="w-36 text-base font-Questrial mt-2">
                        {element.location}
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}} className="pt-3">
                    <TouchableOpacity
                      onPress={onPressSubmit}
                      className="mb-4 shadow-2xl ml-1">
                      <View
                        style={{
                          width: '100%',
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
                      className="mb-4 shadow-2xl ml-4">
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
              );
            })}
          </View>
        </View>
        <View className="p-5">
          <></>
        </View>
        <View
          style={{
            bottom: 25,
          }}>
          <AdminFooter
            onReportsPress={() => navigation.navigate('AdminBlockAccount')}
            onActivationsPress={() =>
              navigation.navigate('AdminAccountActivation')
            }
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AdminItemRequest;
