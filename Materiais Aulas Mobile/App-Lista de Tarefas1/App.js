import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import image from './resources/images/notepad.png';

export default function App() {

  //const image = require('./resources/images/notepad.png');

  return (
    <View style={styles.statusbar}>
      <ImageBackground source={image} style={styles.image}>
      <View style={styles.coverView}>
      <Text style={styles.textHeader}>App Lista de Tarefas</Text>
      </View>
      </ImageBackground>
      <StatusBar   hidden={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusbar:{
    paddingTop: 40

  },

  image: {
    width:'100%',
    height: 80,
    resizeMode: "cover"
  },
  
  coverView:{
    width:'100%',
    height:80,
    backgroundColor:'rgba(0,0,0,0.5)'
  },

  textHeader:{
    textAlign:'center',
    color:'white',
    fontSize:20,
    marginTop: 20
  },


});
