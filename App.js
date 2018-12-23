/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import * as fromScreens from './screens';
// import { mapNavigationStateParamsToProps } from './pure-func';

const AppStack = createStackNavigator({
  Home: fromScreens.HomeScreen,
  ComponentList: fromScreens.ComponentList,
  ComponentDetail: fromScreens.ComponentDetail,
  AmazonUIClone: fromScreens.AmazonUICloneScreen
})

const AuthStack = createStackNavigator({
  SignIn: fromScreens.SignInScreen
});

export default createAppContainer(createSwitchNavigator({
  App: AppStack,
  Auth: AuthStack,
  Loading: fromScreens.AuthLoadingScreen
}, {
    initialRouteName: 'Loading'
  }
));