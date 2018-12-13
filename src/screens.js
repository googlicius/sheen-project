// this file will hold the screen configuration for React Native Navigation.
import { Navigation } from 'react-native-navigation';

import Initializing from './Initializing';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';

export function registerScreens() {
    Navigation.registerComponent('Initializing', () => Initializing);
    Navigation.registerComponent('SignUp', () => SignUp);
    Navigation.registerComponent('SignIn', () => SignIn);
    Navigation.registerComponent('Home', () => Home);
}