import React, { useState } from 'react';
import { StyleSheet, Text, View, useEffect } from 'react-native';
import { useFonts } from 'expo-font'
import StackNav from './navigation/navigate'
// import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import { Font } from 'expo'
import {
  AlexBrush_400Regular
} from '@expo-google-fonts/alex-brush'
import AppLoading from 'expo-app-loading'


export default function App() {

  let [fontsLoaded] = useFonts({
    'StyleScript': require('./assets/fonts/StyleScript.ttf'),
    'Avenir': require('./assets/fonts/Avenir.ttf'),
    AlexBrush_400Regular

  });

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    < StackNav />
  )
}
