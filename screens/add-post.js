import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native-ui-lib';
import { Navigation, Options } from 'react-native-navigation';

export default class AddPost extends PureComponent {

    static propTypes = {
        componentId: PropTypes.string
    }

    /**
     * @type {Options}
     */
    static get options() {
        return {
            topBar: {
                title: {
                    text: "Add post"
                },
                rightButtons: [{
                    text: "Save",
                    id: "saveBtn",
                    enabled: false
                }],
                leftButtons: [{
                    text: "Cancel",
                    id: "cancelBtn"
                }]
            }
        }
    }

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    navigationButtonPressed = ({ buttonId }) => {
        switch (buttonId) {
            case 'cancelBtn':
                Navigation.dismissModal(this.props.componentId);
                break;

            case 'saveBtn':
                this.onSavePressed()
        }
    }

    onSavePressed = () => {
        Navigation.dismissModal(this.props.componentId);
        //In here, we will send a request for saving the post.
        setTimeout(() => {
            alert('post was saved');
        }, 1000);
    }

    onChangeText = text => {
        Navigation.mergeOptions(this.props.componentId, {
            topBar: {
                rightButtons: [{
                    id: 'saveBtn',
                    text: 'Save',
                    enabled: !!text
                }]
            }
        })
    }

    render() {
        return (
            <View flex center bg-green60>
                <TextInput 
                    placeholder="Start writing to enable the save btn"
                    onChangeText={this.onChangeText}
                    hideUnderline />
            </View>
        )
    }
}