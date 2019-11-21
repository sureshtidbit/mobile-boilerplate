import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Image,
    Button,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { Left } from 'native-base';
var Height = Dimensions.get('window').height
export default class Index2 extends Component {
    render() {
        Height = Dimensions.get('window').height

        return (
            <ScrollView contentContainerStyle={{ flex: 1 }}
                style={{ height: '100%' }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.MainView3}>
                        <TextInput
                            style={styles.TextInputAll}
                            placeholder="Email"
                        />
                        <TextInput
                            style={styles.TextInputAll}
                            placeholder="Password"
                        />
                        <View style={styles.LoginBtnView}>
                            <TouchableOpacity style={styles.TouchableOpacityBtn}>
                                <Text style={styles.LoginBtn}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.TouchableOpacityBtn}>
                                <Text style={styles.LoginBtn}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

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