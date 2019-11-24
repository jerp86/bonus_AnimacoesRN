import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

// Animated.View
// Animated.Text
// Animated.Image
// Animated.ScdrollView

export default class App extends Component {
  state = {
    ballY: new Animated.Value(0),
  };

  componentDidMount() {
    const { ballY } = this.state;

    Animated.timing(ballY, {
      toValue: 500,
      duration: 1000,
    });

    Animated.spring(ballY, {
      toValue: 300,
      bounciness: 40,
    });

    Animated.decay(ballY, {
      velocity: 10,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ball, { top: this.state.ballY }]} />
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
