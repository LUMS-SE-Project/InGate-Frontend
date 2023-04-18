import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faLock,
  faAirFreshener,
  faAnchor,
  faSolid,
  faCircleXmark,
  faSharp,
  fas,
  faCircle,
  faCartShopping,
  faCircleUser,
  faLight,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

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
        onPress={onKhareedarPress}
        style={{
          width: '50%',
          height: 50,
          backgroundColor: '#6B85F1',
          borderRadius: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Khareedar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onDostPress}
        style={{
          width: '50%',
          height: 50,
          backgroundColor: 'white',
          borderRadius: 0,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          borderColor: '#6B85F1',
          borderLeftWidth: 0,
        }}>
        <Text style={{color: '#6B85F1', fontSize: 18}}>Dost</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KhareedarDostBottomButtons;
