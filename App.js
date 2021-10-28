import React, { useState } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";

import InputModal from "./components/inputModal/inputModel.component";
import ListItem from "./components/listItem/listItem.component";

import styles from "./App.styles";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const handleAddTask = (tsk) => {
    if (tsk.length === 0) return;
    setTasks((currentState) => [
      ...currentState,
      { key: Math.random().toString(), value: tsk },
    ]);
    setModalVisibility(false);
  };

const handleDeleteTask = (id) => {
  setTasks(currentTasks => {
    return currentTasks.filter(e => e.key !== id);
  })
}

  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={styles.mainBtn}
        activeOpacity={0.8}
        onPress={() => {
          setModalVisibility(true);
        }}
      >
        <Text style={styles.btnText}>ADD A TODO</Text>
      </TouchableOpacity>

      {tasks.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.exmptyCardText}>YOU HAVE NOTHING TO DO !</Text>
        </View>
      ) : (
        <View style={styles.taskListContainer}>
          <FlatList
            data={tasks}
            renderItem={(item) => <ListItem task={item.item} onDelete={handleDeleteTask}/>}
            contentContainerStyle={styles.taskList}
          />
        </View>
      )}
      <InputModal
        visible={modalVisibility}
        handleAdd={handleAddTask}
        closeModal={() => {
          setModalVisibility(false);
        }}
      />
    </View>
  );
}
