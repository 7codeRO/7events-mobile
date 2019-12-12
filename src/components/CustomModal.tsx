import {Text, View, StyleSheet} from "react-native";
import {Button} from "native-base";
import Modal from "react-native-modal";
import React from "react";

type Props = {
    open: boolean;
    onClose: () => void;
    children?: any
}

const CustomModal = (props: Props) => {
    return (
        <Modal isVisible={props.open}>
            <View style={style.wrapper} >
                <View style={style.content}>
                    {props.children}
                </View>
                <Button
                    block
                    small
                    onPress={props.onClose}
                    style={{display: 'flex', justifyContent: 'center'}}
                >
                    <Text style={{color: '#fff'}}>Ok</Text>
                </Button>
            </View>
        </Modal>
    );
};

const style = StyleSheet.create({
    content: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    wrapper: {
        padding: 20,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    button: {
        color: '#fff'
    }
})

export default CustomModal;
