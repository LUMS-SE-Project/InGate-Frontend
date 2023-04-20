import React, {useState, useEffect} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {Text, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

const OrderFailed: FC = ({navigation}) => {
  const onPressSubmit = () => {
    navigation.navigate("KhareedarFeedback");
  };
  return (
    <View className="min-h-screen min-w-screen flex pt-16 bg-white items-center">
      <Text className="text-5xl font-Montserrat text-center text-CTA-primary">
        Order Failed
      </Text>
      <View className="p-6 mt-16">
        <FontAwesomeIcon icon={faCircleXmark} size={200} color={'red'} />
      </View>
      <Text className="text-xl font-Montserrat text-center pt-16 text-CTA-primary px-14">
        Order could not be completed.
      </Text>
      <TouchableOpacity
        onPress={onPressSubmit}
        className="mb-4 shadow-2xl ml-1">
        <View
          className="h-12 rounded-2xl mt-5 shadow-2xl px-8 bg-CTA-primary"
          shadow-2xl>
          <Text className="text-lg font-Questrial text-center mt-2 text-white">
            Continue
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OrderFailed;
