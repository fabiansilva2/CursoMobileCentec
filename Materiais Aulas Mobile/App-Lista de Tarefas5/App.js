import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Modal, TouchableHighlight, TextInput } from 'react-native';
import image from './resources/images/notepad.png';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

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

  const [modal, setModal] = useState(true);


  function deletarTarefa(id) {
    alert('Tarefa ' + id + ' Deletada');

    let novaTarefa = tarefas.filter(function (val) {
      return val.id != id;
    });

    setTarefas(novaTarefa);

  }



  return (
    <ScrollView style={styles.statusbar}>
      <StatusBar hidden={false} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput autoFocus={true}></TextInput>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModal(!modal);
              }}>
              <Text style={styles.textStyle}>Adicionar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <ImageBackground source={image} style={styles.image}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>App Lista de Tarefas</Text>
        </View>
      </ImageBackground>

      {

        tarefas.map(function (val) {

          return (

            <View style={styles.tarefaSingle}>
              <View style={styles.textoTarefa}>
                <Text>
                  {val.tarefa}
                </Text>
              </View>
              <View style={styles.btnExluir}>
                <TouchableOpacity onPress={() => deletarTarefa(val.id)}>
                  <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>

          );

        })
      }

      <TouchableOpacity style={styles.btnAddTarefa}
        onPress={() => setModal(true)}>
        <Text style={styles.btnAdicionar}>
          Nova Tarefa
        </Text>
      </TouchableOpacity>

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

  },

  btnAdicionar: {
    textAlign: 'center',
    color: 'white'

  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 5
  },

  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  btnAddTarefa: {
    width: 200,
    padding: 8,
    backgroundColor: 'gray',
    marginTop: 20,
  },


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

