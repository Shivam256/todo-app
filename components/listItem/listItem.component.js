import React from "react";

import { View, Text ,TouchableOpacity} from "react-native";
import styles from "./listItem.styles";



const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.taskName}>{props.task.value}</Text>
      <TouchableOpacity style={styles.deleteBtn} onPress={props.onDelete.bind(this,props.task.key)}/>
    </View>
  );
};

export default ListItem;
