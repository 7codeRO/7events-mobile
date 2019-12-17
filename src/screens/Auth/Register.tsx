import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import Firebase from "../../Firebase";
import {Button, Input} from 'react-native-elements';
import {Toast} from "native-base";
import Container from "./components/Container";
import Icon from 'react-native-vector-icons/FontAwesome';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string().required('Required').min(6, 'Minim 6 characters'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});


const Register = (props: any) => {
    const [loading, isLoading] = useState(false);

    const onSubmit = (values) => {
        isLoading(true);
        Firebase.auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then(() => {
                props.navigation.navigate('Events')
            })
            .catch(error => {
                isLoading(false);
                Toast.show({
                    text: error.message,
                    buttonText: "Okay",
                    type: "danger"
                })
            })
    };

    return (
        <Container>
            <Formik
                initialValues={{ email: '', password: '', confirm_password: '' }}
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
                            placeholder={'Confirm password'}
                            onChangeText={handleChange('confirm_password')}
                            onBlur={handleBlur('confirm_password')}
                            errorStyle={{ color: 'red' }}
                            errorMessage={errors.confirm_password as string}
                            secureTextEntry={true}
                        />
                        <View style={{display: 'flex', flexDirection: 'column'}}>
                            <Button
                                buttonStyle={style.button}
                                title={'Register'}
                                loading={loading}
                                onPress={() => handleSubmit()}
                            >
                            </Button>
                            <Button
                                buttonStyle={style.button}
                                title={'Login'}
                                type="clear"
                                onPress={() => {props.navigation.navigate('Login')}}
                            >
                            </Button>
                        </View>
                    </>
                )}
            </Formik>
        </Container>
    );
}
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

export default Register;
