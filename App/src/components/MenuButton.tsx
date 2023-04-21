import React, { useEffect } from 'react';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import {useState} from 'react';

const MenuButton = ({name, price, description, item, AddToCart, RemoveFromCart}: any) => {
  const [value, setValue] = useState(item.quantity);

  useEffect(()=>{



  }, [])

  useEffect(()=>{
    setValue(item.quantity)
  }, [])


  const onDecrement = () => {
    setValue(value - 1);
    RemoveFromCart(item);
  };
  const onIncrement = () => {
    setValue(value + 1);
    AddToCart(item);
  };


  return (
    <View
      style={{
        width: '90%',
        height: 'auto',
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
        <Text style={{fontSize: 24, paddingLeft: 5, paddingTop: 0}}>
          {name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            paddingLeft: 10,
            paddingTop: 5,
          }}>
          {description}
        </Text>
        <Text
          style={{
            fontSize: 16,
            paddingLeft: 10,
            paddingTop: 5,
            paddingBottom: 10,
          }}>
          Rs. {price}
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
