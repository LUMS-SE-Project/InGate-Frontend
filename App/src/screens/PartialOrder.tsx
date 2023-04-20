import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faCircleUser,
  faLeftLong,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';
import {FlatList} from 'react-native-gesture-handler';

const PartialOrder = ({navigation}) => {
  const [selectGender, setSelectGender] = useState('None');
  const [selectPartial, setSelectPartial] = useState('None');
  const [isClicked, setIsClicked] = useState(true);
  const [isClickedPartial, setIsClickedPartial] = useState(true);
  const onPressProfile = () => {
    console.log('Profile button pressed');
  };
  const onPressBack = () => {
    console.log('back Button pressed');
  };
  const onPressSubmit = () => {
    console.log('Order Placed');
    navigation.navigate('OrderPlaced');
  };
  const options = [
    {id: 1, name: 'Yes'},
    {id: 2, name: 'No'},
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
              <TouchableOpacity className="mt-8 ml-2" onPress={onPressBack}>
                <FontAwesomeIcon icon={faLeftLong} size={27} color={'white'} />
              </TouchableOpacity>
              <View className="flex-row ml-3  mb-9  mt-6 w-9/12 h-10 bg-gray-200 rounded-xl">
                <View className="mx-3 mt-2">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size={27}
                    color={'white'}
                  />
                </View>
                <TextInput
                  className=" w-8/12 h-10 bg-gray-200"
                  placeholder="Search a location"
                />
              </View>
              <TouchableOpacity
                className="ml-2 mr-1 mb-9 mt-6 pt-1 rounded-xl"
                onPress={onPressProfile}>
                <FontAwesomeIcon
                  icon={faCircleUser}
                  size={30}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>

            <View className="h-4/5 rounded-tr-3xl rounded-tl-3xl w-max bg-white">
              <Text className="text-CTA-primary mt-8 ml-10 mb-2 text-2xl">
                Partial Order
              </Text>
              <View className="items-center">
                <View className=" rounded-lg w-4/5 h-48">
                  <TouchableOpacity
                    onPress={() => {
                      setIsClickedPartial(!isClickedPartial);
                    }}>
                    <View className="bg-gray-200 flex-row rounded-md">
                      <Text className="text-xl py-3 px-3 w-64 text-black">
                        {selectPartial}
                      </Text>
                      <View className="ml-4 mt-3">
                        {isClickedPartial ? (
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            size={30}
                            color="#6B85F1"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faAngleUp}
                            size={30}
                            color="#6B85F1"
                          />
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                  {isClickedPartial ? (
                    []
                  ) : (
                    <FlatList
                      data={options}
                      renderItem={({item, index}) => {
                        return (
                          <View className="mt-3 bg-gray-200 rounded-lg text-2xl ">
                            <TouchableOpacity
                              onPress={() => {
                                setSelectPartial(item.name);
                                setIsClickedPartial(true);
                              }}>
                              <Text className="text-xl py-3 px-3 w-64 text-black ">
                                {item.name}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        );
                      }}
                    />
                  )}
                </View>
              </View>

              <Text className="text-CTA-primary ml-10  text-2xl">
                Gender Preference
              </Text>
              <View className="items-center">
                <View className=" rounded-lg w-4/5 h-48">
                  <TouchableOpacity
                    onPress={() => {
                      setIsClicked(!isClicked);
                    }}>
                    <View className="bg-gray-200 flex-row rounded-md">
                      <Text className="text-xl py-3 px-3 w-64 text-black">
                        {selectGender}
                      </Text>
                      <View className="ml-4 mt-3">
                        {isClicked ? (
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            size={30}
                            color="#6B85F1"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faAngleUp}
                            size={30}
                            color="#6B85F1"
                          />
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                  {isClicked ? (
                    []
                  ) : (
                    <FlatList
                      data={options}
                      renderItem={({item, index}) => {
                        return (
                          <View className="mt-3 bg-gray-200 rounded-lg text-2xl ">
                            <TouchableOpacity
                              onPress={() => {
                                setSelectGender(item.name);
                                setIsClicked(true);
                              }}>
                              <Text className="text-xl py-3 px-3 w-64 text-black ">
                                {item.name}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        );
                      }}
                    />
                  )}
                </View>
              </View>
              <TouchableOpacity
                onPress={onPressSubmit}
                className="my-5 shadow-2xl">
                <View
                  className="bg-CTA-primary h-14 mx-24 rounded-3xl  shadow-2xl"
                  shadow-2xl>
                  <Text className="text-3xl font-Questrial text-center mt-3 text-white">
                    Place Order
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              marginBottom: 25,
            }}>
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

export default PartialOrder;
