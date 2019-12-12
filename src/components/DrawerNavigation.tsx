import * as React from 'react';
import {SafeAreaView, ScrollView, View, Image, StyleSheet, ImageBackground} from "react-native";
import {DrawerItems} from "react-navigation-drawer";
const DrawerNavigation = (props: any) => {

    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground source={require('../../assets/avatar-bg.jpg')} style={{width: '100%', height: 150}}>
                <View style={style.avatarWrapper}>
                        <Image source={require('../../assets/avatar.png')} style={style.avatar}/>
                </View>
            </ImageBackground>
            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    avatarWrapper: {
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 120,
        height: 120
    }
})

export default DrawerNavigation;
