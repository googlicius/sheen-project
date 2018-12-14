// this file will hold the component that renders if the user is logged in.
import React from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Options, Navigation } from 'react-native-navigation';
import { GoogleSignin } from 'react-native-google-signin';
import { USER_KEY } from './config';
import { goToAuth } from './navigation';

export default class Home extends React.PureComponent {
    static propTypes = {
        componentId: PropTypes.string
    }

    /**
     * @type {Options}
     */
    static get options() {
        return {
            topBar: {
                title: {
                    text: 'Home'
                }
            }
        }
    }

    isGoogleSignedIn = () => {
        return GoogleSignin.isSignedIn();
    }

    logoutGoogle = async () => {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
    }

    logout = async () => {
        try {
            await AsyncStorage.removeItem(USER_KEY);
            if (await this.isGoogleSignedIn()) {
                await this.logoutGoogle();
                console.log("Google has signed out");
            }
            goToAuth();
        } catch (error) {
            console.log('error signing out...: ', error);
        }
    }

    viewNextScreen = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'ComponentList'
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello from Home screen.</Text>
                <Button
                    onPress={this.logout}
                    title="Sign Out"
                />
                <Button
                    onPress={this.viewNextScreen}
                    title="View Native Base Components"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})