/* eslint-disable prettier/prettier */
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, Icon, Platform, Keyboard, Text, TextInput, TouchableWithoutFeedback, Image, Button, View, StyleSheet, KeyboardAvoidingView } from 'react-native';

const TextInputExample = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState('');

    return (
        // <View style={{ marginTop: 100 }}>
        //     <Image
        //         style={{ width: 100, height: 100, marginBottom: 50, marginLeft: 150 }}
        //         source={{
        //             uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
        //         }}
        //     />
        //     <KeyboardAvoidingView
        //         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        //         style={styles.container}>
        //         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        //             <View style={styles.inner}>
        //                 <Text style={styles.header}>Header</Text>
        //                 <TextInput placeholder="Username" style={styles.textInput} />
        //                 <View style={styles.btnContainer}>
        //                     <Button title="Submit" onPress={() => null} />
        //                 </View>
        //             </View>
        //         </TouchableWithoutFeedback>
        //     </KeyboardAvoidingView>
        //     <Button
        //         title="Klik Me"
        //         onPress={() => navigation.navigate('About')}
        //     />
        // </View>

        <View style={styles.searchSection}>
            <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000" />
            <TextInput
                style={styles.input}
                placeholder="User Nickname"
                onChangeText={(searchString) => { this.setState({ searchString }) }}
                underlineColorAndroid="transparent"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default TextInputExample;