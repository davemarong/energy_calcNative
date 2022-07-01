// IMPORT

// REACT
import { useState, useEffect, useRef } from "react";

// REACT NATIVE
import { View, StyleSheet, TextInput } from "react-native";

// REACT_NATIVE_ELEMENTS
import { Input as InputElement, Text } from "@rneui/themed";

// COMPONENTS

// UTILS

// DATA

// FUNCTIONAL COMPONENTS
export const Input = ({ inputdata, setFormulaValues, selectedIndex }) => {
  // PROPS
  const { marks, step, min, max, label, metric, defaultValue, stateName } =
    inputdata;

  // STATE
  const [value, setValue] = useState(defaultValue);
  console.log(defaultValue);
  // FUNCTIONS
  const handleUpdateFormulaValue = (value) => {
    setFormulaValues((prev) => {
      return { ...prev, [stateName]: { ...prev[stateName], value: value } };
    });
  };
  // return (
  //   fv.romtemp.value +
  //   (fv.dut.value * (fv.romtemp.value - fv.variabelUtetemp.value)) /
  //     (fv.romtemp.value - fv.dut.value)
  // ).toFixed(2);
  // UseEffect
  useEffect(() => {
    handleUpdateFormulaValue(value);
  }, [selectedIndex]);

  // RETURN
  return (
    <>
      <View style={styles.container}>
        {/* <InputElement
          keyboardType="numeric"
          label={label}
          placeholder={defaultValue}
        /> */}
        <TextInput keyboardType="numeric" label={label} />
        <Text>{metric}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
