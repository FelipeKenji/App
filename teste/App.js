import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Animated,ScrollView, Image } from 'react-native';
import { useRef } from 'react';

import Animacao from "./animacao/animacao";
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const H_MAX_HEIGHT = 200;
const H_MIN_HEIGHT = 55;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

export default function App(){
  return (
    <NavigationContainer>
    <SafeAreaView>
      <ScrollView>
        
        <HomeScreen/>
        
      </ScrollView>
    </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

})