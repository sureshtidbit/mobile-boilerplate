import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    StatusBar,
    Dimensions,
    TouchableOpacity
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
    LetsPlay() {
        this.props.navigation.navigate('Home')
    }
    LetsLogin(){
        this.props.navigation.navigate('AppLoginScreen')
    }
    render() {
        return (
            <View style={styles.linearGradient}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../Images/sp2.jpg')} style={{ resizeMode: 'stretch', width: width, height: height }}></Image>
                </View>
                <View style={{ position: 'absolute', bottom: 0 }}>
                    <View style={{ width: width, height: 110, flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.LetsPlay()} style={{borderWidth: 4,borderRadius: 2, borderColor:'green', width: width - 40, height: 50, padding: 10, alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{ fontSize: 18, color: '#FFF', fontWeight: '600' }}>
                                Let's Play
                        </Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
                            <TouchableOpacity onPress={() => this.LetsLogin()} style={{ flex: 1, marginLeft: 20 }}>
                                <Text style={{ fontSize: 14, color: '#FFF', fontWeight: '400', textAlign: 'left' }}>Have a referral code?</Text>
                                <Text style={{ fontSize: 16, color: '#FFF', fontWeight: '600', textAlign: 'left' }}>Enter code</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.LetsLogin()} style={{ flex: 1, marginRight: 20 }}>
                                <Text style={{ fontSize: 14, color: '#FFF', fontWeight: '400', textAlign: 'right' }}>Already a user?</Text>
                                <Text style={{ fontSize: 16, color: '#FFF', fontWeight: '600', textAlign: 'right' }}>Log In</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
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
