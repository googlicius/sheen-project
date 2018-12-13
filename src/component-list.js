import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Options, Navigation } from 'react-native-navigation';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import AwesomeComponent from './components/awesome-component';
import FormComponent from './components/form';

export default class ComponentList extends Component {
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
                    text: 'Native Base Components'
                }
            }
        }
    }

    viewComponentDetail = (component) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "ComponentDetail",
                passProps: {
                    topBar_title: "This is component detail",
                    children: component
                }
            }
        })
    }

    render() {
        var items = [
            {
                text: 'Simon Mignolet',
                onPress: () => this.viewComponentDetail(<AwesomeComponent topBar_title="Simon Mignolet" />)
            },
            {
                text: 'Form (Floating label)',
                onPress: () => this.viewComponentDetail(<FormComponent topBar_title="Form (Floating label)" />)
            },
            {
                text: 'Dejan Lovren'
            },
            {
                text: 'Mama Sakho'
            },
            {
                text: 'Emre Can'
            },
            {
                text: 'Sheen Item'
            }
        ];
        return (
            <Container>
                <Content>
                    <List dataArray={items} renderRow={item => (
                        <ListItem onPress={item.onPress || null}>
                            <Text>{item.text}</Text>
                        </ListItem>
                    )}>
                    </List>
                </Content>
            </Container>
        )
    }
}