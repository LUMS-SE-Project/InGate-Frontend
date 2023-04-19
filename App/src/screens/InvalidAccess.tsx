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
import {
  faLock,
  faAirFreshener,
  faAnchor,
  faSolid,
  faCircleXmark,
  faSharp,
  fas,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAdobe,
  faApple,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';
// import {Picker} from '@react-native-picker/picker';
// import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

const InvalidAccess: FC = () => {
  return (
    <View className="min-h-screen min-w-screen flex pt-16 bg-white items-center">
      <Text className="text-5xl font-Montserrat text-center text-CTA-primary">
        Invalid Access
      </Text>
      <View className="p-6 mt-16">
        <FontAwesomeIcon icon={faCircleXmark} size={200} color={'red'} />
      </View>
      <Text className="text-xl font-Montserrat text-center pt-16 text-CTA-primary px-14">
        The Dost feature is only open for Luminites from batch of 2023-2027.
        {'\n'}
      </Text>
      <Text className="text-xl font-Montserrat text-center pt-16 text-CTA-primary px-14">
        Give our Khareedar feature a shot
      </Text>
    </View>
  );
};

export default InvalidAccess;
