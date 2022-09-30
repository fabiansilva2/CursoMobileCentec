import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Botao from './components/Button';
import Styles from './assets/style/style';
import IconeReact from './assets/images/tiny_logo.png'


export default class App extends React.Component {

  render() {
    return (
      <View style={Styles.container}>

        <Header></Header>
        <Body></Body>
        <Footer></Footer>
        <Botao></Botao>
        <Image source={IconeReact} style={Styles.img}></Image>

      </View>

    );
  }
}







