import React, { Component } from "react";
import {
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    Dimensions
} from "react-native";
import { Container, Card, CardItem, Header, Thumbnail, Left, Body, Right, Button, Title } from 'native-base';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';
const { width, height } = Dimensions.get('window')

import { CurrentUser, Loading } from '../../Reducers/actions'
let APIURL = 'https://edan-power.tidbitlab.com/api/login'
class LoginScreen extends Component {
    state = {
        Password: ''
    }
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
                this.props.navigation.navigate('IsLoggedIn')
                // this.props.ReduxLoading(responseData)
            }).catch(function (error) {
                console.log(error)
            })
    }
    GoToHomeScreen() {
        this.MakeLogin()
        this.props.navigation.navigate('Home')
    }
    GoBack() {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <ScrollView keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flex: 1 }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.GoBack()} style={{ position: 'absolute', top: 15, left: 15, padding: 10 }}>
                        <Ionicons onPress={() => this.GoBack()} name="md-arrow-back" size={24} color='#F00' />
                    </TouchableOpacity>
                    <View style={{ width: width / 1.3, height: 50, marginTop: 30 }}>
                        <TextInput
                            mode={'flat'}
                            style={{ width: undefined, backgroundColor: 'transparent', paddingHorizontal: 0 }}
                            label='Mobile No.'
                            secureTextEntry={false}
                            value={this.state.Password}
                            onChangeText={Password => this.setState({ Password })}
                            theme={{ colors: { background: 'white', placeholder: '#000', text: '#000', primary: '#c41c00', underlineColor: 'transparent' } }}
                        />
                    </View>
                    <View style={{ marginTop: 35 }}>
                        <TouchableOpacity style={{ width: width / 1.3, height: 50, padding: 10, backgroundColor: '#f00', alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{ fontSize: 18, color: '#FFF', fontWeight: '500' }}>
                                LOG IN
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
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
        ReduxLoading: (payload) => dispatch(Loading(payload)),
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
