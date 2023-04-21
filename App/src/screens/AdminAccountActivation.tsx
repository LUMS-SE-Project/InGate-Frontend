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
import instance from '../api/api';
import {AuthContext} from '../context/AuthContext';
import ActivationCard from '../components/ActivationCard';

const AdminAccountActivation = ({navigation}: any) => {
  const {token} = useContext(AuthContext);
  const [fluff, setFluff] = useState(0);
  const [users, setUsers] = useState([]);

  const onPressProfile = () => {
    console.log('Profile button pressed');
  };

  const onPressBack = () => {
    navigation.navigate('AdminPortal');
  };

  useEffect(() => {
    instance
      .get('/admin/signupRequests', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => console.log(err));
  }, []);


  // get all accounts that need to be verified
  useEffect(() => {
    instance
      .get('/admin/signupRequests', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUsers(response.data);
        console.log(response.data)
      })
      .catch(err => console.log(err));

  }, [fluff]);

  const onPressAccept = (data: any) => {
    console.log(`Accept button pressed for ${data.email}`);
  }

  const onPressReject = (data: any) => {
    
  }


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
              Account Activation
            </Text>
            <TouchableOpacity
              className="ml-5  mb-9 mt-9 pt-1 rounded-xl"
              onPress={onPressProfile}>
              <FontAwesomeIcon icon={faCircleUser} size={30} color={'white'} />
            </TouchableOpacity>
          </View>

          <View className="min-h-screen h-auto rounded-tr-3xl rounded-tl-3xl w-max bg-white pt-3">
            {users.map((element: any) => {
              return <ActivationCard element={element} setFluff={setFluff} fluff={fluff}/>
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
            onActivationsPress={() =>
              navigation.navigate('AdminAccountActivation')
            }
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AdminAccountActivation;
