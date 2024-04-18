import { View, Text, ScrollView, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import {
    MagnifyingGlassIcon,
    Bars3Icon,
} from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";



import Parallax from "../components/CarouselParallax";
import { useNavigation } from "@react-navigation/native";

let width = Dimensions.get('window').width

export function HomeScreen() {
    const navigation = useNavigation()

    return (
        <ScrollView className="flex-1 bg-white">
            <StatusBar style="dark" />

            <SafeAreaView>
                <ScrollView 
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={{
                        paddingBottom: 50,
                    }}
                    className="space-y-6 pt-20"
                >
                    {/* LOGO TOP */}
                    
                    <View className="mx-4 flex-row justify-between items-center">
                        <Bars3Icon size={hp(5)} color={"gray"} onPress={() => navigation.navigate('CategoriesPage')}/>
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
                            <View style={{ flex: 1, alignItems: 'center', paddingBottom: 30, paddingTop: 30, }}>
                                <Text
                                    style={styles.textCategories}
                                >Categorias</Text>
                            </View>

                        {/* Categories Icons */}

                        <View style={styles.container2} >
                            <TouchableOpacity onPress={() => navigation.navigate('CategoriesPage')} >
                                <View style={styles.box}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                        <Image style={styles.img} source={require('../../src/assets/images/categories/academia.jpg')} />
                                    </View>
                                    
                                </View> 
                                <View style={styles.text}>
                                    <Text>ACADEMIA</Text>
                                </View>             
                            </TouchableOpacity >
                            {/*-------------------------------------------------------------------------*/} 
                            
                            <TouchableOpacity onPress={() => navigation.navigate('CategoriesPage')} >
                                <View style={styles.box}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                        <Image style={styles.img} source={require('../../src/assets/images/categories/academia.jpg')} />
                                    </View>
                                    
                                </View> 
                                <View style={styles.text}>
                                    <Text>ACADEMIA</Text>
                                </View>             
                            </TouchableOpacity >
                            <TouchableOpacity onPress={() => navigation.navigate('CategoriesPage')} >
                                <View style={styles.box}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                        <Image style={styles.img} source={require('../../src/assets/images/categories/academia.jpg')} />
                                    </View>
                                    
                                </View> 
                                <View style={styles.text}>
                                    <Text>ACADEMIA</Text>
                                </View>             
                            </TouchableOpacity >
                            
                        </View>
            
                            
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>         
        </ScrollView>
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
    textCategories: {
       fontSize: 20,
       fontWeight: 'bold',
       color: 'gray'
    },
    container2:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center'
    },
    box:{
        flex:1,
        height: 70,
        margin: 10,
        width: width/4,
        borderRadius: 15,
        borderColor:'gray',
        borderWidth: 0.5,
    },
    img:{
        width: 50,
        height: 50,
    },
    text:{
        alignItems: 'center',
        justifyContent: 'center',
    },


});

export default HomeScreen;