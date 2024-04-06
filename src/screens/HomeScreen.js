import { View, Text, ScrollView, SafeAreaView, Image, TextInput, StyleSheet } from "react-native";
import React from "react";
import {
    MagnifyingGlassIcon,
    Bars3Icon,
} from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Categories from "../components/Categories";


import Parallax from "../components/CarouselParallax";

function HomeScreen() {
    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />

            <SafeAreaView>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 50,
                    }}
                    className="space-y-6 pt-20"
                >
                    {/* LOGO TOP */}
                    
                    <View className="mx-4 flex-row justify-between items-center">
                        <Bars3Icon size={hp(5)} color={"gray"} />
                        <Image 
                            source={require("../../src/assets/images/logo.png")}
                            style={{
                                width: hp(20),
                                height: hp(8),
                            }}
                        />                      
                    </View>

                    {/* SEARCH */}

            
                    <View
                        style={{
                            paddingTop:50,
                        }}
                    >
                        <View className="mx-8 bg-white flex-row items-center rounded-3xl p-[6]"
                            style={{                              
                                borderRadius: 50,
                                elevation: 15,
                            
                            }}
                        >
                            <View className="bg-white rounded-full p-5">
                                <MagnifyingGlassIcon 
                                    size={hp(2.5)} 
                                    color={"gray"} 
                                    strokeWidth={3}
                                />
                        
                            </View >
                            <TextInput 
                                placeholder="Digite o que procura..."
                                placeholderTextColor={"gray"}
                                style={{
                                    fontSize: hp(2),
                                    borderColor: 'red'  ,                               
                                }}
                                className="flex-1 text-base mb-1 pl-1 "
                            />
                        </View>

                        {/* SLIDE BAR */}
                        <View 
                            style={ styles.container}>
                              < Parallax />
                        </View>

                        {/* CATEGORIES */}
                        <View>
                            <Categories />
                            <Text>Categories</Text>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        paddingTop: 30,       
        
    },
});

export default HomeScreen;