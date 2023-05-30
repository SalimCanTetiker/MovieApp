import React from "react";
import { View, FlatList, Text} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';

import Card1 from "../../components/Cards/Card1/Card1";

import styles from './Home.style';
import Loading from "../../components/Loading/Loading";

const Home = ({navigation}) => {
    const detailSelect = (poster_path, title, release_date) => {
        navigation.navigate("Detail", {poster_path,title, release_date})
    }
    const {data, loading} = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=49a759d2ff08236dd5c49ff7620f6722&language=en-US&page=1')
    const renderData = ({item}) => <Card1 popprop={item} onPress={() => detailSelect(item.poster_path, item.title, item.release_date)} /> 

    const {data: data1} = useFetch('https://api.themoviedb.org/3/movie/top_rated?api_key=49a759d2ff08236dd5c49ff7620f6722&language=en-US&page=1')
    const renderData1 = ({item}) => <Card1 popprop={item} onPress={() => detailSelect(item.poster_path, item.title, item.release_date)}/>

    return(
        <View style={styles.container}>
            <View style={styles.body_container}>
                <Text style={styles.header}>POPULAR</Text>
                {loading ? (
                    <Loading source={require('../../assets/loading.json')} />
                ) : (
                    <FlatList data={data.results} renderItem={renderData} horizontal/>
                )}
            </View>
            <View style={styles.body_container}>
                <Text style={styles.header}>TOP RATED</Text>
            <FlatList data={data1.results} renderItem={renderData1} />
            </View>
            </View>
    )
}
export default Home;
