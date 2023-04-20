import React, {useState, useContext, useEffect} from 'react';
import {SafeAreaView, Text, View, ImageBackground} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import instance from '../api/api';

const LoginPage = () => {
  // set authenticated as true
  const {setToken, setUser, setIsAuthenticated} = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onPressForgotPassword = () => {
    console.log('forgot password');
  };

  const onPressSubmit = () => {
    // create form data to send to the server
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('grant_type', 'password');
    Axios({
      method: 'POST',
      url: 'http://143.110.182.190:80/login',
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(async res => {
        console.log(res.data);
        // store token in local storage
        await AsyncStorage.setItem('token', res.data.access_token);
        await AsyncStorage.setItem('username', res.data.username);
        await AsyncStorage.setItem('name', res.data.name);
        await AsyncStorage.setItem('email', res.data.email);
        await AsyncStorage.setItem('isAdmin', res.data.isAdmin.toString());

        // set token in context
        setToken(res.data.access_token);
        // set user in context
        setUser({
          username: res.data.username,
          name: res.data.name,
          email: res.data.email,
          isAdmin: res.data.isAdmin,
        });
        setIsAuthenticated(true);
      })
      .catch(err => {
        console.log(err);
      });
    console.log('Sending Request');
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
        <View className="h-4/5 rounded-tr-3xl rounded-tl-3xl w-max bg-white">
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
