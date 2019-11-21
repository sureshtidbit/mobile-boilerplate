import React, { Component } from 'react'
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import AppUserProfile from '../App/Containers/profile/index'
import SideDrawer from '../App/Containers/sideDrawer'
import HomeBottomTabBar from '../App/Containers/bottomTabNavigation/index'
import IsLoggedIn from '../App/Containers/Authentication/index'
const AppDrawerNavigator = createDrawerNavigator({
    Home: { screen: HomeBottomTabBar }
}, {
    contentComponent: SideDrawer,
    drawerWidth: 300, headerMode: 'none',
    overlayColor: '#0FFFFF',
    drawerType: 'front',
    gesturesEnabled: true
})
const AppSwitchNav = createSwitchNavigator({
    Home: { screen: AppDrawerNavigator },
    IsLoggedIn: { screen: IsLoggedIn }
},
    {
        initialRouteName: 'IsLoggedIn',
    }
)

export default createAppContainer(AppSwitchNav);