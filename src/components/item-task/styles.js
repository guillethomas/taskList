import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({

    contenedorTareas:{
        flexDirection:'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#A3C9F5',
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: '#2350D9',
        color: '#212121',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
  
    tareas:{
        fontSize: 14, 
        fontWeight: 'bold',
        color: '#212121',
    },
  
    deleteTarea:{
        fontSize: 20, 
        fontWeight: 'bold',
        color: '#F54D73',
    },
})