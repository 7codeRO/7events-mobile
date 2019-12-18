import {Input, InputProps} from "react-native-elements";
import React from "react";
import {StyleSheet} from "react-native";
import {Icon} from "native-base";

type Props = {
    error: any;
    touched: any;
} & InputProps;

const CustomInputText = (props: Props) => {

    const getInputIcon = (error: boolean) => {
        if (error) {
            return <Icon name='close-circle' style={{color: 'red'}}/>
        }
        return <Icon name='checkmark-circle' style={{color: 'green'}} />;
    };

    const getInputBorder = (error: boolean) => {
        if (error) {
            return style.inputError;
        }

        return style.inputSuccess;
    }

    const {touched, error, ...restProps} = props;

    return (
        <Input
            autoCapitalize='none'
            containerStyle={style.input}
            inputContainerStyle={touched && getInputBorder(!!error)}
            labelStyle={touched && error && {color: 'red'}}
            rightIcon={touched ? getInputIcon(!!error) : null}
            errorStyle={{ color: 'red' }}
            errorMessage={touched && error}
            {...restProps}
        />
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

export default CustomInputText;
