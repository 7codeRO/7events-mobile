import React, {useRef, useState} from "react";
import {Container, Content} from "native-base";
import {Formik} from "formik";
import * as Yup from 'yup';
import { CheckBox } from 'react-native-elements'
import CustomInputText from "./components/CustomInputText";
import {Button} from "react-native-elements";
import DatePicker from "../../components/DatePicker";
import SingleImageUpload from "../../components/SingleImageUpload";
import Firebase from "../../Firebase";
import uuid from "../../helpers/uuid";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {SafeAreaView, ScrollView, View} from "react-native";
import _ from "lodash";

const AddEventSchema = Yup.object().shape({
    title: Yup.string()
        .required('Insert title'),
    description: Yup.string()
        .required('Insert description'),
    date: Yup.string()
        .required('Insert description'),
    location: Yup.string()
        .required('Insert location'),
    image: Yup.string()
        .required('Select image'),
});

const AddEvent = (props: any) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [loading, isLoading] = useState(false);

    const uploadImageAsync = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        const ref = Firebase.storage().ref().child(`images/${uuid()}`);
        return ref.put(blob);
    }

    const onFormSubmit = async (values) => {
        const {image} = values;
        isLoading(true);
        uploadImageAsync(image.uri)
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(imageUrl => saveEvent(imageUrl, values))
            .then(() => {
                alert('Success');
                props.navigation.navigate('Events');
                isLoading(false);
            })
            .catch((err) => console.log('err', err));
    };

    const saveEvent = (imageUrl, values) => new Promise((resolve, reject) => {
        const {title, description, location, date, isPrivate, categories} = values;
        const c = _.filter(items[0].children, (item => _.includes(categories, item.id)));
        Firebase.database().ref('/events').push({
            title,
            description,
            location,
            isPrivate,
            imageUrl,
            categories: c,
            date: date.toLocaleString(),
            goings: null,
            likes: null,
            interestings: null,
            user: Firebase.auth().currentUser.email,
            comments: null,
        }, (error) => {
            if (!error) {
                resolve();
            }
            reject();
        });
    });

    const items = [
        {
            name: '',
            id: 0,
            children: [
                {
                    name: 'Outdoors & Adventure',
                    id: 1,
                },
                {
                    name: 'Tech',
                    id: 2,
                },
                {
                    name: 'Family',
                    id: 3,
                },
                {
                    name: 'Health & Wellness',
                    id: 4,
                },
                {
                    name: 'Sports & Fitness',
                    id: 5,
                },
                {
                    name: 'Learning',
                    id: 6,
                },
                {
                    name: 'Photography',
                    id: 7,
                },
                {
                    name: 'Food & Drink',
                    id: 8,
                },
                {
                    name: 'Writing',
                    id: 9,
                },
                {
                    name: 'Language & Culture',
                    id: 10,
                },
                {
                    name: 'Music',
                    id: 11,
                },
                {
                    name: 'Movements',
                    id: 12,
                },
                {
                    name: 'Outdoors & Adventure',
                    id: 13,
                },
                {
                    name: 'Film',
                    id: 14,
                },
            ],
        },
    ];

    return (
        <SafeAreaView >
            <ScrollView
            >
                <Container>
                    <Content>
                        <Formik
                            initialValues={{
                                title: '',
                                description: '',
                                date: null,
                                image: null,
                                location: '',
                                isPrivate: false,
                                categories: null,
                            }}
                            enableReinitialize
                            validationSchema={AddEventSchema}
                            onSubmit={onFormSubmit}
                        >
                            {({ handleChange, handleBlur, setFieldValue, handleSubmit, values, errors, touched }) => (
                                <>
                                    <CustomInputText
                                        error={errors.title}
                                        touched={touched.title}
                                        placeholder=''
                                        label={'Title'}
                                        onChangeText={handleChange('title')}
                                        onBlur={handleBlur('title')}
                                    />
                                    <CustomInputText
                                        error={errors.description}
                                        touched={touched.description}
                                        placeholder=''
                                        label={'Description'}
                                        onChangeText={handleChange('description')}
                                        onBlur={handleBlur('description')}
                                    />
                                    <CustomInputText
                                        error={errors.location}
                                        touched={touched.location}
                                        placeholder=''
                                        label={'Location'}
                                        onChangeText={handleChange('location')}
                                        onBlur={handleBlur('location')}
                                    />
                                    <DatePicker
                                        onSelect={(date) => setFieldValue('date', date)}
                                        error={errors.date}
                                        value={values.date}
                                    />
                                    <SingleImageUpload
                                        value={values.image}
                                        error={errors.image}
                                        touched={touched.image}
                                        onFileSelect={(image: object) => setFieldValue('image', image)}
                                    />
                                    <CheckBox
                                        title='Private'
                                        checked={values.isPrivate}
                                        onIconPress={() => {
                                            setFieldValue('isPrivate', !values.isPrivate);
                                        }}
                                    />

                                    <SectionedMultiSelect
                                        items={items}
                                        uniqueKey="id"
                                        subKey="children"
                                        selectText="Choose categories"
                                        showDropDowns={false}
                                        readOnlyHeadings={true}
                                        onSelectedItemsChange={(items) => {
                                            console.log('items', items);
                                            setFieldValue('categories', items)
                                        }}
                                        selectedItems={values.categories ? values.categories : []}
                                        styles={{
                                            button: {backgroundColor: '#1999CE'},
                                            // selectToggleText: {color: 'red'},
                                            modalWrapper: {paddingVertical: 100},
                                        }}
                                    />

                                    <Button
                                        title={"Submit"}
                                        onPress={() => handleSubmit()}
                                        style={{marginHorizontal: 10, marginVertical: 20}}
                                        loading={loading}
                                    />
                                </>
                            )}
                        </Formik>
                    </Content>
                </Container>
            </ScrollView>
        </SafeAreaView>
    )
};

export default AddEvent;
