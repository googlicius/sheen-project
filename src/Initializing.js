// this file will hold the initialization logic and display a message to the user that the app is loading.
import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import { AsyncStorage } from 'react-native';
import { goHome, goToAuth } from './navigation';
import { USER_KEY } from './config';

export default class Initializing extends React.Component {
    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem(USER_KEY);
            if(user) {
                goHome();
            }
            else {
                goToAuth();
            }
        } catch (error) {
            // console.log(error);
            goToAuth();
        }
    }

    render() {
        return (
            <View flex center>
                <Text text30>Loading...</Text>
            </View>
        );
    }
}