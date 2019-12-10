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
let APIURL = 'https://edan-power.tidbitlab.com/api/logout'
import ImagePicker from 'react-native-image-picker'
import Editprofile from './EditUserProfile'
import Viewprofile from './ViewUserProfile'
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
                // this.setState({ UserImageURI: media.uri })
                // var formData = new FormData();
                // formData.append("image", media);
                // formData.append("type", 'user_profile_pic');
                // this.setState({ UserImage: formData })
                this.props.UploadUserPicAction(formData1)
                console.log('hh==>>', formData1)
            }
        })
    }

    ToggleEditProfile() {
        this.setState({ EditProfile: !this.state.EditProfile })
    }
    render() {
        let EditProfile = this.state.EditProfile
        return (
            <Container>
                <Header style={{ elevation: 0, backgroundColor: 'transparent' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.GoBack()} >
                            <Icon name='md-arrow-back' size={24} color='#F00' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 2, alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#F00' }}>Profile</Text>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        {!EditProfile ? <Button transparent onPress={() => this.ToggleEditProfile()} >
                            <FontAwesome name='edit' size={24} color='#F00' />
                        </Button> :
                            <Button transparent onPress={() => this.ToggleEditProfile()} >
                                <Text>Save</Text>
                            </Button>}
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
                                <Avatar.Image style={{ backgroundColor: '#EEE' }} size={110} source={{uri: this.props.UserInfo.success ? this.props.UserInfo.userPic : null}} />
                                <FontAwesome style={{ padding: 5, backgroundColor:'#EEE',position: 'absolute', top: 110 / 2, left: (width / 2) + (110 / 2)-12 }} name="pencil" size={24} color="#F00" />
                            </TouchableOpacity>
                        </View>
                        {EditProfile ? <Editprofile></Editprofile> :
                            <Viewprofile></Viewprofile>}
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
