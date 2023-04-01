import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const KhareedarDostBottomButtons = ({ onKhareedarPress, onDostPress }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 0, marginTop: 20, position: 'absolute', bottom: 0, width: '100%' }}>
      <TouchableOpacity onPress={onKhareedarPress} style={{ width: '50%', height: 50, backgroundColor: '#6B85F1', borderRadius: 0, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Khareedar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDostPress} style={{ width: '50%', height: 50, backgroundColor: 'white', borderRadius: 0, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#6B85F1', borderLeftWidth: 0 }}>
        <Text style={{ color: '#6B85F1', fontSize: 18 }}>Dost</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KhareedarDostBottomButtons;
