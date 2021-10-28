import palette from "../../theme/palette";
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   modalContainer:{
       width:'100%',
       height:'100%',
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:palette.colors.background,
   },
   inputSection:{
       width:'90%',
    
       backgroundColor:palette.colors.background,
       elevation:4,
       alignItems:'center',
       paddingTop:20,
       paddingHorizontal:10,
       borderRadius:5
   },
   inputSectionHeader:{
       fontSize:25,
       fontWeight:"bold",
       letterSpacing:2,
       color:palette.colors.color1,
       marginBottom:20
   },
   input:{
       width:'90%',
       borderColor:palette.colors.color2,
       borderWidth:2,
       padding:5,
       paddingLeft:20,
       color:palette.colors.color1,
       fontSize:18,
       borderRadius:5,
       marginBottom:40
   },
   buttonContainer:{
       width:'100%',
       flexDirection:'row',
       justifyContent:'space-evenly',
       marginBottom:30
   }
});


export default styles;