import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from "react-native";
import { withNavigation, } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Container, Thumbnail, Header, Picker, Left, Body, Right, Button, Title } from 'native-base';
import { Avatar } from 'react-native-paper';
import { connect } from 'react-redux';
let APIURL = 'https://edan-power.tidbitlab.com/api/logout'

import Editprofile from './EditUserProfile'
import Viewprofile from './ViewUserProfile'
import LearnProps from './LearnProps'

class UserProfile extends Component {
   
    GoBack() {
        this.props.navigation.goBack();
    }
    
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#22c1c3' }}>
                    <Left style={{ flex: 0.5 }}>
                        <Button transparent onPress={() => this.GoBack()} >
                            <Icon name='md-arrow-back' size={24} color='#FFF' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 2, alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#FFF' }}>Profile</Text>
                    </Body>
                    <Right style={{ flex: 0.5 }}>
                        <Button transparent onPress={() => this.GoBack()} >
                            <FontAwesome name='edit' size={24} color='#FFF' />
                        </Button>
                    </Right>
                </Header>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                >
                    <StatusBar backgroundColor='#F00' barStyle="light-content" />
                    <View style={styles.container}>
                        <Button style={{ position: 'absolute', left: 20, top: 15 }} transparent onPress={() => this.GoBack()} >
                            <Icon name={Platform.OS == 'android' ? 'md-arrow-back' : 'ios-arrow-back'} size={24} color="#fff" />
                        </Button>
                        <View style={{ marginTop: 70 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Avatar.Image style={{ backgroundColor: '#EEE' }} size={110} source={require('../../Images/a2.png')} />
                            </TouchableOpacity>
                        </View>
                        {/* <Editprofile></Editprofile> */}
                        {/* <Viewprofile></Viewprofile> */}
                        <LearnProps></LearnProps>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

export default withNavigation(connect()(UserProfile))

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
