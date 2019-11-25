import React, { Component } from 'react'
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Animated, Easing, Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AppUserProfile from '../App/Containers/profile/index'
import SideDrawer from '../App/Containers/sideDrawer'
import HomeBottomTabBar from '../App/Containers/bottomTabNavigation/index'
import IsLoggedIn from '../App/Containers/Authentication/index'
import AppSplashScreen from '../App/Containers/Authentication/authRoutes'
let SlideFromRight = (index, position, width) => {
    const translateX = position.interpolate({
      inputRange: [index - 1, index],
      outputRange: [width, 0],
    })
  
    return { transform: [ { translateX } ] }
  };
  
  const TransitionConfiguration = () => {
    return {
      transitionSpec: {
        duration: 750,
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
function getActiveRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getActiveRouteName(route);
    }
    return route.routeName;
}
const AppDrawerNavigator = createDrawerNavigator({
    Home: { screen: HomeBottomTabBar }
}, {
    contentComponent: SideDrawer,
    drawerWidth: 300, headerMode: 'none',
    overlayColor: '#0FFFFF',
    drawerType: 'front',
    gesturesEnabled: true,
    transitionConfig: TransitionConfiguration,
})
const AppSwitchNav = createSwitchNavigator({
    Home: { screen: AppDrawerNavigator },
    IsLoggedIn: { screen: AppSplashScreen }
},
    {
        initialRouteName: 'IsLoggedIn',
        transitionConfig: TransitionConfiguration,
    }
)
const AppContainer = createAppContainer(AppSwitchNav);
// export default createAppContainer(AppSwitchNav);
export default () => (
    <AppContainer
        onNavigationStateChange={(prevState, currentState, action) => {
            const currentRouteName = getActiveRouteName(currentState);
            const previousRouteName = getActiveRouteName(prevState);

            if (previousRouteName !== currentRouteName) {
                console.log('=============>>>>>>>>>>.', previousRouteName, currentRouteName)
            }
        }}
    />
);