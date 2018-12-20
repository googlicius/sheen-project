import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Text, Card, CardItem, Body, Left, Thumbnail, Button } from 'native-base';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import icoMoonConfig from './selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'LineAwesome', 'line-awesome.ttf');

export class CardList extends Component {
    render() {
        return (
            <Container>
                <Content contentContainerStyle={{ backgroundColor: "#f8f8f8" }}>
                    <Card>
                        <CardItem header bordered>
                            <Text>Good New</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>This is my first card</Text>
                                <Text>This is second line of text</Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text>Social Applications</Text>
                        </CardItem>
                        <CardItem>
                            <VectorIcon.Button name="facebook" backgroundColor="#3b5998" onPress={() => { }}>
                                Login with Facebook
                            </VectorIcon.Button>
                        </CardItem>
                        <CardItem>
                            <VectorIcon.Button name="google" backgroundColor="#4285F4" onPress={() => { }}>
                                Login with Google
                            </VectorIcon.Button>
                        </CardItem>
                        <CardItem>
                            <VectorIcon.Button name="github" backgroundColor="#CCC" color="#000" onPress={() => { }}>
                                Login with Github
                            </VectorIcon.Button>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: "https://nativebase.io/assets/img/front-page-icon.png" }} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require("./ckNko8BBRIGjBKsR1GV9_Banner.jpg")} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Text><VectorIcon name="thumbs-up" /> 12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Text><VectorIcon name="comments" /> 59 Comments</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}