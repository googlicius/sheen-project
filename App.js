/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import * as fromScreens from './screens';
import CustomDrawerContent from './screens/AmazonUIClone/components/CustomDrawerContent';


const AmazonDrawer = createDrawerNavigator({
  Home: fromScreens.AmazonUICloneScreen
}, {
  drawerPosition: 'left',
  contentComponent: CustomDrawerContent
})

const AppStack = createStackNavigator({
  Home: fromScreens.HomeScreen,
  ComponentList: fromScreens.ComponentList,
  ComponentDetail: fromScreens.ComponentDetail,
  AmazonUIClone: {
    screen: AmazonDrawer,
    navigationOptions: {
      header: null
    }
  }
});

const AuthStack = createStackNavigator({
  SignIn: fromScreens.SignInScreen
});

const AppDrawer = createDrawerNavigator({
  Home: fromScreens.HomeScreen,
}, {
  drawerPosition: 'left',
  contentComponent: CustomDrawerContent
});

export default createAppContainer(createSwitchNavigator({
  App: AppStack,
  Auth: AuthStack,
  Loading: fromScreens.AuthLoadingScreen
}, {
    initialRouteName: 'Loading'
  }
));