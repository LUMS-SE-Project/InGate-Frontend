import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCircleUser,
  faMagnifyingGlass,
  faBurger,
} from '@fortawesome/free-solid-svg-icons';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';
import DostButton from '../components/DostButton';
// import Bar from '../components/ProgressBar';

const DostOrdersPage = ({navigation}) => {
  const [colourChange, setColourChange] = useState(true);
  const handleButtonPress = () => {
    console.log('Button pressed');
  };

  // Dummy data for testing purposes
  const data = [
    {id: 1, name: 'Restaurant A', typeAndMoney: 'Food Type 1, $10'},
    {id: 2, name: 'Restaurant B', typeAndMoney: 'Food Type 2, $15'},
    {id: 3, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    {id: 4, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    {id: 5, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
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
              <View className="ml-3 mr-1 mb-9 mt-12 pt-1 rounded-xl">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  size={30}
                  color={'white'}
                />
              </View>
            </View>

            <View className=" min-h-screen  rounded-tr-3xl rounded-tl-3xl w-max   bg-white flex  ">
              <View>
                {data.map(item => (
                  <DostButton
                    key={item.id}
                    onPress={handleButtonPress}
                    name={item.name}
                    typeAndMoney={item.typeAndMoney}
                    handleCheckBoxClick={() => console.log('check box clicked')}
                  />
                ))}
              </View>
            </View>
            {/* <View className='h-7 bg-white'>
              <></>
            </View> */}
            <KhareedarDostBottomButtons
              onKhareedarPress={() => navigation.navigate('Items')}
              onDostPress={() => navigation.navigate('DostOrdersPage')}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DostOrdersPage;
