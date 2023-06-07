/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, Button } from 'react-native';

const AboutScreen = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>About Screen</Text>
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />

            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />

            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default AboutScreen;