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
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class SuccessAlert extends Component {
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
                    backgroundColor: 'green',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: 1000,
                    justifyContent: 'center'
                }}>
                <Text
                    style={{
                        marginLeft: 20,
                        color: 'white',
                        fontSize: 14,
                        fontWeight: '400',
                        marginRight: 20
                    }}>
                    {this.props.message}
                </Text>
                <TouchableOpacity onPress={() => this.closeToastMethod()} style={{ position: 'absolute', right: 10 }}>
                    <Ionicons name={Platform == 'android' ? 'md-close' : 'ios-close'} size={24} color="#000"></Ionicons>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.authReducer.loading,
    };
};

export default withNavigation(connect(mapStateToProps)(SuccessAlert));
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
