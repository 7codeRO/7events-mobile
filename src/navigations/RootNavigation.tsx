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
import WelcomeScreen from "../screens/WelcomeScreen";
import AppDrawerNavigator from "./AppDrawerNavigator";

const AppSwitchNavigator = createSwitchNavigator({
    Welcome: { screen: WelcomeScreen },
    Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
