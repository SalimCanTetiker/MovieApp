import React from 'react';
import Lottie from 'lottie-react-native';

export default function Loading({source}) {
    return(
        <Lottie source={source} autoPlay />
    )
}