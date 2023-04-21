import React from 'react';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {View, Text, TouchableOpacity} from 'react-native';
import instance from '../api/api';

interface ActivationCardProps {
  element: any;
  setFluff: any;
  fluff: any;
}

export default function ActivationCard(props: ActivationCardProps) {
  const {element, setFluff, fluff} = props;
  const {token} = useContext(AuthContext);

  const onPressAccept = () => {
    instance
      .put(
        '/admin/verify_status',
        {
          username: element.username,
          email: element.email,
          name: element.name,
          password: '',
          alumnus: element.alumnus,
          status: element.status,
          isAdmin: false,
          gender: 'Male',
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

  const onPressReject = () => {
    instance
      .put(
        '/admin/reject_user',
        {
          username: element.username,
          email: element.email,
          name: element.name,
          password: '',
          alumnus: element.alumnus,
          status: element.status,
          isAdmin: false,
          gender: 'Male',
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

  return (
    <>
      <View className=" mx-8 rounded-xl bg-gray-100 px-4 h-auto placeholder-slate-900 mt-5">
        <Text className="text-base font-Questrial mt-4 ml-1">
          Name: {element.name}
        </Text>
        <Text className="text-base font-Questrial mt-2 ml-1">
          Email: {element.email}
        </Text>
        <Text className="text-base font-Questrial mt-2 ml-1">
          Username = {element.username}
        </Text>
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
      </View>
    </>
  );
}
