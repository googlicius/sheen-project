import React, { Component } from 'react';
import { AsyncStorage, StyleSheet } from 'react-native';
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
                    <Button block light onPress={this._logOut} style={styles.button}>
                        <Text>Log out</Text>
                    </Button>
                    <Button block onPress={() => this.props.navigation.navigate('ComponentList')} style={styles.button}>
                        <Text>List of components</Text>
                    </Button>

                    <Button block success onPress={() => this.props.navigation.navigate('AmazonUIClone')} style={{ ...styles.button, backgroundColor: "#3a455c" }}>
                        <Text>Amazon UI CLone</Text>
                    </Button>

                    <Button block dark onPress={() => this.props.navigation.openDrawer()} style={{ ...styles.button }}>
                        <Text>Open Drawer</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10
    }
})