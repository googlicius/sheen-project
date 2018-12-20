import React, { Component } from 'react';
import { Text } from 'native-base';

export class ComponentDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Untitled')
        }
    }

    render() {
        return this.props.navigation.getParam('children') || <Text>Empty!</Text>;
    }
}