import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import HockeyApp from 'react-native-hockeyapp';
import codePush from 'react-native-code-push';

import App from './components/App';

class AppWrapper extends Component {
  componentWillMount() {
    HockeyApp.configure('67da4f7a0de14857924c7ec29cbec0a6', true);
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
