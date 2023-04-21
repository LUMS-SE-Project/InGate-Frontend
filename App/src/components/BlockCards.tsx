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

export default function BlockCards(props: ActivationCardProps) {
  const {element, setFluff, fluff} = props;
  const {token} = useContext(AuthContext);

  const onPressReject = () => {
    instance
      .post(
        '/admin/reject-reported-user',
        {
            reporter_email: element.reporter_email,
            reportee_email: element.reportee_email,
            situation: element.situation,
            additional_comments: element.additional_comments,
            approved_by_admin: 0,
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
    instance
      .post(
        '/admin/approve-reported-user',
        {
            reporter_email: element.reporter_email,
            reportee_email: element.reportee_email,
            situation: element.situation,
            additional_comments: element.additional_comments,
            approved_by_admin: 0,
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
        <View style={{display: 'flex'}}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text className="w-72 text-base font-Questrial mt-4 ml-1">
              Reporter: {element.reporter_email}
            </Text>
            <Text className="w-72 text-base font-Questrial mt-2 ml-1">
              Offender: {element.reportee_email}
            </Text>
            <Text className="w-36 text-base font-Questrial mt-2 ml-1">
              Reason: {element.situation}
            </Text>
          </View>
          <Text className="w-72 text-base font-Questrial mt-4 ml-1">
            Comment(s): {element.additional_comments}
          </Text>
          {/* <Text className="w-36 text-base font-Questrial mt-2 ml-1">
              {element.
            </Text>
            <Text className="w-36 text-base font-Questrial mt-2 ml-1">
              {element.phone}
            </Text> */}
        </View>
        <Text className="text-base font-Questrial mt-4 ml-1">
          {element.explanation}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
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
      </View>
    </>
  );
}
