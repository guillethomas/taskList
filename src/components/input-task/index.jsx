import { Button, TextInput, View } from "react-native";

import { styles } from "./styles.js";

const InputTask = ({borderColor,funcionOnFocus,funcionOnBlur,funcionOnChangeText,task,funcionCrearTarea}) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput 
          style={[styles.input, {borderColor:borderColor}]} 
          placeholder='Título de la tarea'
          onFocus={funcionOnFocus}
          onBlur={funcionOnBlur}
          onChangeText={funcionOnChangeText}
          value={task}
          />
        <Button disabled={task.length===0} title='Crear' onPress={funcionCrearTarea} color='#2350D9'/>
        </View>
    )
}

export default InputTask;