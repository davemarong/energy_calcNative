import React, { useRef, useEffect } from "react";
import { Animated, Text, View } from "react-native";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.Text // Special animatable View
      style={{
        ...props.style,
        backgroundColor: fadeAnim.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: ["black", "red", "black"],
        }), // Bind opacity to animated value
        color: fadeAnim.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: ["red", "black", "red"],
        }),
        fontSize: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ["24px", "34px"],
        }),
        marginRight: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100],
        }),
      }}
    >
      DUde are crazy
    </Animated.Text>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FadeInView
        style={{ width: 250, height: 50, backgroundColor: "powderblue" }}
      >
        {/* <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>
          Fading in
        </Text> */}
      </FadeInView>
    </View>
  );
};
