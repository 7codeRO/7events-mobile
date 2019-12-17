import React, {useEffect, useState} from "react";
import {View, Text, ImageBackground, TextInput, StyleSheet, Image} from "react-native";
import {Button, Input} from "react-native-elements";
import {Formik} from "formik";
import * as Yup from 'yup';
import Firebase from '../../Firebase.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from "./components/Container";


const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string().required('Required').min(6, 'Minim 6 characters')
});


const Login = (props: any) => {
    const [loading, isLoading] = useState(false);



    const onSubmit = (values) => {
        isLoading(true);
        const {email, password} = values;
        Firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                props.navigation.navigate('Register')
            })
            .catch(function(error) {
                isLoading(false);
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
    }

    return (
        <Container>
            <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={SignupSchema}
                    onSubmit={onSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <Input
                                leftIcon={
                                    <Icon
                                        name='user'
                                        size={24}
                                        color='black'
                                        style={{marginTop: 10, marginRight: 5, width: 20}}
                                    />
                                }
                                containerStyle={{marginTop: 10, marginBottom: 10}}
                                inputStyle={style.textInput}
                                placeholder={'E-mail'}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                errorStyle={{ color: 'red' }}
                                errorMessage={errors.email as string}
                            />
                            <Input
                                leftIcon={
                                    <Icon
                                        name='key'
                                        size={24}
                                        color='black'
                                        style={{marginTop: 10, marginRight: 5, width: 20}}
                                    />
                                }
                                containerStyle={{marginTop: 10, marginBottom: 10}}
                                inputStyle={style.textInput}
                                placeholder={'Password'}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                errorStyle={{ color: 'red' }}
                                errorMessage={errors.password as string}
                                secureTextEntry={true}
                            />
                            <View style={{display: 'flex', flexDirection: 'column'}}>
                                <Button
                                    buttonStyle={style.button}
                                    title={'Login'}
                                    loading={loading}
                                    onPress={() => handleSubmit()}
                                >
                                </Button>
                                <Button
                                    buttonStyle={style.button}
                                    title={'Register'}
                                    type="clear"
                                    onPress={() => {props.navigation.navigate('Register')}}
                                >
                                </Button>
                            </View>
                        </>
                    )}
                </Formik>
        </Container>
    );
};

const style = StyleSheet.create({
    textInput:{
        display: 'flex',
        alignItems: 'center',
        width: '60%',
        marginTop: 10,
        // padding: 3,
        borderRadius: 3
    },
    box: {
        width: '80%',
        height: '60%',
        marginTop: '50%',
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 5,
        backgroundColor: '#F5F5F5',
    },
    button: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
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

export default Login;
