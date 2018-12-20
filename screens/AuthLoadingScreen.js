import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View, StyleSheet } from 'react-native';

export class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const token = await AsyncStorage.getItem('userToke');

        this.props.navigation.navigate(token ? 'App' : 'Auth');
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
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
});