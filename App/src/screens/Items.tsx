import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import KhareedarButton from "../components/KhareedarButton";
import KhareedarDostBottomButtons from "../components/KhareedarDostBottomButtons";
const ItemsPage = ({ navigation }) => {
  const handleButtonPress = () => {
    console.log("Button pressed");
  };

  // Dummy data for testing purposes
  const data = [
    { id: 1, name: "Restaurant A", typeAndMoney: "Food Type 1, $10" },
    { id: 2, name: "Restaurant B", typeAndMoney: "Food Type 2, $15" },
    { id: 3, name: "Restaurant C", typeAndMoney: "Food Type 3, $20" },
  ];

  return (
    <View className="min-h-screen min-w-screen flex justify-center align-middle">
      <ImageBackground
        source={require('../images/GradientBackground.png')}
        resizeMode="stretch"
        className="min-h-screen min-w-screen flex justify-center align-middle">
        <TextInput
          className="ml-5 mr-5 mb-9 w-296 h-34 bg-gray-200 rounded-xl"
          placeholder="Search a location"
        />

        <View className="h-4/5 bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white flex flex-col justify-center items-center"> 
          {data.map((item) => (
            <KhareedarButton
              key={item.id}
              onPress={handleButtonPress}
              name={item.name}
              typeAndMoney={item.typeAndMoney}
            />
          ))}
          <KhareedarDostBottomButtons
            onKhareedarPress={() => console.log('Khareedar button pressed')}
            onDostPress={() => console.log('Dost button pressed')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ItemsPage;
