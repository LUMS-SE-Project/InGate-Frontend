import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBagShopping,
  faMotorcycle,
  faRightLong,
  faHouse,
  faUserCircle,
  faTriangleExclamation,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

const SideBar = ({onClosePress}: any) => {
  const onHomePress = () => {
    console.log('Home');
  };
  const onProfilePress = () => {
    console.log('profile');
  };
  const onReportPress = () => {
    console.log('report');
  };
  const onLogoutPress = () => {
    console.log('Logout');
  };
  return (
    <View className="absolute bg-CTA-primary w-64 right-0 top-0 h-full rounded-l-lg">
      <View className="flex flex-row">
        <View className="p-5 mx-5 w-3/5"></View>
        <TouchableOpacity onPress={onClosePress}>
          <View className="ml-3 mr-1 mb-9 mt-12 pt-1 rounded-xl right-0 ">
            <FontAwesomeIcon icon={faRightLong} size={35} color={'white'} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onHomePress}>
        <View className="flex flex-row">
          <View className="ml-5 px-3 mr-1   rounded-xl right-0 ">
            <FontAwesomeIcon icon={faHouse} size={35} color={'white'} />
          </View>
          <Text className="text-3xl text-white pt-1">Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onProfilePress}>
        <View className="flex flex-row">
          <View className="ml-5 px-3 mr-1   rounded-xl right-0 ">
            <FontAwesomeIcon icon={faUserCircle} size={35} color={'white'} />
          </View>
          <Text className="text-3xl text-white pt-1">Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onReportPress}>
        <View className="flex flex-row">
          <View className="ml-5 px-3 mr-1   rounded-xl right-0 ">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              size={35}
              color={'white'}
            />
          </View>
          <Text className="text-3xl text-white pt-1">Report a person</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onLogoutPress}>
        <View className="flex flex-row">
          <View className="ml-5 px-3 mr-1   rounded-xl right-0 ">
            <FontAwesomeIcon
              icon={faRightFromBracket}
              size={35}
              color={'white'}
            />
          </View>
          <Text className="text-3xl text-white pt-1">Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SideBar;
