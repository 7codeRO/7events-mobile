import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Container, Content, DatePicker, Form, Header, Icon, Item, Label, Row} from "native-base";
import {Formik} from "formik";
import * as Yup from 'yup';
import {Input} from "react-native-elements";
import CustomInputText from "./components/CustomInputText";

const AddEventSchema = Yup.object().shape({
    title: Yup.string()
        .required('Insert title'),
    description: Yup.string()
        .required('Insert title'),
});

const AddEvent = () => {

    return (
        <Container>
            <Content>
                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        date: '',
                    }}
                    enableReinitialize
                    onSubmit={() => console.log('asd')}
                    validationSchema={AddEventSchema}
                    // onSubmit={onSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>

                            <CustomInputText
                                containerStyle={style.input}
                                error={errors.title}
                                touched={touched.title}
                                placeholder=''
                                label={'Title'}
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                            />
                            {/*<Item*/}
                            {/*    error={!!errors.title && touched.title}*/}
                            {/*    success={!errors.title && touched.title}*/}
                            {/*    stackedLabel*/}
                            {/*    style={style.input}*/}
                            {/*>*/}
                            {/*    <Label>Title</Label>*/}
                            {/*    <Input*/}
                            {/*        value={values.title}*/}
                            {/*        onChangeText={handleChange('title')}*/}
                            {/*        onBlur={handleBlur('title')}*/}
                            {/*    />*/}
                            {/*    {touched.title && getInputIcon(!!errors.title)}*/}
                            {/*</Item>*/}
                            {/*{touched.title && errors.title && <Text style={style.error}>{errors.title}</Text>}*/}
                            {/*<Item*/}
                            {/*    error={!!errors.description && touched.description}*/}
                            {/*    success={!errors.description && touched.description}*/}
                            {/*    stackedLabel*/}
                            {/*    style={style.input}*/}
                            {/*>*/}
                            {/*    <Label>Description</Label>*/}
                            {/*    <Input*/}
                            {/*        value={values.description}*/}
                            {/*        onChangeText={handleChange('description')}*/}
                            {/*        onBlur={handleBlur('description')}*/}
                            {/*    />*/}
                            {/*    {touched.description && getInputIcon(!!errors.description)}*/}
                            {/*</Item>*/}
                            {/*{touched.description && errors.description && <Text style={style.error}>{errors.description}</Text>}*/}




                        </>
                    )}
                </Formik>
            </Content>
        </Container>
    )
};

const style = StyleSheet.create({
    input: {
        marginTop: 15,
        display: 'flex',
    },
    inputError: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
    },
    inputSuccess: {
        borderBottomWidth: 1,
        borderBottomColor: 'green',
    },
    error:{
        color: 'red',
        marginLeft: 15,
        marginTop: 5
    }
});

export default AddEvent;
