import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "@rneui/themed";
import { Slider } from "./components/Slider/Slider";
import { useState } from "react";

// Data
import { trykkfall_sliderData } from "./formulaData/SliderData";
import { trykkfall_link } from "./formulaData/FormulaFunctions";
import { trykkfall_formula_values } from "./formulaData/FormulaValues";
import { SliderContainer } from "./components/Slider/SliderContainer";
import { Filters } from "./components/Filters/Filters";
import { DisplayResult } from "./components/DisplayResult/DisplayResult";

export default function App() {
  // STATE
  // User input values
  const [formulaValues, setFormulaValues] = useState(trykkfall_formula_values);

  // The formula functions that calculate the result values
  const [formulaFunctions, setFormulaFunctions] = useState(trykkfall_link);

  // The data for the sliders the user interacts with
  const [sliderData, setSliderData] = useState(trykkfall_sliderData);

  // The toggleButton/nav that is active."Trykkfall/Hastighet/Diameter"
  const [selectedIndex, setSelectedIndex] = useState(0);

  // PROPS OBJECT
  const FiltersProps = {
    setFormulaFunctions: setFormulaFunctions,
    setFormulaValues: setFormulaValues,
    setSliderData: setSliderData,
    selectedIndex: selectedIndex,
    setSelectedIndex: setSelectedIndex,
  };

  const SliderContainerProps = {
    sliderData: sliderData,
    setFormulaValues: setFormulaValues,
    selectedIndex: selectedIndex,
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View>
          <Text h1>Energy calculator</Text>
        </View>
        <View>
          <DisplayResult
            formulaValues={formulaValues}
            formulaFunctions={formulaFunctions}
          />
        </View>
        <View>
          <Filters {...FiltersProps} />
          <SliderContainer {...SliderContainerProps} />
        </View>
        <View>
          <StatusBar style="auto" />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});
