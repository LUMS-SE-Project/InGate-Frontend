import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faLock,
  faAirFreshener,
  faAnchor,
  faSolid,
  faCircleXmark,
  faSharp,
  fas,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

const Bar = () => {
  return (
    <View className="flex items-center justify-start">
      <FontAwesomeIcon icon={faCircle} size={20} color={'#6B85F1'} />
      <View className="bg-gray-200 h-2 px-40 m-5">{/* Content here */}</View>
    </View>
  );
};

export default Bar;
