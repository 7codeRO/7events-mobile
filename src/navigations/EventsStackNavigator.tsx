import {createStackNavigator} from "react-navigation-stack";
import React from "react";
import Icon from '@expo/vector-icons/Ionicons';
import Events from "../screens/Events/Events";
import SingleEvent from "../screens/Events/SingleEvent";
import AddEvent from "../screens/Events/AddEvent";

const EventStackNavigator = createStackNavigator(
    {
        Events: {
            screen: Events,
            navigationOptions: ({ navigation }) => ({
                title: 'Events',
                headerRight: (
                    <Icon
                        style={{ paddingRight: 10 }}
                        onPress={() => navigation.navigate('AddEvent')}
                        name="md-add-circle-outline"
                        color={'#fff'}
                        size={30}
                    />
                )
            })
        },
        AddEvent: {
            screen: AddEvent,
            navigationOptions: ({ navigation }) => ({
                title: 'Add new event',
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.goBack()}
                        name="md-arrow-back"
                        color={"#fff"}
                        size={30}
                    />
                )
            })
        },
        SingleEvent: {
            screen: SingleEvent,
            navigationOptions: ({ navigation }) => ({
                title: `Event`,
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.goBack()}
                        name="md-arrow-back"
                        color={"#fff"}
                        size={30}
                    />
                )
            })
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#1999CE'
                },
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                        color={"#fff"}
                    />
                ),
                title: 'Events'
            };
        }
    }
);

export default EventStackNavigator;
