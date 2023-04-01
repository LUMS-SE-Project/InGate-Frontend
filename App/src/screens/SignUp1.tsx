import React, {useState} from 'react';
import {SafeAreaView, Text, View, ImageBackground} from 'react-native';
import {TextInput, TouchableOpacity, ScrollView} from 'react-native';

const SignUp1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onPressNext = () => {
    console.log('email:', email);
    console.log('password:', password);
  };
  return (
    <ScrollView
      style={{flex: 1}}
      showsVerticalScrollIndicator={true} // add this prop
    >
      <View className="min-h-screen min-w-screen flex justify-center align-middle">
        <ImageBackground
          source={require('../images/GradientBackground.png')}
          resizeMode="stretch"
          className="min-h-screen min-w-screen flex justify-center align-middle">
          <Text className="text-5xl font-Montserrat text-center text-white pb-8 pt-8">
            Sign Up
          </Text>
          <View className="h-4/5 bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white">
            {/* Input box for Name */}
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
            <View className="h-10">
              <></>
            </View>
            {/* button for password going to the next page*/}
            <TouchableOpacity onPress={onPressNext} className=" shadow-2xl">
              <View
                className="bg-CTA-primary h-12 mx-28 rounded-2xl mt-5 shadow-2xl"
                shadow-2xl>
                <Text className="text-xl font-Questrial text-center mt-2 text-white">
                  Next
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default SignUp1;