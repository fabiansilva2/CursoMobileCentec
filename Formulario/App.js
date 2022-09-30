import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from './assets/style/Styles';
import ImagemCentec from './assets/images/centec.png';

export default function App() {
    
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');


    const cadastro = () =>{
      alert('Nome');
      alert('CPF');
      alert('Senha');
    }

    return (
      <View style={Styles.container}>
        <StatusBar style="auto" />
        <Text>Formulário de Cadastro</Text>
        <Image source={ImagemCentec} style={Styles.img}></Image>
        <TextInput placeholder='Seu nome...' style={Styles.textInput} onChangeText={text=>setNome(text)}></TextInput>
        <TextInput placeholder='Seu CPF...' style={Styles.textInput} onChangeText={text=>setCpf(text)}></TextInput>
        <TextInput secureTextEntry={true} placeholder='Sua Senha...' style={Styles.textInput} onChangeText={text=>setSenha(text)}></TextInput>

        <TouchableOpacity onPress={()=>cadastro()} style={Styles.btnCadastro}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }


