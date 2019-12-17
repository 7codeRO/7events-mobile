import {ActivityIndicator, Image, ImageBackground, View, Text} from "react-native";
import React from "react";
import Firebase from "../Firebase";

const Loading = (props: any) => {
    Firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            props.navigation.navigate('Events')
        } else {
            props.navigation.navigate('Login')
        }
    });

    return (
        <ImageBackground source={require('../../assets/background.png')} style={{width: '100%', height: '100%'}}>
            <View style={{flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        </ImageBackground>
    );
}

export default Loading;
