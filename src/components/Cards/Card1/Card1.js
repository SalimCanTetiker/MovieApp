import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';

import styles from './Card1.style';

const Card1 = ({popprop, onPress}) => {
    return(
        <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://image.tmdb.org/t/p/original' + popprop.poster_path}}/>
            <Text style={styles.title}>{popprop.title}</Text>
            <Text style={styles.title_date}>{popprop.release_date}</Text>
        </View>
        </TouchableNativeFeedback>
    )
}
export default Card1;
