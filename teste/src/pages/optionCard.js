import { StyleSheet, Text, TouchableWithoutFeedback, View, Image } from "react-native";
import { categories } from "../../constantes";
import { useState } from "react";
import { featured } from "../../constantes";
import { themeColors } from "../../index";
import { Bold } from "react-native-feather";
import * as Icon from "react-native-feather";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import OptionScreen from "../../OptionScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function OptionCard({item}) {
    const navigation = useNavigation()
    
    return (
        <TouchableWithoutFeedback 
        onPress={() => navigation.navigate('Option',{...item})}    
        >
            <View style={{
                shadowColor: themeColors.bgColor(0.2),
                shadowRadius: 7
            }}
             className='mr-6 bg-white rounded-3xl shadow-lg'>
            <Image className="h-36 w-64 rounded-t-3xl" source={item.image} /> 
                <View className='px-3 pb-4x space-y-2'>
                    <Text className="text-lg font-bold pt-2"> {item.name}</Text>
                    <View className='flex-row items-center space-x-1'>
                        <Image source={require("../../assets/imagens/star.png")} className="h-4 w-4"/>
                        <Text className="text-xs">
                            <Text className="text-green-700">{item.stars}</Text>
                            <Text className="text-gray-700">({item.reviews} review) . <Text className="font-semibold">{item.category}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <Icon.MapPin color="gray" width="15" height="15"/>
                        <Text className="text-gray-700 text-xs">Em {item.loc}</Text>
                    </View>
                </View>
            </View>

        </TouchableWithoutFeedback>
        
    );
}