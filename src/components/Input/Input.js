import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Input.style';

const Input = ({placeholder, onChangeText, value, IconName}) => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder}
             onChangeText={onChangeText}
              value={value}
               />
               <Icon name={IconName} size={30} />
        </View>
    )
}
export default Input;