import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ListCategoriesScreen from "../screens/ListCategoriesScreen";
import CategoriesScreen from "../screens/CategoriesScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="ListCategories" component={ListCategoriesScreen} />
                <Stack.Screen name="Categories" component={CategoriesScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}