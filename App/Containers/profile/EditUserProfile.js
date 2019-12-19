import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from "react-native";
import { TextInput } from 'react-native-paper';
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Container, Thumbnail, Header, Picker, Left, Body, Right, Button, Title } from 'native-base';
import { Avatar } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux';
import { UploadUserPicAction, SaveUserInfoAction } from '../../Reducers/actions'
const width = Dimensions.get('window').width
import { Progress } from '../ProgressDialog/index'

class EditUserProfile extends Component {
    constructor() {
        super();
        this.state = {
            UserInfo: {
                name: '',
                email: '',
                phoneNumber: '',
                streetAddress: '',
                city: '',
                state: '',
                passcode: '',
                country: ''
            }
        }
    }
    componentDidMount() {
        if (this.props.UserInfo) {
            this.setState({ UserInfo: this.props.UserInfo })
        }
    }
    GoBack() {
        this.props.navigation.goBack();
    }
    SaveUserDetails() {
        console.log(this.state)
        const { UserInfo } = this.state
        let ob = {
            name: UserInfo.name,
            email: UserInfo.email
        }
        this.props.SaveUserInfoAction({ data: JSON.stringify(ob), props: this.props })
    }
    LoadImage() {
        const options = {
            noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
            console.log(options, response, 'ffd')
            if (response.didCancel == undefined) {
                var formData = new FormData();
                formData.append('file', {
                    uri: response.uri,
                    name: response.fileName,
                    type: response.type
                })
                this.props.UploadUserPicAction(formData)
                console.log('hh==>>', formData)
            }
        })
    }
    shouldComponentUpdate(nextState, nextProps) {
        console.log(this.props, nextProps, 'kkkkkk')
        if (this.state.UserInfo != nextProps.UserInfo) {
            this.setState({ UserInfo: nextProps.UserInfo })
            return true
        }
        return true;
    }
    render() {
        let UserInfo = this.state.UserInfo
        return (
            <Container>
                <Header style={{ elevation: 0, backgroundColor: 'transparent' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.GoBack()} >
                            <Icon name='md-arrow-back' size={24} color='#F00' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 2, alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#F00' }}>Edit Profile</Text>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.SaveUserDetails()} >
                            <Text>Save</Text>
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
                        <View>
                            <View style={{ marginTop: 50 }}>
                                <TouchableOpacity onPress={() => this.LoadImage()} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar.Image size={110} source={{ uri: this.props.UserInfo.success ? this.props.UserInfo.userPic + '?' + this.props.UserInfo.profileImage : null }} />
                                    <FontAwesome style={{ padding: 5, backgroundColor: 'transparent', position: 'absolute', top: (110 / 2) - 20, left: (width / 2) + (110 / 2) - 15 }} name="pencil" size={24} color="#F00" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingLeft: 20, marginRight: 20, marginBottom: 40, }}>
                                <View style={{ height: 30, marginBottom: 30 }}>
                                    <TextInput
                                        style={styles.TextInputAll}
                                        label="Name"
                                        onChangeText={(v) => this.setState({ UserInfo: { ...this.state.UserInfo, name: v } })}
                                        value={UserInfo.name}
                                        theme={{ colors: { lineHeight: 14, background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                    />
                                </View>


                                <TextInput
                                    style={styles.TextInputAll}
                                    label="Email"
                                    onChangeText={(v) => this.setState({ UserInfo: { ...this.state.UserInfo, email: v } })}
                                    value={UserInfo.email}
                                    theme={{ colors: { background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />

                                <TextInput
                                    style={styles.TextInputAll}
                                    label="Phone Number"
                                    onChangeText={(v) => this.setState({ UserInfo: { ...this.state.UserInfo, phoneNumber: v } })}
                                    value={UserInfo.phoneNumber}
                                    theme={{ colors: { background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />

                                <TextInput
                                    style={styles.TextInputAll}
                                    label="Street Address"
                                    onChangeText={(v) => this.setState({ UserInfo: { ...this.state.UserInfo, streetAddress: v } })}
                                    value={UserInfo.streetAddress}
                                    theme={{ colors: { background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />

                                <TextInput
                                    style={styles.TextInputAll}
                                    label="City"
                                    onChangeText={(v) => this.setState({ UserInfo: { ...this.state.UserInfo, city: v } })}
                                    value={UserInfo.city}
                                    theme={{ colors: { background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />

                                <TextInput
                                    style={styles.TextInputAll}
                                    label="State"
                                    onChangeText={(v) => this.setState({ UserInfo: { ...this.state.UserInfo, state: v } })}
                                    value={UserInfo.state}
                                    theme={{ colors: { background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />

                                <TextInput
                                    style={styles.TextInputAll}
                                    label="Pascode"
                                    onChangeText={(v) => this.setState({ UserInfo: { ...this.state.UserInfo, passcode: v } })}
                                    value={UserInfo.passcode}
                                    theme={{ colors: { background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />

                                <TextInput
                                    style={styles.TextInputAll}
                                    label="Country"
                                    onChangeText={(v) => this.setState({ UserInfo: { ...this.state.UserInfo, country: v } })}
                                    value={UserInfo.country}
                                    theme={{ colors: { background: 'white', placeholder: '#888', text: '#000', primary: '#22c1c3', underlineColor: 'transparent' } }}
                                />
                            </View>
                        </View>
                        <Progress DialogLoader={this.props.loading} title={'Please wait...'} />
                    </View>
                </ScrollView>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state, 'state profile edit')
    return {
        UserInfo: state.authReducer.UserInfo,
        loading: state.authReducer.loading,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        UploadUserPicAction: (payload) => dispatch(UploadUserPicAction(payload)),
        SaveUserInfoAction: (payload) => dispatch(SaveUserInfoAction(payload)),

    };
};
export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(EditUserProfile))

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
    TouchableOpacityBtn: {
        backgroundColor: '#22c1c3',
        marginTop: 30,
        marginBottom: 30
    }
});
