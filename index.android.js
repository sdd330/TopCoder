import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import HockeyApp from 'react-native-hockeyapp';
import codePush from 'react-native-code-push';

import App from './components/App';

class AppWrapper extends Component {
  componentWillMount() {
    HockeyApp.configure('4c1a7f1beaf542769848042cdc37a53d', true);
  }

  componentDidMount() {
    HockeyApp.start();
    HockeyApp.checkForUpdate();
  }

  render() {
    return (
      <App />
      );
  }
}

const appSynced = codePush(AppWrapper);
AppRegistry.registerComponent('TopCoder', () => appSynced);
