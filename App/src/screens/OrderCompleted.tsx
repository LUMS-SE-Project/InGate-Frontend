import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

export interface CompProps {
  setPage: (page: number) => void;
}

const OrderCompleted = (props: CompProps) => {
  const {setPage} = props;

  const onPressSubmit = () => {
    setPage(14);
  };
  return (
    <View className="min-h-screen min-w-screen flex pt-16 bg-white items-center">
      <Text className="text-5xl font-Montserrat text-center text-CTA-primary">
        Order Completed
      </Text>
      <View className="p-6 mt-16">
        <FontAwesomeIcon icon={faCheckCircle} size={200} color={'green'} />
      </View>
      <Text className="text-xl font-Montserrat text-center pt-16 text-CTA-primary px-14">
        You have completed the order
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

export default OrderCompleted;
