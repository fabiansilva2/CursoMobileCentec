import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View >
          <Text>Olá Mundo!</Text>
        </View>
        <View>
        <Text >Minha Imagem:</Text>
        <Image style={styles.img}  source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {width:50, 
    height:50, 
    alignSelf: 'center'
  }

});

