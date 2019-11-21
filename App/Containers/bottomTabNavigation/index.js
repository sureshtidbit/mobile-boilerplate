import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome';
import FTRIcon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialIcons'
import UserProfile from '../profile/userProfile'
import HomeScreen from '../home/index'
import {
    createAppContainer,
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';

import { createBottomTabNavigator } from 'react-navigation-tabs';

const CreateBottomTabNavigator = createBottomTabNavigator({
    HomeView: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-home" color={tintColor} size={28} />
            )
        }
    },
    Organizations: {
        screen: UserProfile,
        navigationOptions: {
            tabBarLabel: 'Organization',
            tabBarIcon: ({ tintColor }) => (
                <FIcon name="sitemap" color={tintColor} size={28} />
            )
        }
    },
    UserProfile: {
        screen: UserProfile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <FIcon name="user" color={tintColor} size={28} />
            )
        }
    },
}, {
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#ff5733',
        inactiveTintColor: '#ABABAB',
        style: {
            backgroundColor: '#FFF',
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5,
            borderTopColor: '#f2f2f2',
            borderTopWidth: 1
        }
    }
})

export default createStackNavigator(
    {
        DashboardTabNavigator: CreateBottomTabNavigator,
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);
