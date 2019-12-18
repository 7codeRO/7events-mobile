import React, {useState} from "react";
import {Container, Content} from "native-base";
import {Formik} from "formik";
import * as Yup from 'yup';
import CustomInputText from "./components/CustomInputText";
import {Button} from "react-native-elements";
import DatePicker from "../../components/DatePicker";
import SingleImageUpload from "../../components/SingleImageUpload";

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

const AddEvent = () => {
    const [loading, isLoading] = useState(false);

    const onFormSubmit = (values) => {
        isLoading(true);
        console.log(values);
        setTimeout(() => {
            isLoading(false);
        }, 3000);
    };

    return (
        <Container>
            <Content>
                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        date: null,
                        image: null,
                        location: ''
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
    )
};

export default AddEvent;
