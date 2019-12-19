import React, { Component } from 'react'
import {
  createStackNavigator,
} from 'react-navigation-stack'
import { Animated, Easing, Platform } from 'react-native';

import ViewUserProfile from './userProfile'
import EditUserProfile from './EditUserProfile'
let SlideFromRight = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [width, 0],
  })

  return { transform: [{ translateX }] }
};

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const height = layout.initHeight;
      const { index, route } = scene
      const params = route.params || {}; // <- That's new
      const transition = params.transition || 'default'; // <- That's new
      return {
        default: SlideFromRight(index, position, width),
      }[transition];
    },
  }
}
const ProfileStack = createStackNavigator(
  {
    ViewUserProfile: { screen: ViewUserProfile },
    EditUserProfile: { screen: EditUserProfile },
  },
  {
    initialRouteName: 'ViewUserProfile',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    transitionConfig: TransitionConfiguration,
  })
ProfileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === "EditUserProfile") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }
  return {
    tabBarVisible
  };
};
export default ProfileStack;