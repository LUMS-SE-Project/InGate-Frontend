import {useEffect, useState} from 'react';
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

// export interface ItemsProps {
//   navigation: NativeStackScreenProps<any, any>;
// }

export interface ItemsProps {
  setPage: (page: number) => void;
  setLocationSelected: (locationSelected: string) => void;
}

const ItemsPage = (props: ItemsProps) => {
  const {setPage, setLocationSelected} = props;


  const [sideBar, setSideBar] = useState(false);
  const data = [

    {id: 1, name: 'Zakir', typeAndMoney: 'Food Type 1, $10'},
    {id: 2, name: 'PDC', typeAndMoney: 'Food Type 2, $15'},
    {id: 3, name: 'khoka', typeAndMoney: 'Food Type 3, $20'},
    {id: 4, name: 'Fusion', typeAndMoney: 'Food Type 3, $20'},
    {id: 5, name: 'Jammin', typeAndMoney: 'Food Type 3, $20'},
  ];

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
                {data.map((item: any) => {
                  return (
                    <KhareedarButton
                      setLocationSelected={setLocationSelected}
                      name={item.name}
                      typeAndMoney={item.typeAndMoney}
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
              onKhareedarPress={() => setPage(1)}
              onDostPress={() => setPage(9)}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ItemsPage;
