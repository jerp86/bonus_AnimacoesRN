import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

// Animated.View
// Animated.Text
// Animated.Image
// Animated.ScdrollView

const ballY = new Animated.Value(0);
//const ballX = Animated.divide(ballY, 2);
const ballX = Animated.multiply(ballY, 2);
export default class App extends Component {
  state = {
    ballY: ballY,
    ballX: ballX,
  };

  componentDidMount() {
    const { ballY, ballX } = this.state;

    Animated.timing(ballY, {
      toValue: 500,
      duration: 1000,
    });

    Animated.spring(ballY, {
      toValue: 300,
      bounciness: 40,
    });

    Animated.decay(ballY, {
      velocity: 0.3,
    }).start();
  }

  render() {
    const { ballY, ballX } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ball, { top: ballY, left: ballX }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#7159C1',
  },
});
