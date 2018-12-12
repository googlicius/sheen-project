import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native-ui-lib';
import { Navigation, Options } from 'react-native-navigation';

export default class PostList extends PureComponent {

    static propTypes = {
        navigator: PropTypes.object,
        componentId: PropTypes.string
    }

    /**
     * @type {Options}
     */
    static get options() {
        return {
            topBar: {
                rightButtons: [{
                    id: 'addPost',
                    text: 'Add'
                }]

            }
        }
    }

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    pushViewPostScreen = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "Sheen.ViewPost",
                passProps: {
                    text: "Some props that we are passing"
                },
                options: {
                    topBar: {
                        title: {
                            text: "Post1"
                        }
                    }
                }
            }
        })
    }

    navigationButtonPressed = ({ buttonId }) => {
        if (buttonId == 'addPost') {
            this.showAddPostModal();
        }
    }

    showAddPostModal = () => {
        Navigation.showModal({
            stack: {
                children: [{
                    component: {
                        name: 'Sheen.AddPost'
                    }
                }]
            }
        });
    }

    render() {
        return (
            <View flex center bg-blue60>
                <Text onPress={this.pushViewPostScreen}>Posts List Screen</Text>
            </View>
        )
    }
}