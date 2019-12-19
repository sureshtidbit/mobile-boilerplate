import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Dimensions
} from "react-native";
import { withNavigation, } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Container, Thumbnail, Header, Picker, Left, Body, Right, Button, Title } from 'native-base';
import { Avatar } from 'react-native-paper';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker'
import { UploadUserPicAction } from '../../Reducers/actions'
const width = Dimensions.get('window').width

class UserProfile extends Component {
    state = {
        EditProfile: false
    }
    GoBack() {
        this.props.navigation.goBack();
    }
    LoadImage() {
        if (!this.state.EditProfile) {
            return;
        }
        const options = {
            noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
            console.log(options, response, 'ffd')
            if (response.didCancel == undefined) {
                var media = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName,
                };
                var formData1 = new FormData();
                formData1.append('file', {
                    uri: response.uri,
                    name: response.fileName,
                    type: response.type
                })
                this.props.UploadUserPicAction(formData1)
                console.log('hh==>>', formData1)
            }
        })
    }

    ToggleEditProfile() {
        console.log('dwdw')
        this.props.navigation.navigate('EditUserProfile', {
            UserInfo: this.props.UserInfo
        });
        // this.setState({ EditProfile: !this.state.EditProfile })
    }
    render() {
        let EditProfile = this.state.EditProfile
        return (
            <Container>
                <Header style={{ elevation: 0, backgroundColor: 'transparent' }}>
                    <Left style={{ flex: 1 }}>
                        {/* <Button transparent onPress={() => this.GoBack()} >
                            <Icon name='md-arrow-back' size={24} color='#F00' />
                        </Button> */}
                    </Left>
                    <Body style={{ flex: 2, alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#F00' }}>Profile</Text>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.ToggleEditProfile()} >
                            <FontAwesome name='edit' size={24} color='#F00' />
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
                        <View style={{ marginTop: 50 }}>
                            <TouchableOpacity onPress={() => this.LoadImage()} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Avatar.Image size={110} source={{ uri: this.props.UserInfo.success ? this.props.UserInfo.userPic : null }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingLeft: 20, paddingRight: 20, justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 50 }}>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontSize: 10, color: '#888', }} >Name</Text>
                                <Text style={{ fontSize: 16, lineHeight: 16, fontWeight: 'bold', lineHeight: 16, marginTop: 0, }}>{this.props.UserInfo.success ? this.props.UserInfo.name : null}</Text>
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontSize: 10, color: '#888', }}>Email</Text>
                                <Text style={{ fontSize: 16, lineHeight: 16, fontWeight: '500', color: '#000', }}>{this.props.UserInfo.success ? this.props.UserInfo.email : null}</Text>
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontSize: 10, color: '#888', }}>Phone Number</Text>
                                <Text style={{ fontSize: 16, lineHeight: 20, color: '#000', fontWeight: '500' }}>+91 8542698745</Text>
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontSize: 10, color: '#888', }}>Street Address</Text>
                                <Text style={{ fontSize: 16, lineHeight: 20, color: '#000', fontWeight: '500' }}>407 iscon plaza Opp. start bazaar iscon road scon plaza Opp. start bazaar iscon road</Text>
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontSize: 10, color: '#888', }}>City</Text>
                                <Text style={{ fontSize: 16, lineHeight: 20, color: '#000', fontWeight: '500' }}>Ahmedabad</Text>
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontSize: 10, color: '#888', }}>State</Text>
                                <Text style={{ fontSize: 16, lineHeight: 20, color: '#000', fontWeight: '500' }}>Gujarat</Text>
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontSize: 10, color: '#888', }}>Pascode</Text>
                                <Text style={{ fontSize: 16, lineHeight: 20, color: '#000', fontWeight: '500' }}>380015</Text>
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontSize: 10, color: '#888', }}>Country</Text>
                                <Text style={{ fontSize: 16, lineHeight: 20, color: '#000', fontWeight: '500' }}>India</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state, 'state')
    return {
        loading: state.authReducer.loading,
        ErrorToaster: state.authReducer.ErrorToaster,
        UserInfo: state.authReducer.UserInfo
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        UploadUserPicAction: (payload) => dispatch(UploadUserPicAction(payload)),
    };
};
export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(UserProfile))

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
