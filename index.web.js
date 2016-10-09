import { AppRegistry } from 'react-native';
import App from './components/App';

/* global document */
AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root'),
});
