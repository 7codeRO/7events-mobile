import {createStackNavigator} from "react-navigation-stack";
import Profile from "../screens/Profile";
import React from "react";
import Icon from '@expo/vector-icons/Ionicons';
import SubProfile from "../screens/SubProfile";

const ProfileStackNavigator = createStackNavigator(
    {
        Profile: {
            screen: Profile
        },
        SubProfile: {
            screen: SubProfile,
            navigationOptions: ({ navigation }) => ({
                title: `SubProfile`,
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.goBack()}
                        name="md-arrow-back"
                        size={30}
                    />
                )
            })
        },
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
                headerTitle: 'Profile'
            };
        }
    }
);
export default ProfileStackNavigator;
