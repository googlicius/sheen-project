import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native-ui-lib';
import { Navigation } from 'react-native-navigation';

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        loading: false
    }

    static propTypes = {
        navigator: PropTypes.object,
        componentId: PropTypes.string
    }

    pushScreen = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "Sheen.Screen1",
                options: {
                    topBar: {
                        title: {
                            text: "Screen1"
                        }
                    }
                }
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Sheen!</Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    This projects comes equipped with: {'\n'}
                    React-Native-Navigation {'\n'}
                    React-Native-Ui-lib {'\n'}
                    esling configuration
                </Text>
                <Button label="Push screen" onPress={this.pushScreen} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 12,
    },
});