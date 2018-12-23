import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Left, Body, Right, Header, Icon, Text, View, Button, Item, Input, Card, CardItem } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import RecommendedCardItem from './components/RecommendedCardItem';

export class AmazonUICloneScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <Container>
                <Header androidStatusBarColor={styles.header.backgroundColor} style={styles.header}>
                    <Left style={{ flexDirection: 'row' }}>
                        <Icon name="md-menu" style={{ color: 'white', marginRight: 15 }} />
                        <FAIcon name="amazon" size={22} style={{ color: 'white', marginRight: 15, marginTop: 3 }} />
                    </Left>
                    <Body></Body>
                    <Right>
                        <Icon name="md-cart" style={{ color: 'white' }} />
                    </Right>
                </Header>

                <View padder style={{ backgroundColor: styles.header.backgroundColor, flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.shopBy}>
                        <Text style={{ fontSize: 12 }}>Shop by</Text>
                        <Text style={{ fontWeight: 'bold' }}>Category</Text>
                    </TouchableOpacity>

                    <Item regular style={styles.search}>
                        <Icon name="search" />
                        <Input placeholder="Search"/>
                    </Item>
                </View>

                <Content style={{ backgroundColor: "#d5d5d5" }}>
                    <View padder style={{ backgroundColor: "white", flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>Hello, Dang!</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Your Account </Text>
                            <Icon name="arrow-forward" style={{ fontSize: 18 }} />
                        </View>
                    </View>

                    <Swiper autoplay style={{ height: 100, marginTop: 10 }}>
                        <View style={{ flex: 1 }}>
                            <Image style={styles.swiper_image} source={require('./assets/swiper_2.jpg')} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image style={styles.swiper_image} source={require('./assets/swiper_3.jpg')} />
                        </View>
                    </Swiper>

                    <View padder>
                        <CardItem header>
                            <Text>Your Recommendations</Text>
                        </CardItem>

                        <RecommendedCardItem
                            itemName="You can heal your life"
                            itemCreator="Louis Hay"
                            itemPrice="$25"
                            saving="2.5"
                            itemUri={require("./assets/recommended_1.jpg")} />

                        <RecommendedCardItem
                            itemName="You can heal your life"
                            itemCreator="Louis Hay"
                            itemPrice="$25"
                            saving="2.5"
                            itemUri={require("./assets/recommended_1.jpg")} />

                        <RecommendedCardItem
                            itemName="You can heal your life"
                            itemCreator="Louis Hay"
                            itemPrice="$25"
                            saving="2.5"
                            itemUri={require("./assets/recommended_1.jpg")} />
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#3a455c",
        borderBottomColor: "#757575"
    },
    search: {
        flexGrow: 1,
        marginLeft: 5,
        borderRadius: 4,
        paddingLeft: 10,
        borderWidth: 0,
        backgroundColor: 'white'
    },
    shopBy: {
        backgroundColor: '#e7e7eb',
        padding: 5,
        minWidth: 90,
        borderRadius: 4
    },
    swiper_image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }
})