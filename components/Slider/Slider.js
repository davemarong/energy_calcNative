// IMPORT

// React
import { useState, useEffect } from "react";

// React Native

// ReactNativeElements
import { Slider as SliderElement } from "@rneui/themed";
import { Text } from "@rneui/base";

// Components

// Utils

// Data

// Functional component
export const Slider = ({ sliderData, setFormulaValues, alignment }) => {
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
    handleUpdateFormulaValue("e", value);
  }, [alignment]);

  // Return
  return (
    <>
      <Text>{label}</Text>
      <Text>
        {value} {metric}
      </Text>
      <SliderElement
        value={value}
        maximumValue={10}
        minimumValue={0}
        step={1}
        allowTouchTrack
        onValueChange={setValue}
        onSlidingComplete={handleUpdateFormulaValue}
      />
    </>
  );
};
