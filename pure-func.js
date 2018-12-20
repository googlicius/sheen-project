import React, { Component } from 'react';

/**
 * High order component that map SomeComponent's `state.params` to it's `props`
 * @param {Component} SomeComponent
 * @returns {Component}
 * @see https://github.com/react-navigation/react-navigation/issues/935#issuecomment-292179677
 */
export const mapNavigationStateParamsToProps = (SomeComponent) => {
    return class extends Component {
        static navigationOptions = SomeComponent.navigationOptions; // better use hoist-non-react-statics
        render() {
            const { navigation: { state: { params } } } = this.props
            return <SomeComponent {...params} {...this.props} />
        }
    }
}