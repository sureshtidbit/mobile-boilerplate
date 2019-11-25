import React, { Component } from 'react'
import Router from './App/routes'
import { connect } from 'react-redux';
class Main extends Component {
  render() {
    return (
      <Router />
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state, 'state>>>>')
  return {
    currentUser: state.authReducer.isLoggingIn,
  };
};
export default connect(mapStateToProps)(Main)