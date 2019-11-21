import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import SideJson from '../../Themes/sideJson.json'
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
            <View>
                <View>
                    {DrawerRoutes.map((v,i)=>{
                        return(
                            <TouchableOpacity onPress={() => this.NavigateDrawer('UserProfile')} key={i} style={{padding: 20, backgroundColor: '#EEE', margin: 10}}>
                                <Text>{v.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        )
    }
}
export default withNavigation(SideDrawer)
