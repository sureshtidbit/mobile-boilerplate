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
import Test from './test'
let APIURL = 'https://edan-power.tidbitlab.com/api/logout'

export default class UseProfile extends Component{

    state={
        frontShow: false
    }

    OnPressParent(v){
        console.log(v,'v')
        this.setState({
            frontShow: ! this.state.frontShow
        })
    }
    render (){
        return(
           <Container>
               <View>
                     <Test OnPress1={(v)=>this.OnPressParent(v)}  HelloName='Designer' />
                     {this.state.frontShow && <Text>viwe </Text>}
                     {!this.state.frontShow && <Text>edit </Text>}

               </View>
           </Container>
        );
    }
}


