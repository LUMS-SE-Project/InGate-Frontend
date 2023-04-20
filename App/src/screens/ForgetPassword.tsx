import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import instance from '../api/api';

import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

export default function ForgetPassword({navigation}) {
  const {token} = useContext(AuthContext);
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rePassword, setRePassword] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [rePasswordError, setRePasswordError] = React.useState(false);



  const EmailError = () => {
    return (
      <View className="flex flex-row justify-center items-center">
        <Text className="text-red-500 font-Montserrat text-base">
          Please enter a valid email
        </Text>
      </View>
    );
  };

  const PasswordError = () => {
    return (
      <View className="flex flex-row justify-center items-center">
        <Text className="text-red-500 font-Montserrat text-base">
          Password should be between 8 and 16 characters
        </Text>
      </View>
    );
  };

  const RePasswordError = () => {
    return (
      <View className="flex flex-row justify-center items-center">
        <Text className="text-red-500 font-Montserrat text-base">
          Passwords do not match
        </Text>
      </View>
    );
  };

  const handleEmail = (text: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@lums.edu.pk/;
    if (emailRegex.test(text.toLowerCase())) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    setEmail(text);
  };

  const handlePassword = (text: string) => {
    if (text.length >= 8 && text.length <= 16) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
    setPassword(text);
  };

  const handleValidatePassword = (text: string) => {
    if (password === text) {
      setRePasswordError(false);
    } else {
      setRePasswordError(true);
    }
    setRePassword(text);
  };

  const onPressLogin = () => {
    navigation.navigate('LoginPage');
  };

  const onPressSubmit = () => {
    if (!emailError && !passwordError && !rePasswordError) {
      console.log(`Email: ${email} Password: ${password} RePassword: ${rePassword}`);
      instance.post(
        '/forgot-password',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

          },
        }
      ).then((response)=>{
        console.log(response.data);
      }).catch((err)=>{
        console.log(err)
      })
      navigation.navigate('LoginPage');
    }
  };


  return (
    <View className="min-h-screen min-w-screen flex justify-center align-middle">
      <ImageBackground
        source={require('../images/GradientBackground.png')}
        resizeMode="stretch"
        className="min-h-screen min-w-screen flex justify-center align-middle">
        <Text className="text-5xl font-Montserrat text-center text-white pb-8 pt-8">
          Forgot Password
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
              value={email}
              onChangeText={inputEmail => handleEmail(inputEmail)}
            />
          </View>
            {emailError ? <EmailError /> : null}
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
              onChangeText={inputPassword => handlePassword(inputPassword)}
            />
          </View>
            {passwordError ? <PasswordError /> : null}
          <View>
            <Text className="text-2xl font-Questrial  text-CTA-primary  pl-8 mt-9 mb-2">
              Re-enter Password
            </Text>
            {/* <FontAwesomeIcon icon={faLock} size={40} color={'blue'} /> */}
            <TextInput
              secureTextEntry={true}
              className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-12 "
              placeholder="Re-enter your Password"
              value={rePassword}
              onChangeText={inputPassword => handleValidatePassword(inputPassword)}
            />
          </View>
            {rePasswordError ? <RePasswordError /> : null} 
          <TouchableOpacity onPress={onPressLogin} className="mt-10 mb-10">
            <Text className="text-lg font-Questrial text-center text-CTA-primary">
              Back to Login
            </Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity
              onPress={onPressSubmit}
              className="mt-[-30] shadow-2xl">
              <View
                className="bg-CTA-primary h-12 mx-28 rounded-2xl mt-5 shadow-2xl"
                shadow-2xl>
                <Text className="text-xl font-Questrial text-center mt-2 text-white">
                  Reset Password
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
