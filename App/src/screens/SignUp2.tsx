import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, ImageBackground} from 'react-native';
import {TextInput, TouchableOpacity, ScrollView} from 'react-native';

export interface SignUp2Props {
  rollNumber: string;
  image: string;
  setrollNumber: (rollNumber: string) => void;
  setImage: (image: string) => void;
  setPage: (page: number) => void;
}

const SignUp2 = (props: SignUp2Props) => {
  const {rollNumber, image, setrollNumber, setImage, setPage} = props;

  const [error, setError] = useState<boolean | null>(null);

  const Error = () => {
    return (
      <View className="flex flex-row justify-center items-center">
        <Text className="text-red-500 font-Montserrat text-base">
          Please enter a valid roll number
        </Text>
      </View>
    );
  };

  const onPressNext = () => {
    if (error) {
      return;
    } else {
      setPage(3);
    }
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
                Roll Number (without dashes)
              </Text>
              <TextInput
                className="drop-shadow-3xl mx-8 rounded-xl bg-gray-100 px-4 h-12 placeholder-slate-900"
                placeholder="Enter your roll number without dashes"
                value={rollNumber}
                onChangeText={inputRollnumber => {
                  setrollNumber(inputRollnumber);
                  if (inputRollnumber.length === 8) {
                    setError(false);
                  } else {
                    setError(true);
                  }
                }}
              />
            </View>
            <View className="h-10">{error ? <Error /> : <></>}</View>

            {/* Input box for Smart Card */}
            <View>
              <Text className="text-2xl font-Questrial  text-CTA-primary  pl-8 mt-6 mb-2">
                Your Smart Card
              </Text>
              <TextInput
                keyboardType="email-address"
                className="drop-shadow-3xl mx-8 rounded-xl bg-gray-100 px-4 h-12"
                placeholder="Enter your Email Address"
                value={image}
                onChangeText={inputImage => setImage(inputImage)}
              />
            </View>

            <View className="h-10">
              <></>
            </View>
            {/* button for password going to the next page*/}
            <TouchableOpacity
              onPress={onPressNext}
              className=" drop-shadow-3xl">
              <View
                className="bg-CTA-primary h-12 mx-28 rounded-2xl mt-5 drop-shadow-3xl"
                drop-shadow-3xl>
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
