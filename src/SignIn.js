import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button, Text } from 'native-base';
import { USER_KEY } from './config';
import { goHome } from './navigation';
import GGSignInBtn from './components/gg-signin-btn';

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
            <Container>
                <Content contentContainerStyle={{flex:1,justifyContent: 'center'}}>
                    <View>
                        <Text style={styles.login_title}>ĐĂNG NHẬP</Text>
                    </View>
                    <GGSignInBtn />
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={val => this.onChangeText('username', val)}
                            />
                        </Item>

                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                                onChangeText={val => this.onChangeText('password', val)}
                            />
                        </Item>
                        <Button style={{ margin: 10, marginTop: 40 }} block primary onPress={this.signIn}>
                            <Text>Sign In</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
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
        alignItems: 'center',
        // flexDirection: 'row'
    },
    login_title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center'
    },
    eke: {
        
    }
})