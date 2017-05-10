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
  Image,
  TextInput
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

// 5.高度与宽度
class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

class FlexDimensionsBasics extends Component {
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

// 6.使用Flexbox布局
// 对布局有影响的完整样式列表记录在这篇文档中：http://reactnative.cn/docs/0.44/layout-props.html
// 6.1FlexDirection:决定布局的主轴
class FlexDirectionBasics extends Component {
  render() {
    return (
      // 尝试把`flexDirection`改为`column`看看
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
// 6.2 JustifyContent：决定其子元素沿着主轴的排列方式 （flex-start、center、flex-end、space-around以及space-between）
class JustifyContentBasics extends Component {
  render() {
    return (
      // 尝试把`justifyContent`改为`center`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
// 6.3 alignItems:决定其子元素沿着次轴的排列方式（flex-start、center、flex-end以及stretch）
class AlignItemsBasics extends Component {
  render() {
    return (
      // 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

// 7 处理文本输入
class PizzaTranslator extends Component {

  state: {
    text: ''
  };//写这段代码的作用：http://stackoverflow.com/questions/36860349/flow-react-native-is-giving-me-errors-for-using-this-state，不写的话老警告

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={{backgroundColor: 'gray',padding: 10}}>
        <TextInput
          style={{height:40}}
          placeholder="Tye here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10,fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word&&'🍕').join('')}
        </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('ReactNativeDemo', () => PizzaTranslator);
