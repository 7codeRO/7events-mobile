import {Image, ImageBackground, StyleSheet, View} from "react-native";
import React from "react";

const Container = (props: any) => (
    <ImageBackground source={require('../../../../assets/background.png')} style={{width: '100%', height: '100%'}}>
        <View style={style.box}>
            <View style={style.logoBox} >
                <Image source={require('../../../../assets/event-logo.png')} style={style.logo}/>
            </View>
            {props.children}
        </View>
    </ImageBackground>
)

const style = StyleSheet.create({
    box: {
        width: '80%',
        marginTop: 150,
        height: 600,
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 5,
        backgroundColor: '#F5F5F5',
    },
    logoBox: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ededed",
        borderBottomColor:"#ccc",
        borderBottomWidth: 1,
    },
    logo: {
        marginBottom: 10,
        width: '100%',
        resizeMode: 'center'
    }
});

export default Container;
