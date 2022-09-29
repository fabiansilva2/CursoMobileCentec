import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {

  Header = () => {
    return (
      <Text>Header do Meu App</Text>
    );
  }

  Body = () => {
    return (
      <Text>Conteudo do Meu App</Text>
    );
  }


  Footer = () => {
    return (
      <Text>
        <Text>Footer do Meu App</Text>{'\n'}
        <Text>Todos os Direitos Reservados</Text>
      </Text>
    );
  }

  render() {
    return (
      //View style={{ marginTop: 20 }}
      <View>
        <this.Header></this.Header>
        <this.Body></this.Body>
        <this.Footer></this.Footer>
        <Botao></Botao>
      </View>

    );
  }
}

const Botao = () => {
  return (
    <Button title="Clique aqui"></Button>
  );
}