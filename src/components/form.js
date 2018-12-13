import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

export default class FormComponent extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input autoCapitalize="none" />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Pasword</Label>
                            <Input autoCapitalize="none" secureTextEntry={true} />
                        </Item>
                        <Button style={{ margin: 10, marginTop: 40 }} block primary>
                            <Text>Sign In</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}