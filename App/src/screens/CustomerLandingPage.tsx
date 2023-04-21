import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

export interface PartialProps {
  setPage: (page: number) => void;
}

const CustomerLandingPage = (props: PartialProps) => {
  const {setPage} = props;
  const onPressSubmit = () => {
    setPage(15);
  };

  const onPressPlaceOrder = () => {
    console.log('here');
    setPage(1);
  };

  return (
    <View className="min-h-screen min-w-screen flex pt-16 bg-white items-center">
      <Text className="text-5xl font-Montserrat text-center text-CTA-primary">
        Welcome to Ingate
      </Text>

      <View style={{flexDirection: 'column'}} className="pt-28">
        <TouchableOpacity
          onPress={onPressPlaceOrder}
          className="mt-10 shadow-2xl">
          <View
            style={{width: '100%'}}
            className="bg-CTA-primary h-24 rounded-2xl mt-5 shadow-2xl px-16 align-middle justify-center"
            shadow-2xl>
            <Text className="text-2xl font-Questrial text-center text-white">
              Place{'\n'}Order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressSubmit} className="mt-10 shadow-2xl">
          <View
            style={{width: '100%'}}
            className="bg-CTA-primary h-24 rounded-2xl mt-16 shadow-2xl px-16 align-middle justify-center"
            shadow-2xl>
            <Text className="text-2xl font-Questrial text-center text-white">
              See{'\n'}Orders
            </Text>
          </View>
        </TouchableOpacity>

      </View>
      <View style= {{bottom:59, position:'absolute'}}>
        <KhareedarDostBottomButtons
          onKhareedarPress={() => setPage(0)}
          onDostPress={() => setPage(9)}
        />
      </View>
    </View>
  );
};

export default CustomerLandingPage;
