import React, { Component } from "react";
import {
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    AsyncStorage,
    Alert
} from "react-native";
import { Container, Card, CardItem, Header, Thumbnail, Left, Body, Right, Button, Title } from 'native-base';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux';
import { CurrentUser } from '../../Reducers/actions'
import firebase, { Notification, NotificationOpen } from 'react-native-firebase';
let APIURL = 'https://edan-power.tidbitlab.com/api/login'
class LoginScreen extends Component {
    GoToUserProfile() {
        this.props.navigation.openDrawer();
        // this.props.navigation.navigate('UserProfile')
        console.log('user')
    }
    OpenDrawer() {
        this.props.navigation.openDrawer();
    }
    Logout() {
        let app = this
        /*AsyncStorage.removeItem('App_Auth_Token', (err) => {
          app.props.navigation.navigate('AuthScreen')
        });*/
    }
    async getFCMToken() {
        let fcmToken = await AsyncStorage.getItem('worddiagnostics_fcm_token');
        console.log("before fcmToken: ", fcmToken);
        if (!fcmToken) {
            fcmToken = await firebase.messaging().getToken();
            console.log("----fcmToken: ", fcmToken);
            if (fcmToken) {
                console.log("after fcmToken: ", fcmToken);
            }
        }
    }
    async checkPermission() {
        firebase.messaging().hasPermission()
            .then(enabled => {
                console.log("Permission enabled", enabled);
                if (enabled) {
                    console.log("Permission granted", enabled);
                    this.getFCMToken();
                } else {
                    console.log("Request Permission");
                    this.requestPermission();
                }
            });
    }

    //2
    async requestPermission(auth_token) {
        firebase.messaging().requestPermission()
            .then(() => {
                this.getFCMToken();
            })
            .catch(error => {
                console.log('permission rejected');
            });
    }
    async createNotificationListeners() {
        /*
        * Triggered when a particular notification has been received in foreground
        * */
        // trigger whe app is closed
        firebase.notifications().getInitialNotification()
            .then((notificationOpen) => {
                console.log(notificationOpen, 'notificationOpen11')
                if (notificationOpen) {
                    // App was opened by a notification
                    // Get the action triggered by the notification being opened
                    const action = notificationOpen.action;
                    // Get information about the notification that was opened
                    const notification = notificationOpen.notification;
                }
            });
        // trigger when app is open
        this.notificationListener = firebase.notifications().onNotification((notification) => {
            const { title, body } = notification;
            console.log('onNotification:', notification);

            const localNotification = new firebase.notifications.Notification({
                sound: 'sampleaudio',
                show_in_foreground: true,
            })
                .setSound('sampleaudio.wav')
                .setNotificationId(notification.notificationId)
                .setTitle(notification.title)
                .setBody(notification.body)
                .android.setChannelId('fcm_FirebaseNotifiction_default_channel') // e.g. the id you chose above
                .android.setSmallIcon('@drawable/ic_launcher') // create this icon in Android Studio
                .android.setColor('#000000') // you can set a color here
                .android.setPriority(firebase.notifications.Android.Priority.High);

            firebase.notifications()
                .displayNotification(localNotification)
                .catch(err => console.error(err));
        });

        const channel = new firebase.notifications.Android.Channel('fcm_FirebaseNotifiction_default_channel', 'Demo app name', firebase.notifications.Android.Importance.High)
            .setDescription('Demo app description')
            .setSound('sampleaudio.wav');
        firebase.notifications().android.createChannel(channel);

        /*
        * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
        * */
        //trigged when click on notifications
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
            const { title, body } = notificationOpen.notification;
            console.log(notificationOpen.notification, 'notificationOpen.notification;====')
            console.log('onNotificationOpened:');
            Alert.alert(title, body)
        });

        /*
        * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
        * */
        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            const { title, body } = notificationOpen.notification;
            console.log('getInitialNotification:======1', notificationOpen);
            Alert.alert(title, body)
        }
        /*
        * Triggered for data only payload in foreground
        * */
        this.messageListener = firebase.messaging().onMessage((message) => {
            //process data message
            console.log("JSON.stringify:", JSON.stringify(message));
        });
    }
    componentDidMount() {
        this.checkPermission()
        this.createNotificationListeners();
    }
    MakeLogin() {
        let bodyData = {
            email: "mansi@tidbitlab.com",
            password: "123456"
        }
        fetch(APIURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(bodyData)
        }).then((response) => response.json())
            .then((responseData) => {
                console.log(responseData)
                // this.props.navigation.navigate('Home')
                this.props.ReduxCurrentUser(responseData)
            }).catch(function (error) {
                console.log(error)
            })
    }
    GoToHomeScreen() {
        this.props.navigation.navigate('Home')
    }
    componentWillUnmount() {
        this.notificationListener;
        this.notificationOpenedListener;
    }
    render() {
        return (
            // <ScrollView>
            //     <View>
            //         <TouchableOpacity onPress={() => this.MakeLogin()} style={{ padding: 20, backgroundColor: '#F00' }}>
            //             <Text>Login</Text>
            //         </TouchableOpacity>
            //         <Text>{JSON.stringify(this.props.currentUser)}</Text>
            //     </View>
            // </ScrollView>
            <ScrollView contentContainerStyle={{ flex: 1 }}
                style={{ height: '100%' }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.MainView3}>
                        <TextInput
                            style={styles.TextInputAll}
                            placeholder="Email"
                        />
                        <TextInput
                            style={styles.TextInputAll}
                            placeholder="Password"
                        />
                        <View style={styles.LoginBtnView}>
                            <TouchableOpacity onPress={() => this.GoToHomeScreen()} style={styles.TouchableOpacityBtn}>
                                <Text style={styles.LoginBtn}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.TouchableOpacityBtn}>
                                <Text style={styles.LoginBtn}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    console.log(state, 'state')
    return {
        currentUser: state.authReducer.currentUser,
    };
};
// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
    // Action
    return {
        // Increase Counter
        ReduxCurrentUser: (payload) => dispatch(CurrentUser(payload)),
        // Decrease Counter
        //   reduxDecreaseCounter: () => dispatch(decreaseCounter()),
        // Login
        //   reduxLogin: (trueFalse) => dispatch(login(trueFalse)),
    };
};
// Exports
export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(LoginScreen))

const styles = StyleSheet.create({

    ScrollView1: {
        flex: 1,
        backgroundColor: '#EEE'
    },
    MainView2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#AAA',
        height: 233
    },
    MainView3: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#888',
        width: '80%',
        margin: 20
    },
    TextInputAll: {
        height: 40,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        paddingLeft: 15,
        marginTop: 15,
    },
    LoginBtnView: {
        marginTop: 15,
        flexDirection: 'row',
    },
    TouchableOpacityBtn: {
        marginRight: 15,
    },
    LoginBtn: {
        color: 'blue',
        fontSize: 12,
        color: '#fff',
        backgroundColor: '#3f51b5',
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 4,
        textAlign: 'center',
    },

});