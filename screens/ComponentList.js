import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import * as fromComponents from './../components';

export class ComponentList extends Component {
    static navigationOptions = {
        title: "List of Components"
    }
    dataArray = [
        {
            text: "Empty",
            onPress: () => this.viewComponentDetail(null, { title: "May be empty" })
        },
        {
            text: "Card List",
            onPress: () => this.viewComponentDetail(<fromComponents.CardList />, { title: "Card List" })
        }
    ];

    /**
     * Navigate to detail with given component
     * 
     * @param {JSX.Element} element
     * @param {Object} params
     */
    viewComponentDetail = (element, params = {}) => {
        this.props.navigation.navigate('ComponentDetail', { ...params, children: element })
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <List dataArray={this.dataArray} renderRow={item => (
                        <ListItem onPress={item.onPress || null}>
                            <Text>{item.text}</Text>
                        </ListItem>
                    )} />
                </Content>
            </Container>
        )
    }
}