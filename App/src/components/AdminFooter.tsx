import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBagShopping, faMotorcycle} from '@fortawesome/free-solid-svg-icons';

const AdminFooter = ({onReportsPress, onActivationsPress}: any) => {
  const [ReportsColour, setReportsColour] = useState('white');
  const [activationColour, setactivationColour] = useState('#6B85F1');

  const activateReports = () => {
    onReportsPress();
    setReportsColour('white');
    setactivationColour('#6B85F1');
  };
  const activateDost = () => {
    onActivationsPress();
    setactivationColour('white');
    setReportsColour('#6B85F1');
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
          backgroundColor: activationColour,
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
            <FontAwesomeIcon
              icon={faMotorcycle}
              size={27}
              color={ReportsColour}
            />
          </View>
          <Text style={{color: ReportsColour}} className="text-2xl m-2">
            Activations
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={activateReports}
        style={{
          width: '50%',
          height: 50,
          backgroundColor: ReportsColour,
          borderRadius: 0,
          borderWidth: 1,
          alignItems: 'center',
          borderColor: '#6B85F1',
          justifyContent: 'center',
        }}>
        <View className="flex-row">
          <View className="mt-3 px-1">
            <FontAwesomeIcon
              icon={faBagShopping}
              size={27}
              color={activationColour}
            />
          </View>
          <Text style={{color: activationColour}} className="text-2xl m-2">
            Reports
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AdminFooter;
