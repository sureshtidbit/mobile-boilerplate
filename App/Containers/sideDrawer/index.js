import React, { Component } from 'react'
import { ScrollView, Text,StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import SideJson from '../../Themes/sideJson.json'
import Icon from 'react-native-vector-icons/FontAwesome';

class SideDrawer extends Component {
    OpenDrawer() {
        console.log('open===>>>')
    }
    componentDidMount() {
        console.log('SideJson===>>>>', SideJson)
    }
    NavigateDrawer(route){
        console.log(route,'routes')
        this.props.navigation.navigate(route)
    }
    render() {
        let DrawerRoutes = []
        if(SideJson){
            DrawerRoutes = SideJson
        }
        return (
            <View style={{backgroundColor: '#fff', height: '100%'}}>
                <View style={{backgroundColor: 'red'}}>
                    <Image style={{height: 80, width: 100, margin: 8, resizeMode:'contain' }} source={require('../../Images/logo.png')}/>
                </View>
                <View style={{paddingTop: 0, paddingLeft: 10}}>
                    {DrawerRoutes.map((v,i)=>{
                        return(
                            <TouchableOpacity onPress={() => this.NavigateDrawer('UserProfile')} key={i} style={{padding: 0, color: '#000', margin: 10 }}>
                                <Text style={{fontSize: 16}}>{v.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <View style={styles.social}>
                    <View style={styles.icon}>
                        <Icon name="facebook-f" color="#fff" style={{fontSize:16, padding: 10}} />
                        <Icon name="twitter" color="#fff" style={{fontSize:16, padding: 10}}  />
                        <Icon name="youtube-play" color="#fff" style={{fontSize:16, padding: 10}}  />
                        <Icon name="behance" color="#fff" style={{fontSize:16, padding: 10}}  />
                        <Icon name="dribbble" color="#fff" style={{fontSize:16, padding: 10}}  />
                    </View>
                </View>
            </View>
        )
    }
}

export default withNavigation(SideDrawer)
const styles = StyleSheet.create(
    {
        social:
         {
             flex: 1,
             justifyContent: 'flex-end', 
             alignItems: 'center' ,
             flexDirection: 'column',
             position: 'relative',
         },
         icon:{
             flex: 1,
             flexDirection:'row',
             position: 'absolute',
             bottom:0,
             backgroundColor: 'red',
             width: '100%',
             justifyContent: 'center',
             padding: 5
         }
    });