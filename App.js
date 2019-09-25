import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store';
// import FirstComponent from './src/components/FirstComponent';
// import { TimeSheetScreen } from './src/Screens';
import AppNavigator from './src/router';


export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
      <AppNavigator />
      </Provider>
    );
  }
}

