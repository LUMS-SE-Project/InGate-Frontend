import {useEffect} from 'react';
import {
  Platform,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCircleUser,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import KhareedarButton from '../components/KhareedarButton';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface ItemsProps {
  navigation: NativeStackScreenProps<any, any>;
}

const ItemsPage = (props : ItemsProps) => {

  const {navigation} = props;
  
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
    // {id: 6, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 7, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 8, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 9, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 10, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 11, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 12, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 13, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 14, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 15, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 16, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 17, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 18, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 19, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
    // {id: 120, name: 'Restaurant C', typeAndMoney: 'Food Type 3, $20'},
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
                  <KhareedarButton
                    key={item.id}
                    onPress={handleButtonPress}
                    name={item.name}
                    typeAndMoney={item.typeAndMoney}
                  />
                ))}
              </View>
            </View>
            {/* <View className='h-7 bg-white'>
              <></>
            </View> */}
            <KhareedarDostBottomButtons
              onKhareedarPress={() => console.log('Khareedar button pressed')}
              onDostPress={() => console.log('Dost button pressed')}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ItemsPage;
