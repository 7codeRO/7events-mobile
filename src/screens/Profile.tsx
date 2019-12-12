import React, {Component} from "react";
import {Button, SafeAreaView, Text, View} from "react-native";

const Profile = (props: any) => (
    <SafeAreaView style={{flex: 1}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile</Text>
            <Button title="Go To Profile 2" onPress={() => props.navigation.navigate('SubProfile')} />
        </View>
    </SafeAreaView>
);

export default Profile;
