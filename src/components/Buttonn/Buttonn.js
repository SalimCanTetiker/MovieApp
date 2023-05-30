import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import Loading from '../Loading/Loading';

import styles from './Buttonn.style';

const Buttonn = ({title, onPress, loading}) => {
    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress} disabled={loading}>
            {loading ? (
                <Loading source={require('../../assets/buttonn_loading.json')}/>
                ) : (
            <Text style={styles.text}>{title}</Text>
            )}
        </TouchableOpacity>
    )
}
export default Buttonn;