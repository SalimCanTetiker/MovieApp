import React from "react";
import { View,} from 'react-native'

import SearchBar from "../../components/SearchBar/SearchBar";

import styles from './Search.style';

const Search = ({navigation}) => {

    const handleNavigation = () => {
        navigation.navigate('DetailSearch')
    }

    return(
        <View style={styles.container}>
            <SearchBar onPress={handleNavigation}/>
        </View>
    )
}
export default Search;