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
    ballY: new Animated.Value(0),
  };

  componentDidMount() {
    const { ballY } = this.state;

    Animated.timing(ballY, {
      toValue: 500,
      duration: 1000,
    }).start();
  }

  render() {
    const { ballY } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.ball,
            {
              top: ballY,
              opacity: ballY.interpolate({
                inputRange: [0, 300],
                outputRange: [1, 0.2],
                extrapolate: 'clamp',
              }),
            },
          ]}
        />
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
