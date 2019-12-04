import React, { Component } from 'react'
import Router from './App/routes'
import { connect } from 'react-redux';
import { StatusBar } from 'react-native'
import ErrorToaster from './App/Components/alerts/error'
class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar backgroundColor='#22c1c3' barStyle="light-content" />
        <Router />
        {this.props.ErrorToaster.toast ? <ErrorToaster message={this.props.ErrorToaster.message} /> : null}
      </React.Fragment>
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