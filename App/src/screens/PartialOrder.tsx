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
  faBars,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';
import {FlatList} from 'react-native-gesture-handler';
import SideBar from '../components/SideBar';

export interface PartialProps {
  custLocation: string;
  setPage: (page: number) => void;
  setPartial: (partial: boolean) => void;
  setCustLocation: (custLocation: string) => void;
  setGenderPref: (genderPref: string) => void;
}

const PartialOrder = (props: PartialProps) => {
  const {custLocation, setPage, setPartial, setCustLocation, setGenderPref} =
    props;

  const [sideBar, setSideBar] = useState(false);
  const [selectGender, setSelectGender] = useState('None');
  const [selectPartial, setSelectPartial] = useState<any>('None');
  const [isClicked, setIsClicked] = useState(true);
  const [isClickedPartial, setIsClickedPartial] = useState(true);
  const onPressProfile = () => {
    console.log('Profile button pressed');
  };
  const onPressBack = () => {
    console.log('back Button pressed');
    setPage(4);
  };
  const onPressSubmit = () => {
    console.log('Order Placed');
    setPage(6);
  };
  const options = [
    {id: 1, name: 'Yes'},
    {id: 2, name: 'No'},
  ];
  const optionsGender = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'},
    {id: 3, name: 'None'},
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
                onPress={() => {
                  setSideBar(true);
                }}>
                <View className="ml-5 mr-1 mb-9 mt-12 pt-1 rounded-xl">
                  <FontAwesomeIcon icon={faBars} size={30} color={'white'} />
                </View>
              </TouchableOpacity>
            </View>

            <View className="h-auto rounded-tr-3xl rounded-tl-3xl w-max bg-white">
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
                                if (item.name === 'Yes') {
                                  setPartial(true);
                                } else if (item.name === 'No') {
                                  setPartial(false);
                                }
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
                      data={optionsGender}
                      renderItem={({item, index}) => {
                        return (
                          <View className="mt-3 bg-gray-200 rounded-lg text-2xl ">
                            <TouchableOpacity
                              onPress={() => {
                                setSelectGender(item.name);
                                setGenderPref(item.name);
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
              <View className="mb-10">
                <Text className="text-2xl font-Questrial  text-CTA-primary  pl-11  mb-2">
                  Delivery Address
                </Text>
                <TextInput
                  className="shadow-2xl mx-10 rounded-xl bg-gray-200 px-4  h-12 placeholder-slate-900"
                  placeholder="Enter your address"
                  value={custLocation}
                  onChangeText={address => setCustLocation(address)}
                />
              </View>
              <TouchableOpacity
                onPress={onPressSubmit}
                className="my-5 shadow-2xl">
                <View
                  className="bg-CTA-primary h-14 mx-24 rounded-3xl  mb-5 shadow-2xl"
                  shadow-2xl>
                  <Text className="text-3xl font-Questrial text-center mt-3 text-white">
                    Place Order
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* This is the side bar functionality */}
          {sideBar ? (
            <SideBar
              onClosePress={() => {
                setSideBar(false);
              }}
            />
          ) : (
            []
          )}
          <View
            style={{
              bottom: 0,
              marginBottom: 25,
            }}>
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

export default PartialOrder;
