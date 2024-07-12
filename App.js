import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { useFonts } from "expo-font";
import logo from './images/TrawellLogo.png';


export default function App() {
  return (
    <View style={styles.landingPage}>
      <Image style={styles.landingLogo} source = {logo}/>
      <Text style={styles.trawell}> Trawell </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  landingPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  landingLogo:{
    height:250,
    width:250
  },

  trawell:{
    fontFamily: 'Comfortaa-Regular',
    fontSize: 36
  },

});