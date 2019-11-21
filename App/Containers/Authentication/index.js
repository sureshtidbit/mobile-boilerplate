import React, { Component } from "react";
import { isSignedIn } from "../../Auth/islogged";
import { withNavigation } from 'react-navigation'
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native'
import Login from './login'
class AuthScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            checkedSignIn: false,
            AuthText: ''
        };
    }

    componentDidMount() {
        isSignedIn()
            .then(res => {
                console.log(res, 'response')
                if (res.status == 1001) {
                    this.setState({ AuthText: JSON.stringify(res), checkedSignIn: true })
                } else {
                    this.props.navigation.navigate('Home')
                }
            })
            .catch(err => {
                console.log(err, "An error occurred")
                this.setState({ AuthText: JSON.stringify(err), checkedSignIn: true })
            })
    }

    render() {
        const { checkedSignIn, signedIn } = this.state;
        if (!checkedSignIn) {
            return <View style={styles.container1}>
                <ActivityIndicator size='large' color="#00ff00" />
            </View>;
        }
        return (
            <View style={styles.container1}>
                <Text>
                    {this.state.AuthText}
                </Text>
                <Login></Login>
            </View>
        )
    }
}
export default withNavigation(AuthScreen);
const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#f1f2f7',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})