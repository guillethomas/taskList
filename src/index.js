import { useState } from 'react';
import { Text, View, TextInput,Button, SafeAreaView, FlatList, Modal, TouchableOpacity} from 'react-native';
import {styles} from './styles.js';
import { InputTask, ItemTask } from './components/index.js';

export default function App() {
  const [task, setTask] = useState('')
  const [tareas, setTareas] = useState([])
  const [presionarItemTask, setpresionarItemTask]= useState('false')
  const [tareaSeleccionada, setTareaSeleccionada]= useState (null)
  const [borderColor, setBorderColor] = useState('#A3C9F5')
  
  const funcionOnChangeText = (text) => {
    setTask(text)
  }
  
  const funcionOnFocus = () => {
    setBorderColor('#2350D9')
  }

  const funcionOnBlur = () => {
    setBorderColor('#A3C9F5')
  }

  const funcionCrearTarea = () => {
    setTareas ([
      ...tareas,
      {
        id: Date.now().toString(),
        value: task
      }
    ])
    
    setTask('')
  }
  const controlarpresionarItemTask = (item) => {
    setpresionarItemTask(true)
    setTareaSeleccionada(item)
  }

  const renderTarea = ({item}) => (
    <ItemTask 
    item={item}
    presionarItemTask={controlarpresionarItemTask}
    />
  )

  const eliminarTarea = (id) => {
    setTareas((tareasPrevias) => tareasPrevias.filter((task) => task.id !== id));
    setpresionarItemTask(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
          <InputTask
          borderColor={borderColor}
          funcionCrearTarea={funcionCrearTarea}
          funcionOnBlur={funcionOnBlur}
          funcionOnChangeText={funcionOnChangeText}
          funcionOnFocus={funcionOnFocus}
          task={task}
          />
          <FlatList
            data={tareas}
            keyExtractor={item => item.id}
            style={styles.contenedorListaTareas}
            contentContainerStyle={styles.listaTareas}
            renderItem={renderTarea}
            alwaysBounceVertical='false'
            >
          </FlatList>
          <Modal visible={presionarItemTask} animationType="fade">
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>Mensaje de confirmación</Text>
              <View style={styles.modalDescripcion}>
                <Text style={styles.modalMensaje}>
                  ¿Estás seguro de que querés eliminar esta tarea?
                </Text>
                <Text style={styles.modalTareaSeleccionada}>
                  {tareaSeleccionada?.value}
                </Text>
              </View>
              <View style={styles.modalContenedorBotones}>
                <Button 
                  title='Cancelar'
                  color='#2350D9'
                  onPress={() => setpresionarItemTask(false)}
                />
                <Button 
                  title='Eliminar'
                  color='#F54D73'
                  onPress={() => eliminarTarea(tareaSeleccionada?.id)}
                />
              </View>
            </View>
          </Modal>
      </View>
    </SafeAreaView>
  );
}