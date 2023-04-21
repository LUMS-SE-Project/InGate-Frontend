import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';

const DostButton = ({
  setOrderData,
  item,
  setPage,
  name,
  typeAndMoney,
  handleCheckBoxClick,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setOrderData(item);
        setPage(10);
      }}
      style={{
        width: '90%',
        height: 60,
        backgroundColor: 'rgb(229, 231, 235)',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: '5%',
        marginVertical: '5%',
        paddingLeft: 5,
        marginBottom: 10,
        flexDirection: 'row',
        flex: 1, // added
      }}>
      <Text style={{fontSize: 24, paddingLeft: 10, paddingTop: 20, top: -20}}>
        {name}
      </Text>
      <Text
        style={{
          fontSize: 16,
          paddingLeft: 10,
          paddingTop: 5,
          paddingBottom: 20,
          left: -65,
          top: 22,
        }}>
        {typeAndMoney}
      </Text>
      <TouchableOpacity
        onPress={handleCheckBoxClick}
        style={{position: 'absolute', right: 10, top: 14, bottom: 14}}>
        <FontAwesomeIcon icon={faCircleCheck} size={30} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default DostButton;
