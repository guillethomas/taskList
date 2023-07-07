import { TouchableOpacity, Text } from "react-native"
import { styles } from "./styles.js";

const ItemTask = ({presionarItemTask, item}) => {
    return (
        <TouchableOpacity onPress={() => presionarItemTask(item)} style={styles.contenedorTareas}>
        <Text style={styles.tareas}>{item.value}</Text>
        <Text style={styles.deleteTarea}>X</Text>
        </TouchableOpacity>
    )
}

export default ItemTask;