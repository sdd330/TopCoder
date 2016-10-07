import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Animated } from 'react-native';

import Theme from '../../themes/base-theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 26,
    width: undefined,
    height: undefined,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  last: {
    justifyContent: 'flex-end',
  },
  h1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    color: Theme.darkText,
    backgroundColor: 'transparent',
  },
  h2: {
    textAlign: 'center',
    fontSize: 17,
    color: Theme.darkText,
    marginVertical: 20,
  },
  h3: {
    fontSize: 12,
    textAlign: 'center',
    color: Theme.lightText,
    letterSpacing: 1,
  },
  loginComment: {
    marginBottom: 14,
    fontSize: 12,
    color: Theme.darkText,
    textAlign: 'center',
  },
  skip: {
    position: 'absolute',
    right: 0,
    top: 20,
    padding: 15,
  },
});

class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.anim, {
      toValue: 3000,
      duration: 3000,
    }).start();
  }

  fadeIn(delay, from = 0) {
    const {anim} = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [{
        translateY: anim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 3000)],
          outputRange: [from, 0],
          extrapolate: 'clamp',
        }),
      }],
    };
  }

  render() {
    return (
      <Image
        style={ styles.container }
        source={ require('./img/login-background.png') }>
        <View style={ styles.section }>
          <Animated.Text style={ [styles.h1, this.fadeIn(700, -20)] }>
            TopCoder + React Native
          </Animated.Text>
          <Animated.Text style={ [styles.h2, this.fadeIn(1000, 10)] }>
            一行代码搞定iOS，Android和Web平台
          </Animated.Text>
          <Animated.Text style={ [styles.h3, this.fadeIn(1200, 10)] }>
            看起来是不是很牛逼！快来加入我们吧：）
          </Animated.Text>
        </View>
        <Animated.View style={ [styles.section, styles.last, this.fadeIn(2500, 20)] }>
          <Text style={ styles.loginComment }>
            TopCoder React Native应用诚招贡献者
          </Text>
        </Animated.View>
      </Image>
      );
  }
}

export default Welcome;
