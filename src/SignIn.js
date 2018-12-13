import React, { Component } from 'react';
// import { View, Text, TextInput, Button } from 'react-native-ui-lib';
import { View, Text, TextInput, Button, AsyncStorage, StyleSheet } from 'react-native';
import { USER_KEY } from './config';
import { goHome } from './navigation';

export default class SignIn extends Component {
    state = {
        username: '', password: ''
    }

    onChangeText = (type, value) => {
        this.setState({ [type]: value });
    }

    signIn = async () => {
        const { username, password } = this.state;
        try {
            // login with provider
            const user = await AsyncStorage.setItem(USER_KEY, username)
            console.log('user successfully signed in!', user)
            goHome();
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('username', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <Button
                    title='Sign In'
                    onPress={this.signIn}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        fontSize: 18,
        fontWeight: '500',
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        color: 'white',
        padding: 8,
        borderRadius: 14
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})