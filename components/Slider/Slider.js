// React
import { useState, useEffect, useRef } from "react";

// React Native
import {
  Animated,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";

// ReactNativeElements
import { Slider as SliderElement } from "@rneui/themed";
import { Text } from "@rneui/base";
import { Icon } from "@rneui/themed";
// Components

// Utils

// Data

// Functional component
export const Slider = ({ inputdata, setFormulaValues, selectedIndex }) => {
  // Props
  const { marks, step, min, max, label, metric, defaultValue, stateName } =
    inputdata;

  // State
  const [value, setValue] = useState(defaultValue);

  // Functions
  const handleUpdateFormulaValue = (value) => {
    setFormulaValues((prev) => {
      return { ...prev, [stateName]: { ...prev[stateName], value: value } };
    });
  };

  const increaseValue = () => {
    setValue(value + step);
    setFormulaValues((prev) => {
      return { ...prev, [stateName]: { ...prev[stateName], value: value } };
    });
  };
  const decreaseValue = () => {
    setValue(value - step);
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
      <View style={styles.label}>
        <Text>{label}</Text>
        <Text>
          {value.toFixed(2)} {metric}
        </Text>
      </View>
      <View style={styles.slide_container}>
        <Pressable style={styles.slide_image} onPress={decreaseValue}>
          <Image
            style={styles.icon_left}
            source={require("../../assets/icons/left.png")}
          />
        </Pressable>
        <SliderElement
          style={styles.slide}
          thumbStyle={{
            backgroundColor: sliderAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["red", "black"],
            }),
          }}
          value={value}
          maximumValue={max}
          minimumValue={min}
          step={step}
          onValueChange={setValue}
          onSlidingComplete={(value) => {
            handleUpdateFormulaValue(value);
          }}
        />
        <Pressable style={styles.slide_image} onPress={increaseValue}>
          <Image
            style={styles.icon_right}
            source={require("../../assets/icons/right.png")}
          />
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon_left: {
    width: 25,
    height: 35,
  },
  icon_right: {
    width: 25,
    height: 35,
    // marginLeft: 10,
  },
  slide_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  slide_image: {
    flex: 1,
  },
  slide: { width: "85%" },
});
