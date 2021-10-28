import { StyleSheet} from 'react-native';
import palette from '../../theme/palette';


const styles = StyleSheet.create({
    customButton:{
        width:'40%',
        paddingVertical:10,
        alignItems:'center',
        borderRadius:5
    },
    btntext:{
        color:palette.colors.background,
        letterSpacing:2
    }
})


export default styles;