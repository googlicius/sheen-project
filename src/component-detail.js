import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Options, Navigation } from 'react-native-navigation';

export default class ComponentDetail extends Component {
    static propTypes = {
        topBar_title: PropTypes.string,
        componentId: PropTypes.string,
        children: PropTypes.object
    }

    /**
     * @type {Options}
     */
    static get options() {
        return {
            topBar: {
                title: {
                    text: ""
                }
            }
        }
    }
    
    componentDidMount() {
        const { topBar_title } = this.props.children.props;
        Navigation.mergeOptions(this.props.componentId, {
            topBar: {
                title: {
                    text: topBar_title || "Untitled"
                }
            }
        })
    }

    render() {
        return this.props.children
    }
}