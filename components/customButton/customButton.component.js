import React from 'react';
import {TouchableOpacity,Text} from 'react-native';

import styles from './customButton.styles';


const CustomButton = ({color,children, ...otherProps}) =>{
    return(
        <TouchableOpacity {...otherProps} style={{backgroundColor:color,...styles.customButton}} activeOpacity={0.8}>
            <Text style={styles.btntext}>{children}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;