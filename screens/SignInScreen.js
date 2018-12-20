import React, { Component } from 'react';
import { AsyncStorage, StyleSheet } from 'react-native';
import { Container, Content, Input, Text, Button, Label, Item, Card, CardItem, Body, Thumbnail } from 'native-base';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import { Grid, Col } from 'react-native-easy-grid';
import axios from './../axios';

export class SignInScreen extends Component {
    state = {
        email: '',
        password: ''
    }

    static navigationOptions = {
        header: null,
        headerMode: 'none'
        // title: "Please sign in"
    }

    onChangeText = (key, value) => {
        this.setState({ [key]: value });
    }

    signIn = async () => {
        if (!this.state.email.trim()) {
            alert("You must enter your email");
            return;
        }
        await AsyncStorage.setItem('userToken', this.state.email);
        axios.post('/graph-api/user-word?query={ longtermWords { word wordtype wordEnVi { word meaning id } } }').then(response => {
            console.log(response)
        }, error => {
            console.log(error);
            console.log(error.message);
        });
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: "#eee" }}>
                <Content padder contentContainerStyle={{ paddingTop: 50 }}>
                    <Card>
                        <CardItem header bordered>
                            <Thumbnail source={{ uri: "https://nativebase.io/assets/img/front-page-icon.png" }} />
                            <Text style={{ fontSize: 20 }}> ĐĂNG NHẬP</Text>
                        </CardItem>
                        <CardItem>
                            <Body style={{ flexDirection: "row" }}>
                                <Grid>
                                    <Col style={{ marginRight: 10 }}>
                                        <Button block style={{ ...styles.socialBtn, backgroundColor: "#4285F4" }} onPress={() => { }}>
                                            <VectorIcon size={25} color="white" name="google" />
                                            <Text>Google</Text>
                                        </Button>
                                    </Col>

                                    <Col>
                                        <Button block style={{ ...styles.socialBtn, backgroundColor: "#3b5998" }} onPress={() => { }}>
                                            <VectorIcon size={25} color="white" name="facebook" />
                                            <Text>Facebook</Text>
                                        </Button>
                                    </Col>
                                </Grid>
                            </Body>
                        </CardItem>
                        <CardItem style={{ justifyContent: "center" }}>
                            <Text style={{ color: "#ccc", fontSize: 12 }}>───────────  HOẶC  ───────────</Text>
                        </CardItem>
                        <CardItem>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input autoCapitalize="none" onChangeText={text => this.onChangeText('email', text)} />
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input secureTextEntry={true} autoCapitalize="none" onChangeText={text => this.onChangeText('password', text)} />
                            </Item>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Button block onPress={this.signIn} style={{ backgroundColor: "#64a68d" }}>
                                    <Text>Đăng nhập</Text>
                                </Button>
                                <Button block transparent>
                                    <Text onPress={() => alert("Form đăng ký")}>Đăng ký</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    socialBtn: {
        justifyContent: "center"
    }
})