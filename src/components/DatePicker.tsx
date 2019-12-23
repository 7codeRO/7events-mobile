import {TouchableHighlight} from "react-native-gesture-handler";
import {Col, Row} from "native-base";
import {StyleSheet, Text} from "react-native";
import React, {useState} from "react";
import DateTimePicker, {DateTimePickerProps} from "react-native-modal-datetime-picker";

type Props = {
    error: any;
    value: Date;
    onSelect: (date: Date) => void;
} & Omit<DateTimePickerProps, 'onConfirm' | 'onCancel'>

const DatePicker = (props: Props) => {
    const [touched, isTouched] = useState(false);
    const [visibleDate, isVisibleDate] = useState(false);

    const onConfirmDate = (date) => {
        isVisibleDate(false);
        props.onSelect(date);
    };

    const onCancelDate = () => {
        isVisibleDate(false);
    };

    const openPicker = () => {
        isVisibleDate(true);
        isTouched(true);
    }

    const {value, error, ...restProps} = props;
    return (
        <TouchableHighlight onPress={openPicker} underlayColor="white">
            <Row style={style.row}>
                <Col style={{width: 100}}><Text style={[style.text, (error && touched) ? style.textError: null]}>Date</Text></Col>
                <Col>
                    <Text style={[style.text, (error && touched) ? style.textError: null]}>{value ? value.toLocaleString() : 'Click to select date'}</Text>
                    <DateTimePicker
                        onConfirm={onConfirmDate}
                        onCancel={onCancelDate}
                        isVisible={visibleDate}
                        {...restProps}
                    />
                </Col>
            </Row>
        </TouchableHighlight>
    )
};


const style = StyleSheet.create({
    row: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10
    },
    text: {
        fontSize: 16,
    },
    textError: {
        color: 'red'
    }
});



DatePicker.defaultProps = {
    is24Hour: true,
    mode: 'datetime'
};

export default DatePicker;
