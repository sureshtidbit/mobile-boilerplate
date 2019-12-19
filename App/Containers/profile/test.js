import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    RefreshControl,
    ActivityIndicator,  
    StatusBar,
} from "react-native";
import { TextInput } from 'react-native-paper';
import { withNavigation, withNavigationFocus } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Container, Thumbnail, Header, Picker, Left, Body, Right, Button, Title } from 'native-base';
import { Avatar } from 'react-native-paper';
import { CurrentUser, logoutUser } from '../../Reducers/actions'
import { connect } from 'react-redux';
let APIURL = 'https://edan-power.tidbitlab.com/api/logout'

class UserProfile extends Component {
    OnPress(){
        console.log('ddd')
        this.props.OnPress1({name: 'sandeep'})
    }
    render() {
        return (
                <TouchableOpacity onPress={()=>this.OnPress()} style={{alignItems: 'center'}}>
                    <Text> Hello Zakir Pathan rrr{this.props.HelloName} </Text>
                </TouchableOpacity>
        );
    }
}
export default UserProfile;


