// IMPORT

// REACT
import { useState } from "react";

// REACT NATIVE

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

  // RETURN
  return (
    <>
      <ButtonGroup
        buttons={buttonLabels}
        selectedIndex={selectedIndex}
        onPress={handleSwitchFilter}
        containerStyle={{ marginBottom: 20 }}
      />
    </>
  );
};
