import React, { Component } from "react";
import { withNavigation, } from 'react-navigation'
import { Container, } from 'native-base';
import { connect } from 'react-redux';
import ViewUserProfile from './ViewUserProfile';

class UserProfile extends Component {
   
    render() {
        
        return (
            <Container>
                <ViewUserProfile></ViewUserProfile>
            </Container>
        );
    }
}

export default withNavigation(connect()(UserProfile))

