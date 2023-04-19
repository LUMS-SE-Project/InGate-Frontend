import React, {useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import {SafeAreaView, Text, View, ImageBackground} from 'react-native';
import {TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SignUp2 = () => {
  const [rollNumber, setrollNumber] = useState('');
  const [email, setEmail] = useState('');

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
            {/* Input box for Roll Number */}
            <View>
              <Text className="text-2xl font-Questrial  text-CTA-primary pt-3 pl-8 mt-8 mb-2">
                Roll Number
              </Text>
              <TextInput
                className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-12 placeholder-slate-900"
                placeholder="Enter your roll number"
                value={rollNumber}
                onChangeText={inputRollnumber => setrollNumber(inputROllnumber)}
              />
            </View>

            {/* Input box for Smart Card */}
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

            <TouchableOpacity
              onPress={() => {
                ImagePickerIOS.launchImageLibrary(
                  {
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 200,
                    maxWidth: 200,
                  },
                  response => {
                    console.log(response.assets[0].uri);
                    this.setState({resourcePath: response.assets[0].uri});
                  },
                );
              }}></TouchableOpacity>
            {/* button for password going to the next page*/}
            <TouchableOpacity onPress={onPressNext} className=" shadow-2xl">
              <View
                className="bg-CTA-primary h-12 mx-28 rounded-2xl mt-5 shadow-2xl"
                shadow-2xl>
                <Text className="text-xl font-Questrial text-center mt-2 text-white">
                  Submit
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default SignUp2;
