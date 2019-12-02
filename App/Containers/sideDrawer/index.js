import React, { Component } from 'react';
import { NavigationActions, withNavigation } from 'react-navigation';
import { StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView, Platform, Share } from 'react-native';
import { Thumbnail } from 'native-base'
import { Avatar } from 'react-native-paper';
import { logoutUser } from '../../Reducers/actions'
import { connect } from 'react-redux';
import FIcon from 'react-native-vector-icons/Feather'
let colors = { PRIMARY: '#22c1c3' }
var OnClickCheck = 0
class SideMenu extends Component {
    constructor() {
        super();
        this.state = {
            toggle: true,
            ColorArray: [colors.PRIMARY, '#757575', '#757575', '#757575', '#757575', '#757575'],
            BorderColorsArray: [colors.PRIMARY, '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'],
            UserInfo: {}
        }
    }
    NavigateDrawer(route, id) {
        let ColorArray = this.state.ColorArray
        let BorderColorsArray = this.state.BorderColorsArray
        if (OnClickCheck != id) {
            ColorArray[OnClickCheck] = '#757575'
            BorderColorsArray[OnClickCheck] = '#FFF'
            ColorArray[id] = colors.PRIMARY
            BorderColorsArray[id] = colors.PRIMARY
            OnClickCheck = id
        }
        this.setState({ ColorArray: ColorArray, BorderColorsArray: BorderColorsArray })

        console.log(route, id)
        if (route == 'RateUs') {
        } if (route == 'Share') {
            this.props.navigation.closeDrawer();
            // this.onShare()
        } else {
            this.props.navigation.closeDrawer();
            this.props.navigation.navigate(route)
        }

    }
    FlatListItemSeparator = () => {
        return <View style={styles.line} />
    }
    GoToProfile() {
        console.log('pro')
        this.props.navigation.navigate('UserProfileView')
    }
    LogoutUser() {
        this.props.logoutUser({ API: 'logout', props: this.props })
    }
    render() {
        let ColorArray = this.state.ColorArray
        let BorderColorsArray = this.state.BorderColorsArray
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.GoToProfile()} style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 20 }}>
                        <Avatar.Image size={80} source={require('../../Images/sp2.jpg')} />
                        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: '700' }}>Shreley Satiya</Text>
                        <Text style={{ fontSize: 14, fontWeight: '400' }}>shreleysatiya@gmail.com</Text>
                    </TouchableOpacity>
                    {this.FlatListItemSeparator()}
                    <View style={{ marginTop: 15, width: 300 }}>
                        <TouchableOpacity onPress={() => this.NavigateDrawer('Home', 0)} style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, borderLeftColor: BorderColorsArray[0], borderLeftWidth: 4 }}>
                            <FIcon name="home" size={24} color={ColorArray[0]} />
                            <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: '400', color: ColorArray[0] }}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.NavigateDrawer('SideBarForApp', 1)} style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, borderLeftColor: BorderColorsArray[1], borderLeftWidth: 4 }}>
                            <FIcon name="alert-circle" size={24} color={ColorArray[1]} />
                            <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: '400', color: ColorArray[1] }}>About</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.NavigateDrawer('AppSetting', 2)} style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, borderLeftColor: BorderColorsArray[2], borderLeftWidth: 4 }}>
                            <FIcon name="settings" size={24} color={ColorArray[2]} />
                            <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: '400', color: ColorArray[2] }}>Setting</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.NavigateDrawer('ChangePassword', 3)} style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, borderLeftColor: BorderColorsArray[3], borderLeftWidth: 4 }}>
                            <FIcon name="message-square" size={24} color={ColorArray[3]} />
                            <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: '400', color: ColorArray[3] }}>Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.NavigateDrawer('RateUs', 4)} style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, borderLeftColor: BorderColorsArray[4], borderLeftWidth: 4 }}>
                            <FIcon name="star" size={24} color={ColorArray[4]} />
                            <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: '400', color: ColorArray[4] }}>Rate us</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.NavigateDrawer('Share', 5)} style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, borderLeftColor: BorderColorsArray[5], borderLeftWidth: 4 }}>
                            <FIcon name="share" size={24} color={ColorArray[5]} />
                            <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: '400', color: ColorArray[5] }}>Share</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.LogoutUser()} style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, borderLeftColor: BorderColorsArray[5], borderLeftWidth: 4 }}>
                            <FIcon name="log-out" size={24} color='#757575' />
                            <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: '400', color: '#757575' }}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{ position: 'absolute', bottom: 0, width: 300 }}>
                        <View style={styles.line} />
                        <TouchableOpacity onPress={() => this.Logout()} style={{
                            flexDirection: 'row',
                            borderRadius: 5, alignItems: 'center',
                            paddingTop: 20, paddingBottom: 20, paddingLeft: 20
                        }}>
                            <FIcon name="log-out" size={24} color='#757575' />
                            <Text style={{ paddingLeft: 30, fontSize: 18, fontWeight: '700', color: '#757575' }}>Log Out</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state, 'state sidebar')
    return {
        currentUser: state.authReducer.currentUser,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: (payload) => dispatch(logoutUser(payload)),
    };
};
export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(SideMenu))
const styles = StyleSheet.create({
    line: {
        height: 0.5,
        width: 300,
        backgroundColor: "#BBB"
    }
});
