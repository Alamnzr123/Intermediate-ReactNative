/* eslint-disable prettier/prettier */
// In App.js in a new project
import * as React from 'react';
import { StyleSheet, Image, View, Text, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import component
import Login from './src/screen/Login/index';
import Register from './src/screen/Register/index';
import Modal from './src/screen/Modal/index';
import LoginNew from './src/screen/LoginNew/index';
import Flatlist from './src/screen/Flatlist/index';
import Camera from './src/screen/Camera/index';

// package
import Axios from './src/screen/Axios/index';
import SplashScreen from 'react-native-splash-screen';
import OneSignal from 'react-native-onesignal';


// // ONESIGNAL
// import OneSignal from 'react-native-onesignal';
// // react-native-dotenv
// import { ONESIGNAL_APP_ID } from '@env';



function HomeScreen({ navigation }) {



    // React.useEffect(() => {
    //     // Copas bagian 5
    //     // OneSignal Initialization
    //     OneSignal.setAppId(ONESIGNAL_APP_ID);

    //     OneSignal.promptForPushNotificationsWithUserResponse();

    //     OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
    //         console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
    //         let notification = notificationReceivedEvent.getNotification();
    //         console.log("notification: ", notification);
    //         const data = notification.additionalData
    //         console.log("additionalData: ", data);
    //         // Complete with null means don't show a notification.
    //         notificationReceivedEvent.complete(notification);
    //     });

    //     OneSignal.setNotificationOpenedHandler(notification => {
    //         console.log("OneSignal: notification opened:", notification);
    //     });

    // })
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>

                <Image source={require('./src/assets/everest.jpg')} />
            </ScrollView>



            <Text>Screen</Text>
            <Button
                title="Go to Another route"
                onPress={() => navigation.navigate('About', {
                    screen: 'Details',
                    params: { user: 'Jane' }
                })}
            />

            <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                        description: 'hello'
                    });
                }}
            />

            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />

            <Button
                title="Go to Modal"
                onPress={() => navigation.navigate('Modal')}
            />

            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />

            <Button
                title="Go to Flatlist"
                onPress={() => navigation.navigate('Flatlist')}
            />

            <Button
                title="Go to Axios"
                onPress={() => navigation.navigate('Axios')}
            />

            <Button
                title="Go to Camera"
                onPress={() => navigation.navigate('Camera')}
            />

        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    React.useEffect(() => {
        SplashScreen.hide();
    }, [])

    React.useEffect(() => {

        // OneSignal Initialization
        OneSignal.setAppId('df485471-325a-4bca-872f-72c1655a5708');

        // promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
        // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
        OneSignal.promptForPushNotificationsWithUserResponse();

        //Method for handling notifications received while app in foreground
        OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
            console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
            let notification = notificationReceivedEvent.getNotification();
            console.log("notification: ", notification);
            const data = notification.additionalData
            console.log("additionalData: ", data);
            // Complete with null means don't show a notification.
            notificationReceivedEvent.complete(notification);
        });

        //Method for handling notifications opened
        OneSignal.setNotificationOpenedHandler(notification => {
            console.log("OneSignal: notification opened:", notification);
        });
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    options={{
                        title: 'Home',
                        headerShown: false, // 
                    }}
                    name="Home" component={HomeScreen} />
                <Stack.Screen
                    options={{ title: 'Login' }}
                    name="Details" component={Login} />
                <Stack.Screen
                    options={{ title: 'Register' }}
                    name="About" component={Register} />
                <Stack.Screen
                    options={{ title: 'Modal' }}
                    name="Modal" component={Modal} />
                <Stack.Screen
                    options={{ title: 'Login' }}
                    name="Login" component={LoginNew} />
                <Stack.Screen
                    options={{ title: 'Flatlist' }}
                    name="Flatlist" component={Flatlist} />
                <Stack.Screen
                    options={{ title: 'Axios' }}
                    name="Axios" component={Axios} />
                <Stack.Screen
                    options={{ title: 'Camera' }}
                    name="Camera" component={Camera} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});


export default App;
