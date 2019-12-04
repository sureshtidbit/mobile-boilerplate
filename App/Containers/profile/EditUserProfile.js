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
                        <View style={{}}>
                            <View style={{paddingLeft: 20, marginRight: 20, marginBottom: 40,}}>
                               <View style={{height: 30, marginBottom: 30}}>
                               <TextInput
                                    style={styles.TextInputAll}
                                    label="Name"
                                    onChangeText={(v) => this.setState({ Name: v })}
                                    value={this.state.Name}
                                    theme={{ colors: { lineHeight:14 , background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />
                               </View>
                               

                                <TextInput
                                    style={styles.TextInputAll}
                                    label="Email"
                                    onChangeText={(v) => this.setState({ Email: v })}
                                    value={this.state.Email}
                                    theme={{ colors: { background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />

                                <TextInput
                                    style={styles.TextInputAll}
                                    label="Phone Number"
                                    onChangeText={(v) => this.setState({ PhoneNumber: v })}
                                    value={this.state.PhoneNumber}
                                    theme={{ colors: { background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />

                                <TextInput
                                    style={styles.TextInputAll}
                                    label="Street Address"
                                    onChangeText={(v) => this.setState({ StreetAddress: v })}
                                    value={this.state.StreetAddress}
                                    theme={{ colors: { background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />

                                <TextInput
                                    style={styles.TextInputAll}
                                    label="City"
                                    onChangeText={(v) => this.setState({ City: v })}
                                    value={this.state.City}
                                    theme={{ colors: { background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />

                                <TextInput
                                    style={styles.TextInputAll}
                                    label="State"
                                    onChangeText={(v) => this.setState({ State: v })}
                                    value={this.state.State}
                                    theme={{ colors: { background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />

                                <TextInput
                                    style={styles.TextInputAll}
                                    label="Pascode"
                                    onChangeText={(v) => this.setState({ Pascode: v })}
                                    value={this.state.Pascode}
                                    theme={{ colors: { background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />

                                <TextInput
                                    style={styles.TextInputAll}
                                    label="Country"
                                    onChangeText={(v) => this.setState({ Country: v })}
                                    value={this.state.Country}
                                    theme={{ colors: { background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />

                                
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
        backgroundColor: '#000',
        color: '#424242',
        borderRadius: 50,
        lineHeight: 16
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#BBB',
    },
    TextInputAll: {
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        // marginTop: 15,
        backgroundColor: 'transparent',
        borderWidth: 0,
        paddingHorizontal: 0,
        lineHeight: 16
    },
    LoginBtn: {
        fontSize: 16,
        color: '#fff',
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: 'center',
    },
    TouchableOpacityBtn:{
        backgroundColor: '#22c1c3',
        marginTop: 30,
        marginBottom: 30
    }
});
