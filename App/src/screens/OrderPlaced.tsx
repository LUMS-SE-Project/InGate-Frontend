import React, {useState, useEffect, FC} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Text,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
// import {Picker} from '@react-native-picker/picker';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

const OrderPlaced: FC = () => {
  return (
    <View className="min-h-screen min-w-screen flex pt-16 bg-white items-center">
      <Text className="text-5xl font-Montserrat text-center text-CTA-primary">
        Order Placed
      </Text>
      <View className="p-6 mt-16">
        <FontAwesomeIcon icon={faCheckCircle} size={200} color={'green'} />
      </View>
      <Text className="text-xl font-Montserrat text-center pt-16 text-CTA-primary px-14">
        Your order has been placed.{'\n'}
        We are looking for a dost to accept your order.
      </Text>
      <Text className="text-xl font-Montserrat text-center pt-16 text-CTA-primary px-14">
        Check back in a few minutes
      </Text>
    </View>
  );
};

export default OrderPlaced;
