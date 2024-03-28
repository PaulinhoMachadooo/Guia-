import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { styled } from "styled-components/native";

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export default function WelcomeScreen() {
    const navigation = useNavigation();

    /* Pre Loader  */
    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{name: 'Home'}]
            }))
        }, 2000); /* Temporizador  */
    }, [])

    return (
        <View className="bg-[#172554] flex-1 justify-center items-center space-y-10 relative">
            <View
                style={{
                    flex: 1,
                    alignItems:"center",
                    justifyContent:"center",
                    width: wp(40),
                    height: hp(40),
                }}
            >
                <Image source={require("../assets/images/guia+logo.png")} 
                    style={{
                        maxWidth: 310,
                        maxHeight: 110,
                    }}
                />   
           
            </View>
        </View>
    );
}

