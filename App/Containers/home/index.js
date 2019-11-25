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
import { withNavigation,withNavigationFocus } from 'react-navigation'
import UserList from './userList'
class HomeScreen extends Component {
  GoToUserProfile() {
    this.props.navigation.openDrawer();
    console.log('user')
  }
  OpenDrawer() {
    this.props.navigation.openDrawer();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      console.log(prevProps,this.props,prevProps.isFocused, this.props.isFocused)
    }
  }
  Logout() {
    let app = this
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
export default withNavigationFocus(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
