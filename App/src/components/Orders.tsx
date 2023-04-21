import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Orders = ({
  name,
  number,
  partial_order,
  accepted,
  total_price,
  setWhichOrder,
  setPage,
} : any) => {



  return (
    <TouchableOpacity
      onPress={() => {
        setWhichOrder(number);
        setPage(7);
      }}
      className='text-center'
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
      }}>
      <Text style={{fontSize: 24, paddingLeft: 10, paddingTop: 20, paddingBottom: 20}}>
        {name}
      </Text>
      <Text style={{fontSize: 18, paddingLeft: 10, paddingTop: 20}}>
        Order Number: {number}
      </Text>
      <Text style={{fontSize: 18, paddingLeft: 10, paddingTop: 20}}>
        Partial Order: {partial_order ? 'Partial Order' : 'Full Order'}
      </Text>
      <Text style={{fontSize: 18, paddingLeft: 10, paddingTop: 20}}>
        Total Price: {total_price}
      </Text>
      <Text style={{fontSize: 18, paddingLeft: 10, paddingTop: 20, paddingBottom: 40}}>
        Accepted: {accepted !== 0 ? 'Accepted' : 'Not Accepted'}
      </Text>
    </TouchableOpacity>
  );
};

export default Orders;
