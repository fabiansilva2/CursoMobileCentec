import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f7fa',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20
    },

    img:{
      height: 200,
      width: 200
    },

    textInput:{
      backgroundColor: 'white',
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      textAlign: 'center'    
    },

    btnCadastro:{
      height: 40,
      width: '50%',
      backgroundColor: 'white',
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: 5,
      justifyContent: 'center'

    }



  });

  export default Styles;