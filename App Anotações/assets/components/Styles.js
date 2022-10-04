import { StyleSheet, } from 'react-native';


const styles = StyleSheet.create({
    image: {
      width:'100%',
      height: 80,
      resizeMode: "cover"
    },
    btnAddTarefa:{
      width:200,
      padding:8,
      backgroundColor:'gray',
      marginTop:20
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
      marginTop:30,
      fontFamily:'Lato_400Regular'
    },
    tarefaSingle:{
        marginTop:30,
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'black',
        flexDirection:'row',
        paddingBottom:10
    },
    //Estilos para nossa modal
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'rgba(0,0,0,0.5)'
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
      zIndex:5
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
    }
  
  });

export default styles;