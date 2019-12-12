import React from "react";
import {View, Text, ImageBackground, TextInput, StyleSheet} from "react-native";
import {Button, Input} from "native-base";

const WelcomeScreen = (props: any) => {



    return (
        <ImageBackground source={require('../../assets/background.png')} style={{width: '100%', height: '100%'}}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 24, marginBottom: 10, fontFamily: 'Cochin'}}>Events</Text>
                <TextInput
                    placeholder="Username"
                    style={style.textInput}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    style={style.textInput}
                />
                <Button
                    style={style.button}
                    onPress={() => props.navigation.navigate('Events')}
                >
                    <Text style={style.buttonText}>Login</Text>
                </Button>
            </View>
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    textInput:{
        height: 40,
        borderColor: 'gray',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        width: '80%'
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        width: '80%',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
});

export default WelcomeScreen;
