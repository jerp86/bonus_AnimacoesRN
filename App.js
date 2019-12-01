import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

// Animated.View
// Animated.Text
// Animated.Image
// Animated.ScdrollView

/* const ballY = new Animated.Value(0);
//const ballX = Animated.divide(ballY, 2);
const ballX = Animated.multiply(ballY, 2); */

export default class App extends Component {
  state = {
    ballX: new Animated.Value(0),
    ballY: new Animated.Value(0),
  };

  componentDidMount() {
    const { ballX, ballY } = this.state;

    Animated.loop(
      Animated.sequence([
        Animated.timing(ballY, {
          toValue: 200,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(ballX, {
          toValue: 200,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(ballY, {
          toValue: 0,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(ballX, {
          toValue: 0,
          duration: 500,
        }),

        Animated.delay(200),
      ]),
      {
        iterations: 2,
      }
    ).start();

    Animated.parallel([
      Animated.timing(ballY, {
        toValue: 200,
        duration: 500,
      }),

      Animated.delay(500),

      Animated.timing(ballX, {
        toValue: 200,
        duration: 500,
      }),
    ]);

    Animated.stagger(50, [
      Animated.timing(ballY, {
        toValue: 200,
        duration: 500,
      }),

      Animated.timing(ballX, {
        toValue: 200,
        duration: 500,
      }),
    ]);
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
