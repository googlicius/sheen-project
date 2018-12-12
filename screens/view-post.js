import React, { PureComponent } from 'react';
import { View, Text } from 'react-native-ui-lib';

export default class ViewPost extends PureComponent {
    render() {
        return (
            <View flex center bg-blue70>
                <Text text16>View Post</Text>
            </View>
        )
    }
}