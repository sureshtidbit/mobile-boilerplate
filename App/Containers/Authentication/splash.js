import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    StatusBar,
    Dimensions
} from "react-native";
import { withNavigation } from 'react-navigation'
const { width, height } = Dimensions.get('window')
class AppSplash extends Component {
    constructor() {
        super();
        this.state = {
            onTab: 1,

        }
    }
    SplashTimer() {
        let app = this
        setTimeout(function () {
            app.props.navigation.replace('AppAuthManiScreen')
        }, 5000);
    }
    render() {
        return (
            <View style={styles.linearGradient}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../Images/sp1.jpg')} style={{resizeMode:'stretch', width:width, height: height }}></Image>
                </View>
                {this.SplashTimer()}
            </View>
        );
    }
}
export default withNavigation(AppSplash);
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
