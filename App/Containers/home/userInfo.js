import React, { Component } from "react";
import {
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  StatusBar,
  Dimensions
} from "react-native";
import { Avatar } from 'react-native-paper';
import { Container, Card, CardItem, Header, Thumbnail, Left, Body, Right, Button, Title } from 'native-base';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons'
import { withNavigation,withNavigationFocus } from 'react-navigation';
import ProfileBG from '../../Images/user-list-bg.jpg';

// import * as React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';


const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081', height: 200, }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7', height: 200, }]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ddd', height: 200, }]} />
);

class UserInfoScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'ThirdRoute', title: 'ThirdRoute' },
    ],
  };
  GoToUserProfile() {
    this.props.navigation.openDrawer();
    console.log('user')
  }
  GoBack() {
    this.props.navigation.goBack();
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#F00' }}>
          <Left>
            <TouchableOpacity transparent onPress={() => this.GoBack()} style={{ width: 32, height: 32 }}>
            <Icon name={Platform.OS == 'android' ? 'md-arrow-back' : 'ios-arrow-back'} size={24} color="#000" />
            </TouchableOpacity>
          </Left>
          <Body>
          </Body>
          <Right>
          </Right>
        </Header>
        
        <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                >
                    <StatusBar barStyle="light-content" />
                    <View style={styles.container}>
                        <View style={styles.BackBottonBG}>
                        {/* <Image style={{  }} source={require('../../Images/user-list-bg.jpg')}/> */}
                        </View>
                        <View style={{ marginTop: 50 }}>
                   
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: -100, }}>
                                <Avatar.Image style={{ backgroundColor: '#EEE' }} size={110} source={require('../../Images/a2.png')} />
                            </TouchableOpacity>
                         
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Zakir Pathan</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                                <Text style={{ fontSize: 14, }}>sanjay@tidbitlab.com</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
                                <Text style={{ fontSize: 14, }}>Designer</Text>
                            </View>
                            <View style={{  flexDirection: 'row', flex: 1, alignItems: 'center', marginTop: 40, marginBottom: 20,  }}>
                              <ScrollView horizontal={true} style={{marginLeft: 10, marginRight: 10, }} >
                                <View style={{  paddingTop: 0, paddingBottom: 10, flex: 1, alignItems: 'center', borderColor: '#ddd', borderWidth: 1, marginRight: 8, marginLeft: 8, borderRadius: 5, }}>
                                   <Image style={{height: 100, width: 100, margin: 8,}} source={require('../../Images/sp1.jpg')}/>
                                    <Text style={{ fontSize: 14, fontWeight: '700', color: '#000', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#888', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#888', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                </View>
                                <View style={{  paddingTop: 0, paddingBottom: 10, flex: 1, alignItems: 'center', borderColor: '#ddd', borderWidth: 1, marginRight: 8, marginLeft: 8, borderRadius: 5, }}>
                                   <Image style={{height: 100, width: 100, margin: 8,}} source={require('../../Images/sp1.jpg')}/>
                                    <Text style={{ fontSize: 14, fontWeight: '700', color: '#000', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#888', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#888', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                </View>
                                <View style={{  paddingTop: 0, paddingBottom: 10, flex: 1, alignItems: 'center', borderColor: '#ddd', borderWidth: 1, marginRight: 8, marginLeft: 8, borderRadius: 5, }}>
                                   <Image style={{height: 100, width: 100, margin: 8,}} source={require('../../Images/sp1.jpg')}/>
                                    <Text style={{ fontSize: 14, fontWeight: '700', color: '#000', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#888', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#888', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                </View>
                                <View style={{  paddingTop: 0, paddingBottom: 10, flex: 1, alignItems: 'center', borderColor: '#ddd', borderWidth: 1, marginRight: 8, marginLeft: 8, borderRadius: 5, }}>
                                   <Image style={{height: 100, width: 100, margin: 8,}} source={require('../../Images/sp1.jpg')}/>
                                    <Text style={{ fontSize: 14, fontWeight: '700', color: '#000', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#888', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#888', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                </View>
                                <View style={{  paddingTop: 0, paddingBottom: 10, flex: 1, alignItems: 'center', borderColor: '#ddd', borderWidth: 1, marginRight: 8, marginLeft: 8, borderRadius: 5, }}>
                                   <Image style={{height: 100, width: 100, margin: 8,}} source={require('../../Images/sp1.jpg')}/>
                                    <Text style={{ fontSize: 14, fontWeight: '700', color: '#000', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#888', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#888', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                </View>
                                <View style={{  paddingTop: 0, paddingBottom: 10, flex: 1, alignItems: 'center', borderColor: '#ddd', borderWidth: 1, marginRight: 8, marginLeft: 8, borderRadius: 5, }}>
                                   <Image style={{height: 100, width: 100, margin: 8,}} source={require('../../Images/sp1.jpg')}/>
                                    <Text style={{ fontSize: 14, fontWeight: '700', color: '#000', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#888', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#888', padding: 5, paddingTop: 0, paddingBottom: 0, textAlign: 'left', }}>
                                    Followings
                                    </Text>
                                </View>
                                
                              </ScrollView>
                            </View>
                            
                        </View>
                        <TabView
                          navigationState={this.state}
                          renderScene={SceneMap({
                            first: FirstRoute,
                            second: SecondRoute,
                            ThirdRoute: ThirdRoute,
                          })}
                          onIndexChange={index => this.setState({ index })}
                          initialLayout={{ width: Dimensions.get('window').width }}
                        />
                    </View>
                </ScrollView>
                
      </Container>
    );
  }
}
export default withNavigationFocus(UserInfoScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 BackBottonBG: {
    height: 150, 
    backgroundColor: '#ddd',
    // overflow: 'hidden',
 },
 BackBotton:{ 
     position: 'absolute', 
     left: 20, top: 15 
    },
    scene: {
      flex: 1,
    },
 
});
