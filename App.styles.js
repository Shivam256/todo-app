import palette from "./theme/palette";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    backgroundColor: palette.colors.background,
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  mainBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.colors.color1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    width: "80%",
    marginBottom: 30,
    elevation: 4,
  },
  btnText: {
    color: palette.colors.background,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  emptyCard: {
    backgroundColor: palette.colors.background,
    elevation: 4,
    width: "80%",
    height: 200,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    borderRadius: 5,
    padding: 20,
  },
  exmptyCardText: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "normal",
    color: palette.colors.color1,
    letterSpacing: 2,
  },
  taskListContainer:{
    width:'100%',
   
  },
  taskList:{
    width:'100%',
   
    
  }
 
});



export default styles;
