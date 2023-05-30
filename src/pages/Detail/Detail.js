import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Detail.style';

const Detail = ({route, navigation}) => {
  const {title, poster_path, release_date} = route.params
    
    const handleAddFavorites = () => {
     const favoriteObject = {
        name: title,
        image: "https://image.tmdb.org/t/p/original" + poster_path,
        date: release_date,
      };
      database().ref('favorites/').push(favoriteObject)
     };
     
    
    return(
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon style={styles.backButton} name='arrow-left' size={40} />
          </TouchableOpacity>
            <Image style={styles.image} source={{uri: "https://image.tmdb.org/t/p/original" + poster_path}}/>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{release_date}</Text>
            <TouchableOpacity onPress={handleAddFavorites}>
              <Icon style={styles.button} name='heart' size={30}/>
            </TouchableOpacity>
        </View>
    )
}
export default Detail;
