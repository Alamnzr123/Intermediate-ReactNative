/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, Button } from 'react-native';
import style from './style';

const DetailsScreen = ({ route, navigation }) => {
    const { itemId, otherParam, description } = route.params;

    return (
        <View style={style.scrollView}>
            <Text>Details Screen</Text>

            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>Description: {JSON.stringify(description)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>

            {/* <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            /> */}

            <Button
                title="Update Params"
                onPress={() => {
                    navigation.setParams({
                        itemId: 'someText',
                    });
                }}
            />

            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />

            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}


export default DetailsScreen;