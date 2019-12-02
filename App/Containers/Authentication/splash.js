import React, { Component } from "react";
import {
    View,
    StyleSheet,
    StatusBar
} from "react-native";
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux';
import { IsUserLoggedIn } from '../../Reducers/actions'
class AppSplash extends Component {
    constructor() {
        super();
        this.state = {
            onTab: 1,
        }
    }
    RedirectUser() {
        this.props.IsUserLoggedIn(this.props)
    }
    SplashTimer() {
        let app = this
        setTimeout(function () {
            app.RedirectUser()
        }, 3000);
    }
    render() {
        return (
            <View style={styles.linearGradient}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={{ backgroundColor: '#F00', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                </View>
                {this.SplashTimer()}
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isLoggingIn: state.authReducer.isLoggingIn,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        IsUserLoggedIn: (payload) => dispatch(IsUserLoggedIn(payload)),
    };
};
export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(AppSplash))
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});
