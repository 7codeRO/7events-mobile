import {createStackNavigator} from "react-navigation-stack";
import React from "react";
import Icon from '@expo/vector-icons/Ionicons';
import Events from "../screens/Events/Events";
import SingleEvent from "../screens/Events/SingleEvent";

const EventStackNavigator = createStackNavigator(
    {
        Events: Events,
        SingleEvent: {
            screen: SingleEvent,
            navigationOptions: ({ navigation }) => ({
                title: `Event`,
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.goBack()}
                        name="md-arrow-back"
                        size={30}
                    />
                )
            })
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                ),
                title: 'Events'
            };
        }
    }
);

export default EventStackNavigator;
