import {Image, Text, View} from "react-native";
import {TouchableHighlight} from "react-native-gesture-handler";
import React from "react";
import {StyleSheet} from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";


type Props = {
    value: any,
    error: any;
    touched: any;
    onFileSelect: (image: object) => void
}

const SingleImageUpload = (props: Props) => {
    const openFilePicker = async () => {
        const {status} = await Permissions.getAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL)

        if (status !== 'granted') {
            await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL)
                .then(data => console.log('data', data))
                .catch(err => console.log('err', err))
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) {
            props.onFileSelect(result);
        }
    };

    const {error, value, touched} = props;

    return (
        <TouchableHighlight onPress={() => openFilePicker()} underlayColor="white">
            <View style={[style.dropzone, (error && touched) ? style.imageError: null]}>
                {value && <Image source={{ uri: value.uri }} style={{width: '100%', resizeMode: 'contain', height: '100%'}}/> }
                {!value && !(error && touched) && <Text style={{paddingVertical: 40}}>Upload image</Text>}
                {error && touched && <Text style={{paddingVertical: 40, color: 'red'}}>Upload image</Text>}
            </View>
        </TouchableHighlight>
    )
};


const style = StyleSheet.create({
    dropzone: {
        marginHorizontal: 10,
        display: 'flex',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#ccc",
        justifyContent: 'center',
        borderRadius: 3
    },
    imageError: {
        borderColor: 'red',
    },
});

export default SingleImageUpload;

