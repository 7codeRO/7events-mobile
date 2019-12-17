import React  from 'react';
/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Profile
 *          - Settings
 *          - Categories (CategoriesTabNavigator)
 *             - Income
 *             - Expenses
 *
 */

import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import Login from "../screens/Auth/Login";
import AppDrawerNavigator from "./AppDrawerNavigator";
import Register from "../screens/Auth/Register";
import Loading from "../screens/Loading";

const AppSwitchNavigator = createSwitchNavigator({
    // Loading: {screen: Loading},
    Dashboard: { screen: AppDrawerNavigator },
    Login: { screen: Login },
    Register: { screen: Register },
});


const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
