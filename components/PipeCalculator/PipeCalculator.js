// IMPORT

// REACT
import { useState } from "react";

// REACT NATIVE
import { StyleSheet, View, Button } from "react-native";

// REACT_NATIVE_ELEMENTS
import { Text } from "@rneui/themed";

// COMPONENTS
import { Slider } from "../../components/Slider/Slider";
import { SliderContainer } from "../../components/Slider/SliderContainer";
import { Filters } from "../../components/Filters/Filters";
import { DisplayResult } from "../../components/DisplayResult/DisplayResult";
import AnimatedComp from "../../components/AnimatedComp";
import BtnGroup from "../../components/ButtonGroup/Buttongroup";

// UTILS

// DATA
import { trykkfall_sliderData } from "../../formulaData/SliderData";
import { trykkfall_link } from "../../formulaData/FormulaFunctions";
import { trykkfall_formula_values } from "../../formulaData/FormulaValues";

// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// OTHER
import { StatusBar } from "expo-status-bar";

// FUNCTIONAL COMPONENTS
export const PipeCalculator = ({ navigation }) => {
  // STATE
  // User input values
  const [formulaValues, setFormulaValues] = useState(trykkfall_formula_values);

  // The formula functions that calculate the result values
  const [formulaFunctions, setFormulaFunctions] = useState(trykkfall_link);

  // The data for the sliders the user interacts with
  const [sliderData, setSliderData] = useState(trykkfall_sliderData);

  // The toggleButton/nav that is active."Trykkfall/Hastighet/Diameter"
  const [selectedIndex, setSelectedIndex] = useState(0);

  // NAVIGATION
  const Stack = createNativeStackNavigator();

  // PROPS OBJECT
  const ButtongroupProps = {
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

  // RETURN
  return (
    <View>
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
        <View style={{ width: "80%", height: 300 }}>
          {/* <Filters {...FiltersProps} /> */}
          <BtnGroup {...ButtongroupProps} />
          <SliderContainer {...SliderContainerProps} />
        </View>
        <View>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    // justifyContent: "center",
    alignItems: "center",
  },
});
