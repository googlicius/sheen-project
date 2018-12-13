import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';

export default class SignUp extends Component {
    state = {
        username: '', password: '', email: '', phone_number: ''
    }

    onChangeText = (key, value) => {
        this.setState({ [key]: value });
    }

    signUp = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    autoCapitalize="none"
                    placeholderTextColor="white"
                    onChangeText={val => this.onChangeText('username', val)}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('email', val)}
                />
                <Button
                    title='Sign Up'
                    onPress={this.signUp}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})