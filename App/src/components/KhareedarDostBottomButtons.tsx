import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBagShopping, faMotorcycle} from '@fortawesome/free-solid-svg-icons';
import { act } from 'react-test-renderer';


const KhareedarDostBottomButtons = ({onKhareedarPress, onDostPress}:any) => {

  const [khareedarColour, setKhareedarColour] = useState('white')
  const [dostColour, setDostColour] = useState('#6B85F1')
  
  const activateKhareedar = () => {
    onKhareedarPress()
    setKhareedarColour('white')
    setDostColour('#6B85F1')
  };
  const activateDost = () => {
    onDostPress()
    setDostColour('white')
    setKhareedarColour('#6B85F1')
  };
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
        onPress={activateDost}
        style={{
          width: '50%',
          height: 50,
          backgroundColor: dostColour,
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
            <FontAwesomeIcon icon={faMotorcycle} size={27} color={khareedarColour} />
          </View>
          <Text style={{color:khareedarColour}} className="text-2xl m-2">Dost</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={activateKhareedar}
        style={{
          width: '50%',
          height: 50,
          backgroundColor: khareedarColour,
          borderRadius: 0,
          borderWidth: 1,
          alignItems: 'center',
          borderColor: '#6B85F1',
          justifyContent: 'center',
        }}>
        <View className="flex-row">
          <View className="mt-3 px-1">
            <FontAwesomeIcon icon={faBagShopping} size={27} color={dostColour} />
          </View>
          <Text style={{color: dostColour}}className="text-2xl m-2">Khareedar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default KhareedarDostBottomButtons;
