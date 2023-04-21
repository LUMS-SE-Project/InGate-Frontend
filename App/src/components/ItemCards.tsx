import React from 'react';
import {useContext, useState, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import instance from '../api/api';

interface ItemProps {
  element: any;
  setFluff: any;
  fluff: any;
}

export default function ItemCards(props: ItemProps) {
  const {element, setFluff, fluff} = props;
  const {token} = useContext(AuthContext);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [input, setInput] = useState(false);

  const onPressReject = () => {
    instance
      .post(
        '/admin/reject-item-request',
        {
          item_id: element["_id"],
          item_name: element.item_name,
          item_location: element.item_location,
          requester_email: element.requester_email,
          accepted: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(response => {
        console.log(response.data);
        setFluff(fluff + 1);
      })
      .catch(err => console.log(err));
  };
  const onPressAccept = () => {
    setInput(true);
  };

  useEffect(()=>{
    console.log(element)
  }, [element])

  const onPressDone = () => {
    instance
      .put(
        '/admin/accept-item-request',
        {
          "item_id": element["_id"],
          "item_name": element.item_name,
          "item_location": element.item_location,
          "requester_email": element.requester_email,
          "accepted": true,
          "item_description": description,
          "item_price": parseInt(price),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(response => {
        console.log(response.data);
        setFluff(fluff + 1);
        setInput(false)
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <View className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-auto placeholder-slate-900 mt-5">
        <View style={{display: 'flex'}}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text className="w-36 text-base font-Questrial mt-4 ml-1">
              Item name: {element.item_name}
            </Text>
            <Text className="w-36 text-base font-Questrial mt-2 ml-1">
              Item location: {element.item_location}
            </Text>
            <Text className="w-72 text-base font-Questrial ml-1 mt-4">
              Requester: {element.requester_email}
            </Text>
            {input ? (
              <>
                <TextInput
                  className="drop-shadow-3xl  rounded-xl bg-gray-100 px-1 h-12 placeholder-slate-900"
                  placeholder="Enter description"
                  value={description}
                  onChangeText={desc => setDescription(desc)}
                />
                <TextInput
                  className="drop-shadow-3xl rounded-xl bg-gray-100 px-1 h-12 placeholder-slate-900"
                  placeholder="Enter price"
                  value={price}
                  onChangeText={p => setPrice(p)}
                />
              </>
            ) : (
              []
            )}
          </View>
        </View>

        {input ? (
          <TouchableOpacity onPress={onPressDone} className="mb-4  ">
            <View
              style={{
                width: '100%',
                backgroundColor: '#F13737',
              }}
              className="h-12 rounded-2xl mt-5  px-10">
              <Text className="text-xl font-Questrial text-center mt-2 text-white">
                Done
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={{flexDirection: 'row'}} className="pt-3">
            <TouchableOpacity onPress={onPressReject} className="mb-4  ">
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#F13737',
                }}
                className="h-12 rounded-2xl mt-5  px-10">
                <Text className="text-xl font-Questrial text-center mt-2 text-white">
                  Reject
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressAccept} className="mb-4  ml-4">
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#6B85F1',
                }}
                className="h-12 rounded-2xl mt-5 shadow-2xl px-10"
                shadow-2xl>
                <Text className="text-xl font-Questrial text-center mt-2 text-white">
                  Accept
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
}
