import React from 'react';
import { FlatList } from 'react-native';
import { Container, Content, Text, ListItem } from 'native-base';

const CustomDrawerContent = (props) => {
    console.log("CustomDrawerContent")
    return (
        <Container>
            <Content>
                <FlatList data={['Home', 'Shop by Category', 'Your wish list', 'Today\' deals']} renderItem={({ item }) => (
                    <ListItem>
                        <Text>{item}</Text>
                    </ListItem>
                )} keyExtractor={( item, index) => index.toString()} />
            </Content>
        </Container>
    )
}

export default CustomDrawerContent;