import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from "react-native";
import { categories } from "./constantes";
import { useState } from "react";
import { featured } from "./constantes";
import { themeColors } from "./index";
import * as Icon from "react-native-feather";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {useRoute} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function OptionScreen() {
    const Stack = createNativeStackNavigator();
    const {params} = useRoute();
    const navigation = useNavigation();
    let item = params;
     // console.log('Opções:',item)

    return (
        <View>
            
            <ScrollView>
                
               
                
                <View className="relative">
                    <Image className='w-full h-72' source={item.image}/>
                    <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'>
                        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgcolor(1)} />
                    </TouchableOpacity>

                </View>
                <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                className ="bg-white -mt-12 pt-6"
                >
                    <View className='px-5'>
                        <Text className='text-3xl font-bold'>{item.name}</Text>
                        <View className='flex-row space-x-2 my-1'>
                            <View className='flex-row items-center space-x-1'>
                            <Image source={require("./assets/imagens/star.png")} className="h-4 w-4"/>
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
                    <Text className="text-gray-500 mt-2"> {item.description}</Text>
                </View>
            </View>
            <View className='pb-36 bg-white'>
                <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>
            </View>
            </ScrollView>
            
        </View>
        
    );
}

