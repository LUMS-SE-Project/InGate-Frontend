import React, {useState} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import {TextInput, TouchableOpacity, ScrollView} from 'react-native';

export interface SignUp1Props {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setRePassword: (rePassword: string) => void;
  setPage: (page: number) => void;
}

const SignUp1 = (props: SignUp1Props) => {
  const {
    name,
    email,
    password,
    rePassword,
    setName,
    setEmail,
    setPassword,
    setRePassword,
    setPage,
  } = props;

  const [eError, setEmailError] = useState(false);
  const [pError, setPasswordError] = useState(false);
  const [rpError, setRePasswordError] = useState(false);
  const [nError, setNameError] = useState(false);

  const NameError = () => {
    return (
      <View className="flex flex-row justify-center items-center">
        <Text className="text-red-500 font-Montserrat text-base">
          Please enter a valid name
        </Text>
      </View>
    );
  };

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

  const handleName = (text: string) => {
    setName(text);
    if (text.length > 0) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  }

  const handleEmail = (text: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@lums.edu.pk/;
    if (emailRegex.test(text.toLowerCase())) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    setEmail(text);
  }

  const handlePassword = (text: string) => {
    if (text.length >= 8 && text.length <= 16) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
    setPassword(text);
  }

  const handleValidatePassword = (text: string) => {
    if (password === text) {
      setRePasswordError(false);
    } else {
      setRePasswordError(true);
    }
    setRePassword(text);
  };

  const onPressNext = () => {

    if (eError || pError || rpError || nError) {
      return;
    } else {
      setPage(2);
    }


  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ImageBackground
        source={require('../images/GradientBackground.png')}
        resizeMode="stretch"
        className="min-h-screen min-w-screen flex justify-center align-middle">
        <ScrollView
          style={{flex: 1}}
          showsVerticalScrollIndicator={true} // add this prop
        >
          <View className=" flex justify-center align-middle">
            <Text className="text-5xl font-Montserrat text-center text-white mt-3 pb-8 pt-8">
              Sign Up
            </Text>
            <View className="h-auto mt-2 rounded-tr-3xl rounded-tl-3xl w-max bg-white">
              <View className='bg-white rounded-tr-3xl rounded-tl-3xl'>
                <Text className="text-2xl font-Questrial  text-CTA-primary pt-3 pl-8 mt-8 mb-2">
                  Name
                </Text>
                <TextInput
                  className="drop-shadow-3xl mx-8 rounded-xl bg-gray-100 px-4 h-12 placeholder-slate-900"
                  placeholder="Enter your name"
                  value={name}
                  onChangeText={handleName}
                />
              </View>
              <View className='h-7'>{ nError ? <NameError /> : <></> }</View>
              {/* Input box for email address */}
              <View className='bg-white'>
                <Text className="text-2xl font-Questrial  text-CTA-primary  pl-8 mb-2">
                  Email
                </Text>
                <TextInput
                  keyboardType="email-address"
                  className="drop-shadow-3xl mx-8 rounded-xl bg-gray-100 px-4 h-12"
                  placeholder="Enter your LUMS email address"
                  value={email}
                  onChangeText={handleEmail}
                />
              </View>
              <View className='h-5'>{ eError ? <EmailError /> : <></> }</View>

              {/* Input box for password */}
              <View className='bg-white'>
                <Text className="text-2xl font-Questrial  text-CTA-primary  pl-8 mt-3 mb-2">
                  Password
                </Text>
                <TextInput
                  secureTextEntry={true}
                  className="drop-shadow-3xl mx-8 rounded-xl bg-gray-100 px-4 h-12 "
                  placeholder="Enter your Password"
                  value={password}
                  onChangeText={handlePassword}
                />
              </View>
              <View className='h-5'>{ pError ? <PasswordError /> : <></> }</View>

              {/* Input box for password re-checking*/}
              <View>
                <Text className="text-2xl font-Questrial  text-CTA-primary  pl-8 mt-3 mb-2">
                  Confirm Password
                </Text>
                <TextInput
                  secureTextEntry={true}
                  className="drop-shadow-3xl mx-8 rounded-xl bg-gray-100 px-4 h-12 "
                  placeholder="Re-enter your password"
                  value={rePassword}
                  onChangeText={handleValidatePassword}
                />
              </View>
              <View className='h-10'>{ rpError ? <RePasswordError /> : <></> }</View>
              {/* button for password going to the next page*/}
              <TouchableOpacity onPress={onPressNext} className=" drop-shadow-3xl bg-white">
                <View
                  className="bg-CTA-primary h-12 mx-28 rounded-2xl mt-5 drop-shadow-3xl mb-10"
                  >
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
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default SignUp1;
