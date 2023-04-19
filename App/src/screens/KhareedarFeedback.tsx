import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
// import {Picker} from '@react-native-picker/picker';
import KhareedarDostBottomButtons from '../components/KhareedarDostBottomButtons';

const KhareedarFeedback = () => {
  const [blockDeets, setBlockDeets] = useState('');
  const [addComments, setAddComments] = useState('');
  // const [bgColor, setBgColor] = useState('');

  const [name, setName] = useState('Sarim');
  const [phoneNumber, setPhoneNumber] = useState('03210239865');

  const onPressSubmit = () => {
    console.log('Block Details: ', blockDeets);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{backgroundColor: '#fff'}}>
        <View className="bg-CTA-primary">
          <Text className="text-4xl font-Montserrat text-center text-white pb-6 pt-10">
            Khareedar Feedback
          </Text>

          <View className="h-auto bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white">
            <View>
              <Text className="text-2xl font-Questrial text-CTA-primary pl-8 mt-10 mb-2">
                Khareedar Details
              </Text>
              <View className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-36 placeholder-slate-900">
                <Text className="text-base font-Questrial mt-4 mb-2 ml-1">
                  Name: {name}
                </Text>
                <Text className="text-base font-Questrial mt-2 mb-2 ml-1">
                  Phone Number: {phoneNumber}
                </Text>
                <Text className="text-base font-Questrial mt-2 mb-2 ml-1">
                  Rating: {'DISPLAY RATING HERE'}
                </Text>
              </View>
            </View>

            <View>
              <Text className="text-2xl font-Questrial text-CTA-primary pl-8 mt-10 mb-2">
                Block the Khareedar
              </Text>
              <View>
                <TextInput
                  style={{textAlignVertical: 'top'}}
                  className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-24 placeholder-slate-900"
                  placeholder="Enter your roll number"
                  multiline
                  value={blockDeets}
                  onChangeText={blockDeets =>
                    setBlockDeets(blockDeets)
                  }></TextInput>
              </View>
            </View>

            <View>
              <Text className="text-2xl font-Questrial text-CTA-primary pl-8 mt-10 mb-2">
                Additional Comments
              </Text>
              <View>
                <TextInput
                  style={{textAlignVertical: 'top'}}
                  className="shadow-2xl mx-8 rounded-xl bg-gray-100 px-4 h-24 placeholder-slate-900"
                  placeholder="Enter your roll number"
                  multiline
                  value={addComments}
                  onChangeText={addComments =>
                    setAddComments(addComments)
                  }></TextInput>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={blockDeets == '' ? () => {} : onPressSubmit}
                className="mt-10 mb-10 shadow-2xl">
                <View
                  style={{
                    width: '100%',
                    backgroundColor: blockDeets == '' ? '#9C9C9C' : '#F13737',
                  }}
                  className="h-12 mx-9 rounded-2xl mt-5 shadow-2xl px-4"
                  shadow-2xl>
                  <Text className="text-xl font-Questrial text-center mt-2 text-white">
                    Block
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={blockDeets == '' ? onPressSubmit : () => {}}
                className="mt-10  mb-10 shadow-2xl px-4">
                <View
                  style={{
                    width: '100%',
                    backgroundColor: blockDeets == '' ? '#6B85F1' : '#9C9C9C',
                  }}
                  className="h-12 mx-9 rounded-2xl mt-5 shadow-2xl px-4"
                  shadow-2xl>
                  <Text className="text-xl font-Questrial text-center mt-2 text-white">
                    Done
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <KhareedarDostBottomButtons
            onKhareedarPress={() => console.log('Khareedar button pressed')}
            onDostPress={() => console.log('Dost button pressed')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KhareedarFeedback;
