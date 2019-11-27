import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Main from '../App'
import { persistor, store } from './Store/index';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    )
  }
}
export default App