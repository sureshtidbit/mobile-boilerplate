import React, { Component } from "react";
import {
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    Alert
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Card, CardItem, Header, Thumbnail, Left, Body, Right, Button, Title } from 'native-base';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux';
import { loginAction } from '../../Reducers/actions'
import firebase from 'react-native-firebase';
import { Progress } from '../ProgressDialog/index'
import ErrorToaster from '../../Components/alerts/error'
class LoginScreen extends Component {
    state = {
        Password: '',
        Email: ''
    }
    GoToUserProfile() {
        this.props.navigation.openDrawer();
        // this.props.navigation.navigate('UserProfile')
        console.log('user')
    }
    OpenDrawer() {
        this.props.navigation.openDrawer();
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
        const { Email, Password } = this.state
        let bodyData = {
            email: Email,
            password: Password
        }
        this.props.loginAction({ data: JSON.stringify(bodyData), props: this.props })
    }
    componentWillUnmount() {
        this.notificationListener;
        this.notificationOpenedListener;
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{ flex: 1 }}
                style={{ height: '100%' }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.MainView3}>
                        <TextInput
                            style={styles.TextInputAll}
                            onChangeText={(v) => this.setState({ Email: v })}
                            placeholder="Email"
                        />
                        <TextInput
                            style={styles.TextInputAll}
                            placeholder="Password"
                            onChangeText={(v) => this.setState({ Password: v })}
                            secureTextEntry={true}
                        />
                        <View style={styles.LoginBtnView}>
                            <TouchableOpacity onPress={() => this.MakeLogin()} style={styles.TouchableOpacityBtn}>
                                <Text style={styles.LoginBtn}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.TouchableOpacityBtn}>
                                <Text style={styles.LoginBtn}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Progress DialogLoader={this.props.loading} title={'Authenticating'} />
                    {this.props.ErrorToaster.toast ? <ErrorToaster message={this.props.ErrorToaster.message} /> : null}
                </View>
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state, 'state')
    return {
        loading: state.authReducer.loading,
        ErrorToaster: state.authReducer.ErrorToaster,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: (payload) => dispatch(loginAction(payload)),
    };
};
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