import React from 'react';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import {useState} from 'react';
const MenuButton = ({onPress, name, typeAndMoney}) => {
  const [value, setValue] = useState(0);
  const onDecrement = () => {
    setValue(value - 1);
  };
  const onIncrement = () => {
    setValue(value + 1);
  };
  return (
    <View
      style={{
        width: '90%',
        height: 60,
        backgroundColor: 'rgb(229, 231, 235)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: '5%',
        marginVertical: '5%',
        marginBottom: 10,
        marginTop: 15,
        flexDirection: 'row',
      }}>
      <View className="w-48">
        <Text style={{fontSize: 24, paddingLeft: 10, paddingTop: 0}}>
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
      </View>
      <View className="flex-row pt-3">
        <TouchableOpacity onPress={onDecrement} className="w-5">
          <Text className="text-5xl">-</Text>
        </TouchableOpacity>
        <Text className="text-4xl">{value}</Text>
        <TouchableOpacity onPress={onIncrement} className="w-7 px-1">
          <Text className="text-4xl">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuButton;
