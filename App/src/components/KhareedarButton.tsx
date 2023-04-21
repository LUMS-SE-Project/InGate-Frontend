import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const KhareedarButton = ({
  setLocationSelected,
  name,
  setPage,
} : any) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setLocationSelected(name);
        setPage(2);
      }}
      className='text-center'
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
      }}>
      <Text style={{fontSize: 24, paddingLeft: 10, paddingTop: 20, paddingBottom: 40}}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default KhareedarButton;
