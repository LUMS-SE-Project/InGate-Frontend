import {useEffect, useState, useContext} from 'react';
import {
  Platform,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCircleUser,
  faMagnifyingGlass,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import KhareedarButton from '../components/KhareedarButton';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import SideBar from '../components/SideBar';
import instance from '../api/api';
import { AuthContext } from '../context/AuthContext';

// export interface ItemsProps {
//   navigation: NativeStackScreenProps<any, any>;
// }

export interface ItemsProps {
  setPage: (page: number) => void;
  setLocationSelected: (locationSelected: string) => void;
}

const ItemsPage = (props: ItemsProps) => {

  const {token} = useContext(AuthContext);

  const {setPage, setLocationSelected} = props;
  const [restaurants, setRestaurants] = useState([]);
  const [sideBar, setSideBar] = useState(false);


  useEffect(()=>{
    instance.get(
      '/user/all-locations',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response)=>{
      console.log(response.data["all-locations"])
      setRestaurants(response.data["all-locations"])
    }).catch((err)=>{
      console.log(err)
    })
  }, [])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{backgroundColor: '#fff'}}>
        <View className="bg-CTA-primary">
          <View className="min-h-screen min-w-screen flex justify-center align-middle">
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
              <TouchableOpacity
                onPress={() => {
                  setSideBar(true);
                }}>
                <View className="ml-3 mr-1 mb-9 mt-12 pt-1 rounded-xl">
                  <FontAwesomeIcon icon={faBars} size={30} color={'white'} />
                </View>
              </TouchableOpacity>
            </View>

            <View className=" min-h-screen  rounded-tr-3xl rounded-tl-3xl w-max   bg-white flex  ">
              <View>
                {restaurants.map((item: any) => {
                  return (
                    <KhareedarButton
                      setLocationSelected={setLocationSelected}
                      name={item.location_name}
                      setPage={setPage}
                    />
                  );
                })}
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
            <KhareedarDostBottomButtons
              onKhareedarPress={() => setPage(0)}
              onDostPress={() => setPage(9)}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ItemsPage;
