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
            CurrentUserID: {},
            updateValue: true
        }
        this.FocusTextBox = []
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
    componentDidUpdate(prevProps) {
        if (prevProps.isFocused !== this.props.isFocused) {
            console.log('==========', prevProps, this.props, prevProps.isFocused, this.props.isFocused)
        }
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
        this.props.logoutUser({ API: 'logout', props: this.props })
    }
    UpdateName() {
        this.setState({ updateValue: !this.state.updateValue })
    }
    FocusOnText(index) {
        this.FocusTextBox[index + 1].focus()
    }
    render() {
        const { width, height } = Dimensions.get('window')
        let userInfo = this.state.UserInfo
        let RenderPost = null
        
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
                            <View style={{ paddingLeft: 20, paddingRight: 20, justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 50 }}>
                                <View style={{marginBottom: 20}}>
                                    <Text style={{fontSize: 10, color: '#888',}} >Name</Text>
                                    <Text style={{ fontSize: 16,  lineHeight: 16, fontWeight: 'bold',  lineHeight: 16, marginTop: 0, }}>{this.props.UserInfo.success ? this.props.UserInfo.name : null}</Text>
                                </View>

                                <View style={{marginBottom: 20}}>
                                    <Text style={{fontSize: 10, color: '#888',}}>Email</Text>
                                    <Text style={{ fontSize: 16,  lineHeight: 16, fontWeight: '500', color: '#000',  }}>{this.props.UserInfo.success ? this.props.UserInfo.email : null}</Text>
                                </View>
                                
                                <View style={{marginBottom: 20}}>
                                    <Text style={{fontSize: 10, color: '#888',}}>Phone Number</Text>
                                    <Text style={{ fontSize: 16,  lineHeight: 20, color: '#000', fontWeight: '500' }}>+91 8542698745</Text>
                                </View>

                                <View style={{marginBottom: 20}}>
                                    <Text style={{fontSize: 10, color: '#888',}}>Street Address</Text>
                                    <Text style={{ fontSize: 16,  lineHeight: 20, color: '#000', fontWeight: '500' }}>407 iscon plaza Opp. start bazaar iscon road scon plaza Opp. start bazaar iscon road</Text>
                                </View>

                                <View style={{marginBottom: 20}}>
                                    <Text style={{fontSize: 10, color: '#888',}}>City</Text>
                                    <Text style={{ fontSize: 16,  lineHeight: 20, color: '#000', fontWeight: '500' }}>Ahmedabad</Text>
                                </View>

                                <View style={{marginBottom: 20}}>
                                    <Text style={{fontSize: 10, color: '#888',}}>State</Text>
                                    <Text style={{ fontSize: 16,  lineHeight: 20, color: '#000', fontWeight: '500' }}>Gujarat</Text>
                                </View>

                                <View style={{marginBottom: 20}}>
                                    <Text style={{fontSize: 10, color: '#888',}}>Pascode</Text>
                                    <Text style={{ fontSize: 16,  lineHeight: 20, color: '#000', fontWeight: '500' }}>380015</Text>
                                </View>

                                <View style={{marginBottom: 20}}>
                                    <Text style={{fontSize: 10, color: '#888',}}>Country</Text>
                                    <Text style={{ fontSize: 16,  lineHeight: 20, color: '#000', fontWeight: '500' }}>India</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state, 'state profile')
    return {
        UserInfo: state.authReducer.UserInfo,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: (payload) => dispatch(logoutUser(payload)),
    };
};
export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(UserProfile))

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
