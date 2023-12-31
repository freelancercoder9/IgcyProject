/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StyleSheet, View} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';

function App(): JSX.Element {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
      <LoginScreen />
      {/* <CreateAccountScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
