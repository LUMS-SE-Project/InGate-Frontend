import React from 'react';
import {useEffect, useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import instance from '../api/api';
import {AuthContext} from '../context/AuthContext';

const DostButton = ({
  setOrderData,
  item,
  setPage,
  name,
  typeAndMoney,
  handleCheckBoxClick,
  setWhichDostOrder,
  whichDostOrder,
  setOrderId,
}: any) => {
  useEffect(() => {
    console.log(item);
  }, []);

  const {user} = useContext(AuthContext);

  const {token} = useContext(AuthContext);

  const handleAccepted = () => {
    setOrderId(item.order_id);
    instance
      .put('/user/accept-order', {
        order_id: item.order_id,
        dost_email: user.email,
        khareedar_email: item.order_email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then(response => {
      console.log(response.data);
      // setFluff(fluff + 1);
    })
    .catch(err => {
      console.log(err)
    });
      
    
    setWhichDostOrder(item.order_id);

      setPage(11);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        setWhichDostOrder(item.order_id);
        setPage(10);
      }}
      style={{
        width: '90%',
        height: 'auto',
        backgroundColor: 'rgb(229, 231, 235)',
        borderRadius: 20,
        justifyContent: 'flex-start',
        marginHorizontal: '5%',
        marginVertical: '5%',
        paddingLeft: 5,
        marginBottom: 10,
        flexDirection: 'column',
        flex: 1, // added
      }}>
      <Text style={{fontSize: 24, paddingLeft: 10, paddingTop: 20}}>
        Order Location: {item.order_location}
      </Text>
      <Text
        style={{
          fontSize: 16,
          paddingLeft: 10,
          paddingTop: 5,
          paddingBottom: 10,
          top: 22,
        }}>
        Delivery Location: {item.delivery_location}
      </Text>
      <Text
        style={{
          fontSize: 16,
          paddingLeft: 10,
          paddingTop: 5,
          paddingBottom: 20,
          top: 22,
          marginBottom: 20,
        }}>
        Total Price: {item.total_price}
      </Text>
      <TouchableOpacity
        onPress={handleAccepted}
        style={{position: 'absolute', right: 10, top: 14, bottom: 14}}>
        <FontAwesomeIcon icon={faCircleCheck} size={30} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default DostButton;
