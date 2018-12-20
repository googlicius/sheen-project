import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';

export class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home"
    }
    _logOut = async () => {
        await AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('Auth');
    }
    render() {
        return (
            <Container>
                <Content padder>
                    <Button block light onPress={this._logOut}>
                        <Text>Log out</Text>
                    </Button>
                    <Button block onPress={() => this.props.navigation.navigate('ComponentList')}>
                        <Text>List of components</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}