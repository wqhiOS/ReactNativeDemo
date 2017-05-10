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

// 2.1自定义属性
class Greeting extends Component {
    render() {
      return (
        <Text>Hello {this.props.name}!</Text>
      );
    }
}
class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

// 3.Sate(状态) //不太明白
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    //每1000毫秒对showText状态做一次取反操作
    setInterval(()=>{
      this.setState(previousState => {
        return {showText: !previousState.showText};
      });
    },1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink'/>
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML'/>
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

// 4.样式
// style属性可以是一个普通的JS对象。 建议使用StyleSheet.create来集中定义组件的样式。
class  LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={styles.bigblue,styles.red}>bigblue, then red</Text>
        <Text style={styles.red,styles.bigblue}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});


AppRegistry.registerComponent('ReactNativeDemo', () => LotsOfStyles);
