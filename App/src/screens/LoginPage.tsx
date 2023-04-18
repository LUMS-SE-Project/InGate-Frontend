import React, {useState} from 'react';
import {SafeAreaView, Text, View, ImageBackground} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native';

import instance from '../api/api';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onPressForgotPassword = () => {
    console.log('forgot password');
  };

  const onPressSubmit = () => {
    console.log('username:', username);
    console.log('password:', password);

    instance.post('/user/login', {
      username: username,
      password: password,
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })

  };
  return (
    <View className="min-h-screen min-w-screen flex justify-center align-middle">
      <ImageBackground
        source={require('../images/GradientBackground.png')}
        resizeMode="stretch"
        className="min-h-screen min-w-screen flex justify-center align-middle">
        <Text className="text-5xl font-Montserrat text-center text-white pb-8 pt-8">
          Login
        </Text>
        <View className="h-4/5 bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white">
          <View>
            <Text className="text-2xl font-Questrial  text-CTA-primary pt-10 pl-8 mt-10 mb-2">
              Email
            </Text>
            <TextInput
              keyboardType="email-address"
              className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-12 placeholder-slate-900"
              placeholder="Enter your Email Address"
              value={username}
              onChangeText={inputEmail => setUsername(inputEmail)}
            />
          </View>
          <View>
            <Text className="text-2xl font-Questrial  text-CTA-primary  pl-8 mt-9 mb-2">
              Password
            </Text>
            {/* <FontAwesomeIcon icon={faLock} size={40} color={'blue'} /> */}
            <TextInput
              secureTextEntry={true}
              className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-12 "
              placeholder="Enter your Password"
              value={password}
              onChangeText={inputPassword => setPassword(inputPassword)}
            />
          </View>

          <TouchableOpacity
            onPress={onPressForgotPassword}
            className="mt-10 mb-10">
            <Text className="text-lg font-Questrial text-center text-CTA-primary">
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <View className="h-10">
            <></>
          </View>
          <TouchableOpacity
            onPress={onPressSubmit}
            className="mt-10 shadow-2xl">
            <View
              className="bg-CTA-primary h-12 mx-28 rounded-2xl mt-5 shadow-2xl"
              shadow-2xl>
              <Text className="text-xl font-Questrial text-center mt-2 text-white">
                Login
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginPage;
