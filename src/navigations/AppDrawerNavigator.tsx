import {createDrawerNavigator} from "react-navigation-drawer";
import React from "react";
import Icon from '@expo/vector-icons/Ionicons';
import ProfileStackNavigator from "./ProfileStackNavigator";
import DrawerNavigation from "../components/DrawerNavigation";
import EventStackNavigator from "./EventsStackNavigator";
import Logout from "../screens/Logout";
import {createStackNavigator} from "react-navigation-stack";
import Events from "../screens/Events/Events";
import SingleEvent from "../screens/Events/SingleEvent";

const AppDrawerNavigator = createDrawerNavigator({
    Events: {
        screen: EventStackNavigator,
        navigationOptions: ({navigation}) => ({
            title: 'Events',
            drawerIcon: ({tintColor}) => (
                <Icon name="md-albums" style={{fontSize: 28}} color={tintColor}/>
            )
        })
    },
    Profile: {
        screen: ProfileStackNavigator,
        navigationOptions: ({navigation}) => ({
            title: 'Profile',
            drawerIcon: ({tintColor}) => (
                <Icon name="md-body" style={{fontSize: 28}} color={tintColor}/>
            )
        })
    },
    Logout: {
        screen: Logout,
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
