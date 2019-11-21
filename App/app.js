// import '../Config'
// import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
// import RootContainer from './RootContainer'
// import createStore from './Redux'
import Router from './routes'
// create our store
// const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

// import the two exports from the last code snippet.
import { persistor, store } from './Store/index';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    )
  }
}
export default App