import {ActivityIndicator, View} from "react-native";
import React from "react";

const LoadingComponent = () => (
    <View style={{flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="black" />
    </View>
);

export default LoadingComponent;
