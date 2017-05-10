/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

// 1.编写
export default class HelloWorld extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}


AppRegistry.registerComponent('ReactNativeDemo', () => HelloWorld);
