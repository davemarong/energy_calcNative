// React
import { useState, useEffect, useRef } from "react";

// React Native
import { Animated, View, StyleSheet, Button, SafeAreaView } from "react-native";

// ReactNativeElements
import { Slider as SliderElement } from "@rneui/themed";
import { Text } from "@rneui/base";

// Components

// Utils

// Data

// Functional component
export const Slider = ({ sliderData, setFormulaValues, selectedIndex }) => {
  // Props
  const { marks, step, min, max, label, metric, defaultValue, stateName } =
    sliderData;

  // State
  const [value, setValue] = useState(defaultValue);

  // Functions

  const handleUpdateFormulaValue = (value) => {
    setFormulaValues((prev) => {
      return { ...prev, [stateName]: { ...prev[stateName], value: value } };
    });
  };

  // UseEffect
  useEffect(() => {
    handleUpdateFormulaValue(value);
  }, [selectedIndex]);

  const sliderAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  // Return
  return (
    <>
      <Text>{label}</Text>
      <Text>
        {value} {metric}
      </Text>
      <SliderElement
        thumbStyle={{
          backgroundColor: sliderAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["red", "black"],
          }),
        }}
        // thumbProps={<Animated.Text />}
        value={value}
        maximumValue={max}
        minimumValue={min}
        step={step}
        onValueChange={setValue}
        // onSlidingStart={() => {
        //   Animated.timing(sliderAnim, {
        //     toValue: 1,
        //     duration: 200,
        //     useNativeDriver: false,
        //   }).start();
        // }}
        onSlidingComplete={(value) => {
          handleUpdateFormulaValue(value);
          // Animated.timing(sliderAnim, {
          //   toValue: 0,
          //   duration: 200,
          //   useNativeDriver: false,
          // }).start();
        }}
      />
    </>
  );
};
