import React, {useEffect} from 'react';
import {Content, Left, List, ListItem, Body, Thumbnail, Right, Text} from "native-base";
import CustomInputText from "./CustomInputText";
import {Formik} from "formik";
import {View} from "react-native";
import {Button} from "react-native-elements";
import * as Yup from 'yup';
import Firebase from "../../../Firebase";

const AddCommentSchema = Yup.object().shape({
    text: Yup.string()
        .required('Insert text'),

});

const Comment = ({comment:{email, text, date}}: any) => (
    <ListItem avatar>
        <Left>
            <Thumbnail source={{uri: `https://api.adorable.io/avatars/285/${email}.png`}} />
        </Left>
        <Body>
            <Text>{email}</Text>
            <Text note>{text}</Text>
        </Body>
    </ListItem>
);

const Comments = ({event, id}) => {

    const onFormSubmit = (values, {resetForm, setFieldTouched, setFieldValue}) => {
        const {text} = values;
        const commentToInsert = {
            text,
            email: Firebase.auth().currentUser.email,
            date: new Date().toLocaleString(),
        };

        let comments = event.comments ? [...event.comments, commentToInsert] : [commentToInsert];

        Firebase.database().ref(`/events/${id}`).update({
            comments
        }, (error) => {
            setFieldValue({title: ''}, false, false);
            resetForm({});
        });
    };

    return (
        <View>
            <Content style={{borderTopColor: '#ccc', borderTopWidth: 1}}>
                <List>
                    {event.comments.length > 0 &&
                        event.comments.map((comment, index) =>
                            <Comment comment={comment} key={index}/>
                    )}
                </List>
            </Content>
            <Formik
                initialValues={{
                    text: ''
                }}
                enableReinitialize
                validationSchema={AddCommentSchema}
                onSubmit={onFormSubmit}
            >
                {({ handleChange, handleBlur, setFieldValue, handleSubmit, values, errors, touched }) => (
                    <>
                        <CustomInputText
                            value={values.text}
                            error={errors.text}
                            touched={touched.text}
                            placeholder='Insert text here'
                            onChangeText={handleChange('text')}
                            onBlur={handleBlur('text')}
                        />
                        <Button
                            title={"Add comment"}
                            disabled={!values.text}
                            onPress={() => handleSubmit()}
                            style={{marginHorizontal: 10, marginVertical: 20}}
                        />
                    </>
                )}
            </Formik>
        </View>
    )
};

export default Comments;
