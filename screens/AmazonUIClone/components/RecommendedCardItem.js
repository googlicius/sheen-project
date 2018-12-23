import React from 'react';
import { Image } from 'react-native';
import { CardItem, Text, View, Right } from 'native-base';

const RecommendedCardItem = (props) => {
    return (
        <CardItem>
            <View>
                <Image source={props.itemUri} style={{ width: 90, height: 90 }} />
            </View>
            <Right style={{ flex: 1, alignItems: 'flex-start', height: 90 }}>
                <Text>{props.itemName}</Text>
                <Text style={{ color: 'gray', fontSize: 11}}>{props.itemCreator}</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: "#c4402f" }}>{props.itemPrice}</Text>
                <Text style={{ color: 'gray' }}>you saved <Text style={{ color: "#c4402f" }}>${props.saving}</Text></Text>
            </Right>
        </CardItem>
    )
}

// Recommendations.propTypes = {
//     style: ViewPropTypes.style
// }

export default RecommendedCardItem;