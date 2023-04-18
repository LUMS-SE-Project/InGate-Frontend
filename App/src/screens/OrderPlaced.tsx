import React, {useState, useEffect, FC} from 'react';
import { FaCheckCircle } from "react-icons/fa";
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

const OrderPlaced:FC = () => {
  
  return (
    <View className="min-h-screen min-w-screen flex pt-16 bg-white items-center">
        <Text className="text-5xl font-Montserrat text-center text-CTA-primary">
          Order Placed
        </Text>
        {/* <FaCheckCircle></FaCheckCircle> */}
        <View className="pt-32 mb-16">
            <Icon name='check' size={80}  ></Icon>
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
