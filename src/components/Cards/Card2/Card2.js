import React from "react";
import { View, Text, Image} from 'react-native';

import styles from './Card2.style';

const Card2 = ({card2Prop}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://image.tmdb.org/t/p/original' + card2Prop.poster_path}}/>
            <Text style={styles.title}>{card2Prop.title}</Text>
            <Text>{card2Prop.release_date}</Text>
        </View>
    )
}
export default Card2