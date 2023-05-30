import React, { useEffect, useState } from "react";
import {View, FlatList, Text, Image} from "react-native";
import database from '@react-native-firebase/database';

import Loading from '../../components/Loading/Loading';

import styles from './Favorite.style';

const Favorite = () => { 
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    database().ref('favorites/')
    .on('value', snapshot => {
      const favoriteData = snapshot.val();
      if(favoriteData){
        const movieList = Object.keys(favoriteData).map(key => ({
          id: key,
          ...favoriteData[key],
        }))
        setMovie(movieList)
        setLoading(false)
      }
      })
  },[]);
  if (loading) {
    return <Loading source={require('../../assets/loading.json')}/>
  }
  const renderMovie = ({item}) => {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{item.name}</Text>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text style={styles.text}>{item.date}</Text>
      </View>
    )
  }
    return(
        <View style={styles.real_container}>
            <FlatList data={movie} renderItem={renderMovie} />
        </View>
    )
}
export default Favorite;