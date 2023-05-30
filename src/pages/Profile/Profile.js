import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Profile.style';

const Profile = () => {
        const user = auth().currentUser.email.split('@')[0]
    return(
        <View style={styles.container}> 
            <TouchableOpacity onPress={() => auth().signOut()}>
                <Icon style={styles.ıcon} name='logout' size={40}/>
            </TouchableOpacity>
            <Image style={styles.image} source={require('../../assets/profile.png')} />
            <Text style={styles.text}>HELLO</Text>
            <Text style={styles.text}>{user}</Text>
        </View>
    )
}
export default Profile;