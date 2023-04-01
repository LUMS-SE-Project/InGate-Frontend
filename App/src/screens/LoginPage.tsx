import React from "react";
import {
    SafeAreaView,
    Text,
    View,
    ImageBackground,
} from "react-native";
import PrimaryCTA from "../components/PrimaryCTA";

const LoginPage = () => {
    return (
        <View className='min-h-screen min-w-screen flex justify-center align-middle'>
            <ImageBackground source={require("../images/GradientBackground.png")} resizeMode='stretch' className='min-h-screen min-w-screen flex justify-center align-middle' >
                <Text className="text-5xl font-Montserrat text-center text-white pb-8 pt-8">
                    Login
                </Text>
                <View className="h-4/5 bg-slate-800 rounded-tr-3xl rounded-tl-3xl w-max bg-white">
                <PrimaryCTA />

                </View>
            </ImageBackground>
        </View>


    )
};

export default LoginPage;