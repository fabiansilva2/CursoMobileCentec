import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Botao from './components/Button';

export default class App extends React.Component {

  render() {

    return (
      <View>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
        <Botao></Botao>
      </View>
    );
  }
}


