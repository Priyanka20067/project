import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Image, Animated } from "react-native";

const LoadingScreen = () => {
  // Create a reference for animated value
  const rotateValue = useRef(new Animated.Value(0)).current;

  // Rotate animation
  useEffect(() => {
    const rotate = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000, // Duration of one complete rotation
        useNativeDriver: true, // Use native driver for performance
        easing: Animated.Easing.linear,
      })
    );
    rotate.start();
  }, [rotateValue]);

  // Interpolate rotate value to get a degree rotation
  const rotateAnimation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"], // Rotate from 0 to 360 degrees
  });

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Animated.Image
          source={require('../assets/image/Next Button.png')}
          style={[styles.icon, { transform: [{ rotate: rotateAnimation }] }]} // Apply rotation
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f9f6", // Light greenish-gray background
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#d0e8cf", // Light green background for the circle
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40, // Adjust based on the size of the heart
    height: 40,
    resizeMode: "contain",
  },
});

export default LoadingScreen;
