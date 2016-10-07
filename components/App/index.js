import React from 'react';
import { StyleSheet, View } from 'react-native';

import Welcome from '../Welcome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const App = function App() {
  return (
    <View style={ styles.container }>
      <Welcome />
    </View>
    );
};

export default App;
