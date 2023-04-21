import React, {useState, useEffect, useContext} from 'react';
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import AdminFooter from '../components/AdminFooter';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLeftLong} from '@fortawesome/free-solid-svg-icons';
import ItemCards from '../components/ItemCards';
import instance from '../api/api';
import {AuthContext} from '../context/AuthContext';

const AdminItemRequest = ({navigation} : any) => {
  const [blockDeets, setBlockDeets] = useState('');
  const [addComments, setAddComments] = useState('');
  const [fluff, setFluff] = useState(0);
  const [users, setUsers] = useState([]);
  const {token} = useContext(AuthContext);
  // const [bgColor, setBgColor] = useState('');

  const [name, setName] = useState('Sarim');
  const [phoneNumber, setPhoneNumber] = useState('03210239865');
  const [email, setEmail] = useState('sarim.khan@gmail.com');

  const onPressSubmit = () => {
    console.log('Block Details: ', blockDeets);
  };

  useEffect(() => {
    instance
      .get('/admin/all-item-requests', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUsers(response.data["all-requested-items"]);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    instance
      .get('/admin/all-item-requests', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUsers(response.data["all-requested-items"]);
      })
      .catch(err => console.log(err));
  }, [fluff]);


  const onPressBack = () => {
    navigation.navigate('AdminPortal')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{backgroundColor: '#fff'}}>
        <View className="bg-CTA-primary">

          <View className='flex flex-row align-center items-center'>

            <TouchableOpacity className="mt-4 ml-8" onPress={onPressBack}>
                <FontAwesomeIcon icon={faLeftLong} size={27} color={'white'} />
              </TouchableOpacity>
            <Text className="text-4xl font-Montserrat text-center ml-12 text-white pb-6 pt-10">
              Item Request
            </Text>
          </View>
          {/* INSERT A PROFILE BUTTON HERE */}

          <View className="min-h-screen h-auto rounded-tr-3xl rounded-tl-3xl w-max bg-white pt-3">
            {users.map((element: any) => {
              return <ItemCards element={element} setFluff={setFluff} fluff={fluff} />
              
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
