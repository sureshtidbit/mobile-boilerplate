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
    StatusBar
} from "react-native";
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { Container, Thumbnail, Header, Picker, Left, Body, Right, Button, Title } from 'native-base';
import { Avatar } from 'react-native-paper';
let APIURL = 'https://edan-power.tidbitlab.com/api/logout'

class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            refreshing: false,
            Loader: false,
            UserInfo: { first_name: "", last_name: '', followers: 0, followings: 0, organizations: 0, is_follow: false },
            GroupID: '',
            FollowLoader: false,
            ImageModal: false,
            images: [],
            UserPosts: [],
            CurrentUserID: {}
        }
    }
    login() {
        let formBody = {
            email: "mansi@tidbitlab.com",
            password: "123456"
        }
        fetch('https://edan-power.tidbitlab.com/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: formBody
        }).then((response) => response.json())
            .then((responseData) => {
                this.isLogin()
                console.log('responseData'), responseData
            }).catch(function (error) {
                console.log('error', error)
            })
    }
    isLogin() {
        fetch('https://edan-power.tidbitlab.com/api/isLoggedIn', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((responseData) => {
                console.log('responseData1'), responseData
            }).catch(function (error) {
                console.log('error1', error)
            })
    }
    componentDidMount() {
        this.login()
    }
    GoBack() {
        this.props.navigation.goBack();
    }
    FernderDevider() {
        return <View style={{ flex: 1, marginTop: 5 }}>
            <View style={{ borderWidth: 1, borderColor: '#BBB' }} />
        </View>
    }
    UserLogout() {
        console.log("2333")
        fetch(APIURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then((response) => response.json())
            .then((responseData) => {
                console.log(responseData)
                this.props.navigation.navigate('IsLoggedIn')
            }).catch(function (error) {
                console.log(error)
            })
    }

    render() {
        const { width, height } = Dimensions.get('window')
        let userInfo = this.state.UserInfo
        let RenderPost = null
        return (
            <Container>
                <Header style={{ backgroundColor: '#F00' }}>
                    <Left style={{ flex: 0.5 }}>
                        <Button transparent onPress={() => this.GoBack()} >
                            <Icon name='md-arrow-back' size={24} color='#FFF' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 2, alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#FFF' }}>Profile</Text>
                    </Body>
                    <Right style={{ flex: 0.5 }}>
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
                            <Icon name={Platform.OS == 'android' ? 'md-arrow-back' : 'ios-arrow-back'} size={24} color="#FFF" />
                        </Button>
                        <View style={{ marginTop: 70 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Avatar.Image style={{ backgroundColor: '#EEE' }} size={110} source={require('../../Images/a2.png')} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sandeep Kumar</Text>
                            </View>
                            <View style={{ borderTopColor: '#EEE', borderTopWidth: 1, flexDirection: 'row', flex: 1, alignItems: 'center', marginTop: 40, marginBottom: 20, borderBottomColor: '#EEE', borderBottomWidth: 1 }}>
                                <TouchableOpacity style={{ paddingTop: 10, paddingBottom: 10, flex: 1, alignItems: 'center', borderRightColor: '#EEE', borderRightWidth: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>
                                        100
                                    </Text>
                                    <Text style={{ fontSize: 18, fontWeight: '500', color: '#AAA', padding: 5 }}>
                                        Followings
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ paddingTop: 10, paddingBottom: 10, flex: 1, alignItems: 'center', borderRightColor: '#EEE', borderRightWidth: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>
                                        500
                                    </Text>
                                    <Text style={{ fontSize: 18, fontWeight: '500', color: '#AAA', padding: 5 }}>
                                        Followers
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ paddingTop: 10, paddingBottom: 10, flex: 1, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>
                                        1000
                                    </Text>
                                    <Text style={{ fontSize: 18, fontWeight: '500', color: '#AAA', padding: 5 }}>
                                        Groups
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ padding: 20, backgroundColor: '#EEE' }} onPress={() => this.UserLogout()}>
                                <Text>User Logout</Text>
                            </TouchableOpacity>
                        </View>
                        {/* {this.FernderDevider()} */}
                    </View>
                </ScrollView>
            </Container>
        );
    }
}
export default withNavigation(UserProfile);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 50
    },
    searchIcon: {
        paddingLeft: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius: 50
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#BBB',
    },
});
