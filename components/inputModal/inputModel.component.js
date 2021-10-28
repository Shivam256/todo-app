import React, { useState } from "react";
import { Modal, TextInput, Text, View } from "react-native";

import styles from "./inputModel.styles";

import CustomButton from "../customButton/customButton.component";
import palette from "../../theme/palette";

const InputModal = (props) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e);
  }

  const handleCreateClick = () =>{
      props.handleAdd(task);
      setTask('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.inputSection}>
          <Text style={styles.inputSectionHeader}>CREATE A TODO</Text>
          <TextInput style={styles.input} placeholder="ADD YOUR TASK" onChangeText={handleChange} value={task}/>
          <View style={styles.buttonContainer}>
            <CustomButton color={palette.colors.color2} onPress={props.closeModal}>DISCARD</CustomButton>
            <CustomButton color={palette.colors.color1} onPress={handleCreateClick}>CREATE</CustomButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InputModal;
