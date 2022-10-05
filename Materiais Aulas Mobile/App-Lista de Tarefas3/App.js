import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import image from './resources/images/notepad.png';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  //const image = require('./resources/images/notepad.png');

  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      tarefa: 'Minha Tarefa 1'

    },
    {
      id: 2,
      tarefa: 'Minha Tarefa 2'

    },

    {
      id: 3,
      tarefa: 'Minha Tarefa 3'

    }

  ]);



  return (
    <ScrollView style={styles.statusbar}>
      <StatusBar hidden={false} />
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>App Lista de Tarefas</Text>
        </View>
      </ImageBackground>

      {
        
        tarefas.map(function(val){

          return(
            
            <View style={styles.tarefaSingle}>
          <View style={styles.textoTarefa}>
            <Text>
              {val.tarefa}
            </Text>
          </View>
          <View style={styles.btnExluir}>
            <TouchableOpacity>
              <AntDesign name="minuscircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

            );

        })
      }

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusbar: {
    paddingTop: 40

  },

  image: {
    width: '100%',
    height: 80,
    resizeMode: "cover"
  },

  coverView: {
    width: '100%',
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },

  textHeader: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginTop: 20
  },

  tarefaSingle: {
    marginTop: 30,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    paddingBottom: 10
  },

  textoTarefa: {
    /*     flex:1,
        width:'100%',
        padding:10 */
    //alignItems: 'flex-start'
  },

  btnExluir: {
    alignItems: 'flex-end',
    flex: 1,
    padding: 10

  }


});


// aonde encontrar os icones: https://icons.expo.fyi/
// Aonde encontrar as fontes: https://docs.expo.dev/guides/using-custom-fonts/ - https://github.com/expo/google-fonts
// npx expo install expo-font @expo-google-fonts/nomefonte - Comando para instalar a fonte


//Comando para carregar a fonte
/* 
import { AppLoading } from 'expo';

let [fontsLoaded] = useFonts({
  Lato_400Regular,
});

if (!fontsLoaded) {
  return <AppLoading />;
}

textHeader:{
  textAlign:'center',
  color:'white',
  fontSize:20,
  marginTop:30,
  fontFamily:'Lato_400Regular'
}, */

