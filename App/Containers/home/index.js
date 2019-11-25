import React, { Component } from "react";
import {
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { Container, Card, CardItem, Header, Thumbnail, Left, Body, Right, Button, Title } from 'native-base';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons'
import { withNavigation } from 'react-navigation'
import UserList from './userList'
import ScreenTracking from './screenTracking'
class HomeScreen extends Component {
  componentDidMount() {
    console.log(';ScreenTracking', ScreenTracking())
  }
  GoToUserProfile() {
    this.props.navigation.openDrawer();
    // this.props.navigation.navigate('UserProfile')
    console.log('user')
  }
  OpenDrawer() {
    this.props.navigation.openDrawer();
  }
  Logout() {
    let app = this
    /*AsyncStorage.removeItem('App_Auth_Token', (err) => {
      app.props.navigation.navigate('AuthScreen')
    });*/
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#F00' }}>
          <Left>
            <TouchableOpacity onPress={() => this.OpenDrawer()} style={{ width: 32, height: 32 }}>
              <Image style={{ height: 32, width: 32 }} source={require('../../Images/Side_menu_icon2x.png')} />
            </TouchableOpacity>
          </Left>
          <Body>
          </Body>
          <Right>
          </Right>
        </Header>
        <UserList></UserList>
      </Container>
    );
  }
}
export default withNavigation(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
