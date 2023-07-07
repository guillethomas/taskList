import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
  
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 20,
    },

    contenedorListaTareas: {
      marginTop: 25, 
    },

    listaTareas: {
      gap: 15,
      paddingBottom: 15,
    },

    modal: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 60,
      paddingVertical: 50,
    },

    modalTitle:{
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
      color:'#2350D9',
    },

    modalDescripcion:{
      paddingVertical: 10,
    },

    modalMensaje: {
      fontSize: 14,
      color: "#212121",
    },

    modalTareaSeleccionada:{
      fontSize: 14,
      color: "#212121",
      fontWeight: "bold",
      textAlign: "center",
      paddingVertical: 20,
      backgroundColor:'#A3C9F5',
      borderRadius:10,
      marginTop:30,
      marginBottom:30,
      paddingHorizontal: 15,
    },

    modalContenedorBotones:{
      flexDirection: "row",
      width: "100%",
      justifyContent: 'space-evenly',
      marginHorizontal: 40,
    },
  });
  