import React, {useState, useEffect, useContext} from 'react';
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleUser, faLeftLong} from '@fortawesome/free-solid-svg-icons';
import AdminFooter from '../components/AdminFooter';
import BlockCards from '../components/BlockCards';
import instance from '../api/api';
import {AuthContext} from '../context/AuthContext';

const AdminBlockAccount = ({navigation}: any) => {
  const [fluff, setFluff] = useState(0);
  const {token} = useContext(AuthContext);
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    instance
      .get('/admin/all-reported-users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => {
        console.log(response.data['all-reported-users']);

        setUsers(response.data['all-reported-users']);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    instance
      .get('/admin/all-reported-users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => {
        console.log(response.data['all-reported-users']);

        setUsers(response.data['all-reported-users']);
      })
      .catch(err => console.log(err));
  }, [fluff]);

  const [name, setName] = useState('Sarim');
  const [phoneNumber, setPhoneNumber] = useState('03210239865');
  const [email, setEmail] = useState('sarim.khan@gmail.com');

  const onPressProfile = () => {
    console.log('Profile button pressed');
  };
  const onPressBack = () => {
    navigation.navigate('AdminPortal');
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
              Block Account
            </Text>
            <TouchableOpacity
              className="ml-5  mb-9 mt-9 pt-1 rounded-xl"
              onPress={onPressProfile}>
              <FontAwesomeIcon icon={faCircleUser} size={30} color={'white'} />
            </TouchableOpacity>
          </View>

          <View className="h-auto bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white pt-3">
            {users.map((element: any) => {
              return (
                <BlockCards
                  element={element}
                  setFluff={setFluff}
                  fluff={fluff}
                />
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

export default AdminBlockAccount;
