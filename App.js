import React, { Component } from 'react'
import Router from './App/routes'
import { connect } from 'react-redux';
import { StatusBar } from 'react-native'
import ErrorToaster from './App/Components/alerts/error'
class Main extends Component {
  TrackChanges(v) {
    console.log('TrackChanges=>>', v)
  }
  render() {
    return (
      <Router TrackChanges={(e) => this.TrackChanges(e)} />
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state, 'state>>ErrorToaster>>')
  return {
    ErrorToaster: state.authReducer.ErrorToaster,
  };
};
export default connect(mapStateToProps)(Main)