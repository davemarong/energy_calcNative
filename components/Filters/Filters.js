// IMPORT

// REACT
import { useRef, useState } from "react";

// REACT NATIVE
import { Animated, View, StyleSheet, Button, SafeAreaView } from "react-native";

// REACT_NATIVE_ELEMENTS
import { ButtonGroup } from "@rneui/themed";

// COMPONENTS

// UTILS

// DATA
import { Filter_items } from "./Filters_items";
import { allFormulaData } from "../../formulaData/CombinedData";

// FUNCTIONAL COMPONENTS
export const Filters = ({
  setFormulaFunctions,
  setFormulaValues,
  setSliderData,
  selectedIndex,
  setSelectedIndex,
}) => {
  // STATE

  // VARIABLES
  const buttonLabels = ["Hastighet", "Diameter", "Trykkfall"];

  // FUNCTIONS
  const handleSwitchFilter = (value) => {
    const { formulaValue, formulaFunctions, sliderData } =
      allFormulaData[buttonLabels[value]];
    setFormulaFunctions(formulaFunctions);
    setFormulaValues(formulaValue);
    setSliderData(sliderData);
    setSelectedIndex(value);
  };

  // const buttonAnim = useRef(new Animated.Value(0).current);
  // RETURN
  return (
    <>
      <ButtonGroup
        buttons={buttonLabels}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          handleSwitchFilter(value);
        }}
        // Component={<Animated.Text />}
        containerStyle={{ marginBottom: 20 }}
        // selectedButtonStyle={{
        //   width: buttonAnim,
        // }}
      />
    </>
  );
};
