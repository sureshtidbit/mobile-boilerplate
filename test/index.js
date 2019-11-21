import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import Index2 from './index2';
import Flatlist from './Flatlist'
export default class Test extends Component {
    render() {
        return (
                <Flatlist/>
        );
    }
}