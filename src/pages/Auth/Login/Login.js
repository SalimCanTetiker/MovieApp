import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, ScrollView} from "react-native";
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';

import Buttonn from '../../../components/Buttonn/Buttonn';
import Input from "../../../components/Input/Input";

import styles from './Login.style';

const initialFormValues = {
    usermail: '',
    password: '',
};

const Login = ({navigation}) => {
    const [loading, setLoading] = useState(false);

    const handleSignUp = () => {
        navigation.navigate('Sign')
    }
    const handleFormSubmit = async (formValues) => {
        try {
            setLoading(true)
           await auth().signInWithEmailAndPassword(
                formValues.usermail.trim(),
                formValues.password,
            )
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false) 
        }
    }
    return(
        <View style={styles.container}>
            <ScrollView>
            <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
            {({handleChange, handleSubmit, values }) => (
                <>
            <Input placeholder={'email giriniz'} value={values.usermail} onChangeText={handleChange('usermail')} IconName={'account-outline'}/>
            <Input placeholder={'password'} value={values.password} onChangeText={handleChange('password')} IconName={'account-key-outline'}/>
            <Buttonn title={"LOGİN"} onPress={handleSubmit} loading={loading}/>
            </>
            )}
        </Formik>
        <View style={styles.register_container}>
            <Text style={styles.register_title}>You don't have an account ?</Text>
        <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.register_button}>Create</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </View>

    )
}
export default Login;
