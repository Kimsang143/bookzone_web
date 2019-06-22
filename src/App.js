import React, { Component } from 'react';

import { Provider } from 'react-redux';
import configureStores from './App/Common/storeConfig.js';
import MainNavigator from './App/Navigation/index.js';
// const store = createStore(Reducer)
let store = configureStores()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <MainNavigator />
      </Provider>
    );
  }
}

export default App;
