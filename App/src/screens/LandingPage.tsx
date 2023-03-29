import React from "react";
import {
    Text,
    View,
    ImageBackground,
} from "react-native";


const LandingPage = ({ navigation }) : JSX.Element=> {
    
    setTimeout(()=>{
        navigation.navigate('LoginPage')
    }, 2000)

    return(

        <View className='min-h-screen min-w-screen flex justify-center align-center'>
            <ImageBackground source={require("../images/GradientBackground.png")} resizeMode='stretch' className='min-h-screen min-w-screen flex justify-center align-middle' >
              <Text className='text-8xl font-Montserrat text-center text-white mt-[-100px]'>InGate</Text>
            </ImageBackground>
        </View>
    
    )

};

export default LandingPage;