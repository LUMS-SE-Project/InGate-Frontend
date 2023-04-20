import React, {useState} from 'react';
import {Text, View, KeyboardAvoidingView, FlatList} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import {TextInput, TouchableOpacity, ScrollView} from 'react-native';

const SignUp1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectGender, setSelectGender] = useState('None');
  const [isClicked, setIsClicked] = useState(true);
  const options = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'},
  ];

  const onPressNext = () => {
    console.log('email:', email);
    console.log('password:', password);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={true} // add this prop
      >
        <View className=" flex justify-center align-middle bg-CTA-primary">
          <Text className="text-5xl font-Montserrat text-center text-white mt-3 pb-8 pt-8">
            Sign Up
          </Text>
          <View className="h-auto mt-2 rounded-tr-3xl rounded-tl-3xl w-max bg-white">
            <View>
              <Text className="text-2xl font-Questrial  text-CTA-primary pt-3 pl-8 mt-8 mb-2">
                Name
              </Text>
              <TextInput
                className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-12 placeholder-slate-900"
                placeholder="Enter your name"
                value={name}
                onChangeText={inputName => setName(inputName)}
              />
            </View>

            {/* Input box for email address */}
            <View>
              <Text className="text-2xl font-Questrial  text-CTA-primary  pl-8 mt-6 mb-2">
                Email
              </Text>
              <TextInput
                keyboardType="email-address"
                className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-12"
                placeholder="Enter your Email Address"
                value={email}
                onChangeText={inputEmail => setEmail(inputEmail)}
              />
            </View>

            {/* Input box for password */}
            <View>
              <Text className="text-2xl font-Questrial  text-CTA-primary  pl-8 mt-6 mb-2">
                Password
              </Text>
              <TextInput
                secureTextEntry={true}
                className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-12 "
                placeholder="Enter your Password"
                value={password}
                onChangeText={inputPassword => setPassword(inputPassword)}
              />
            </View>

            {/* Input box for password re-checking*/}
            <View>
              <Text className="text-2xl font-Questrial  text-CTA-primary  pl-8 mt-6 mb-2">
                Confirm Password
              </Text>
              <TextInput
                secureTextEntry={true}
                className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-12 "
                placeholder="Re-enter your password"
                value={rePassword}
                onChangeText={inputRePassword => setRePassword(inputRePassword)}
              />
            </View>
            <View>
              <Text className="text-2xl font-Questrial  text-CTA-primary  pl-8 mt-6 mb-2">
                Phone Number
              </Text>
              <TextInput
                secureTextEntry={true}
                className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-12 "
                placeholder="Re-enter your password"
                value={phoneNumber}
                onChangeText={inputNumber => setPhoneNumber(inputNumber)}
              />
            </View>
            <Text className="text-CTA-primary ml-10  mt-6 text-2xl mb-2">
              Gender Preference
            </Text>
            <View className="items-center">
              <View className=" rounded-lg w-4/5 h-48">
                <TouchableOpacity
                  onPress={() => {
                    setIsClicked(!isClicked);
                  }}>
                  <View className="bg-gray-200 flex-row rounded-lg">
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
            <View className="h-10">
              <></>
            </View>
            {/* button for password going to the next page*/}
            <TouchableOpacity onPress={onPressNext} className=" shadow-2xl">
              <View
                className="bg-CTA-primary h-12 mx-28 rounded-2xl mt-5 shadow-2xl mb-10"
                shadow-2xl>
                <Text className="text-xl font-Questrial text-center mt-2 text-white">
                  Next
                </Text>
              </View>
            </TouchableOpacity>
            <View className="p-16">
              <></>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp1;
