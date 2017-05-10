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

// 2.Prop(属性)
class Bananas extends Component {
  render() {
    let pic = {uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}
    return (
      // pic外有一层括号的意思是括号内部为一个js变量或表达式，需要执行后取值。
      <Image source={pic} style={{width:193,height:110}}></Image>
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

//3.Sate(状态)
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

















// AppRegistry.registerComponent('HelloWorld', () => BlinkApp);
