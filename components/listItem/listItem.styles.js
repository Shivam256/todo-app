import { StyleSheet } from "react-native";
import palette from "../../theme/palette";

const styles = StyleSheet.create({
  listItem: {
    width:'90%',
    marginLeft:'5%',
    backgroundColor: palette.colors.background,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: "auto",
    marginBottom: 15,
    elevation: 3,
    flexDirection:'row',
    borderRadius:4,
    justifyContent:'space-between',
    alignItems:'center'
  },
  taskName:{
    fontSize:20,
    color:palette.colors.color1,
  },
  deleteBtn:{
    width:15,
    height:15,
    borderRadius:10,
    backgroundColor:palette.colors.color2,
  }
});

export default styles;
