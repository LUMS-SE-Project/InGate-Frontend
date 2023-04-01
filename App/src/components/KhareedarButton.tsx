import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const KhareedarButton = ({onPress, name, typeAndMoney}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '90%',
        height: 60,
        backgroundColor: 'rgb(229, 231, 235)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: '5%',
        marginBottom: 10,
      }}>
      <Text style={{fontSize: 24, paddingLeft: 10, paddingTop: 20}}>
        {name}
      </Text>
      <Text
        style={{
          fontSize: 16,
          paddingLeft: 10,
          paddingTop: 5,
          paddingBottom: 20,
        }}>
        {typeAndMoney}
      </Text>
    </TouchableOpacity>
  );
};

export default KhareedarButton;
