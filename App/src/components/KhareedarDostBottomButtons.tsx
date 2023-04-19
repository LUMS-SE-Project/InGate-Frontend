import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBagShopping, faMotorcycle} from '@fortawesome/free-solid-svg-icons';

const KhareedarDostBottomButtons = ({onKhareedarPress, onDostPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
      }}>
      

      <TouchableOpacity
        onPress={onDostPress}
        style={{
          width: '50%',
          height: 50,
          backgroundColor: '#6B85F1',
          borderRadius: 0,
          borderWidth: 1,
          borderColor: '#6B85F1',
          borderLeftWidth: 0,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View className="flex-row">
          <View className="mt-3 px-1">
            <FontAwesomeIcon icon={faMotorcycle} size={27} color={'white'} />
          </View>
          <Text className="color-white text-2xl m-2">Dost</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onKhareedarPress}
        style={{
          width: '50%',
          height: 50,
          backgroundColor: 'white',
          borderRadius: 0,
          borderWidth: 1,
          alignItems: 'center',
          borderColor: '#6B85F1',
          justifyContent: 'center',
        }}>
        <View className="flex-row">
          <View className="mt-3 px-1">
            <FontAwesomeIcon icon={faBagShopping} size={27} color={'#6B85F1'} />
          </View>
          <Text className="color-CTA-primary text-2xl m-2">Khareedar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default KhareedarDostBottomButtons;
