import React, { Component } from 'react'
import {
  createStackNavigator,
} from 'react-navigation-stack'
import UserProfile from './userProfile'
export default createStackNavigator({
    UserProfile: {
      screen: UserProfile,
      navigationOptions: {
        title: 'About the App'
      }
    }
})