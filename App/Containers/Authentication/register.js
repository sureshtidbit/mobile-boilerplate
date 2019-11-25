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
            app.props.navigation.replace('AppLoginScreen')
        }, 5000);
    }
    render() {
        return (
            <View style={styles.linearGradient}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../Images/sp1.jpg')} style={{resizeMode:'stretch', width:width, height: height }}></Image>
                </View>
                {/* <View style={{ position: 'absolute', bottom: 0 }}>
                    <View style={{ width: width, height: 110, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, color: '#FFF', fontWeight: '500', marginBottom: -10 }}>Powered By</Text>
                        <Image source={require('../../assets/SanomaticsLogo_4.png')} style={{ width: 200, height: 100 }}></Image>
                    </View>
                </View> */}
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
