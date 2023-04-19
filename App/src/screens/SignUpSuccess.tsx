import React, {useState, useEffect, FC} from 'react';
import {FaCheckCircle} from 'react-icons/fa';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
// import {Picker} from '@react-native-picker/picker';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

const SignUpSuccessful: FC = () => {
  return (
    <View className="min-h-screen min-w-screen flex pt-16 bg-white items-center">
      <Text className="text-5xl font-Montserrat text-center text-CTA-primary px-14">
        Sign Up Successful
      </Text>
      <View className="p-6 mt-16">
        <FontAwesomeIcon icon={faCheckCircle} size={200} color={'green'} />
      </View>
      <Text className="text-xl font-Montserrat text-center pt-16 text-CTA-primary px-12">
        Your profile is under consideration.{'\n'}
        Please be patient while the admin verifies it.
      </Text>
      <Text className="text-xl font-Montserrat text-center pt-16 text-CTA-primary px-14">
        Check back in a few hours
      </Text>
    </View>
  );
};

export default SignUpSuccessful;
