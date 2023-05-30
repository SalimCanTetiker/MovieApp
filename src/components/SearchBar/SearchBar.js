import React, { useState } from "react";
import {View, Text, FlatList, TouchableNativeFeedback} from 'react-native';

import useFetch from "../../hooks/useFetch/useFetch";
import Input from "../Input/Input";

import styles from './SearchBar.style';

const SearchBar = ({onPress}) => {
    const [movie, setMovie] = useState('');

    const {data} = useFetch('https://api.themoviedb.org/3/search/movie?api_key=49a759d2ff08236dd5c49ff7620f6722&query=${movie}')
 
    const renderMovie = ({item}) => {
        if(movie === ""){
        return
        }
        if(item.title.toLowerCase().includes(movie.toLowerCase())){
            return(
                <TouchableNativeFeedback onPress={onPress}>
                    <Text style={styles.text}>{item.title}</Text>
                </TouchableNativeFeedback>
            )
        }
    }
    
    return(
        <View>
            <Input onChangeText={text => setMovie(text)} value={movie} placeholder="Search" IconName={'magnify-plus-outline'}/>
            <FlatList data={data.results} renderItem={renderMovie}/>
        </View>

    )
}
export default SearchBar;