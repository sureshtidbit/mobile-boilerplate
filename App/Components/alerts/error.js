import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    Platform,
    Animated,
    TouchableOpacity
} from "react-native";
import { withNavigation } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { ErrorToasterHide } from '../../Reducers/actions'
class ErrorAlert extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(70)
        this.state = {
            text: '',
        }
    }
    componentDidMount() {
        this.callToast()
    }
    callToast() {
        Animated.timing(
            this.animatedValue,
            {
                toValue: 0,
                duration: 200
            }).start(this.closeToast())
    }

    closeToastMethod() {
        Animated.timing(
            this.animatedValue,
            {
                toValue: 70,
                duration: 200
            }).start()
        this.props.ErrorToasterHide()
    }
    closeToast() {
        setTimeout(() => {
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 70,
                    duration: 350
                }).start()
        }, 10000)
    }
    render() {

        return (
            <Animated.View
                style={{
                    transform: [{ translateY: this.animatedValue }],
                    height: 70,
                    backgroundColor: '#ff5733',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: 1000,
                    justifyContent: 'center'
                }}>
                <Text
                    style={{
                        marginLeft: 10,
                        color: '#FFF',
                        fontSize: 14,
                        fontWeight: '400'
                    }}>
                    {this.props.message}
                </Text>
                <TouchableOpacity onPress={() => this.closeToastMethod()} style={{ position: 'absolute', right: 10, padding: 5 }}>
                    <Ionicons name={Platform == 'android' ? 'md-close' : 'ios-close'} size={24} color="#FFF"></Ionicons>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state, 'state')
    return {
        loading: state.authReducer.loading,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        ErrorToasterHide: () => dispatch(ErrorToasterHide()),
    };
};
export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(ErrorAlert))
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    MainContainer: {
        flex: 1,
        backgroundColor: '#FFF'
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
