import React, { Component } from "react";
import {
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";
import { Container, Card, CardItem, Header, Thumbnail, Left, Body, Right, Button, Title } from 'native-base';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux';
import { CurrentUser } from '../../Reducers/actions'
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
    render() {
        return (
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => this.MakeLogin()} style={{ padding: 20, backgroundColor: '#F00' }}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <Text>{JSON.stringify(this.props.currentUser)}</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
