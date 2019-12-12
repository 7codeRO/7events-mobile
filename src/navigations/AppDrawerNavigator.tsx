import {createDrawerNavigator} from "react-navigation-drawer";
import React from "react";
import Icon from '@expo/vector-icons/Ionicons';
import ProfileStackNavigator from "./ProfileStackNavigator";
import DrawerNavigation from "../components/DrawerNavigation";
import EventStackNavigator from "./EventsStackNavigator";

const AppDrawerNavigator = createDrawerNavigator({
    Profile: {
        screen: ProfileStackNavigator,
        navigationOptions: ({navigation}) => ({
            title: 'Profile',
            drawerIcon: ({tintColor}) => (
                <Icon name="md-body" style={{fontSize: 28}} color={tintColor}/>
            )
        })
    },
    Events: {
        screen: EventStackNavigator,
        navigationOptions: ({navigation}) => ({
            title: 'Events',
            drawerIcon: ({tintColor}) => (
                <Icon name="md-albums" style={{fontSize: 28}} color={tintColor}/>
            )
        })
    },
}, {
    contentComponent: DrawerNavigation,
    contentOptions: {
        activeTintColor :'#ffffff',
        inactiveTintColor :'#1999CE',
        activeBackgroundColor :'#1999CE',
        inactiveBackgroundColor :'#ffffff',
    }
});

export default AppDrawerNavigator;
