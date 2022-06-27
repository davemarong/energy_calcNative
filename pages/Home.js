// IMPORT

// REACT
import { useState } from "react";

// REACT NATIVE
import { StyleSheet, View, Button } from "react-native";

// REACT_NATIVE_ELEMENTS
import { Text } from "@rneui/themed";

// COMPONENTS
import { Slider } from "../components/Slider/Slider";
import { SliderContainer } from "../components/Slider/SliderContainer";
import { Filters } from "../components/Filters/Filters";
import { DisplayResult } from "../components/DisplayResult/DisplayResult";
import AnimatedComp from "../components/AnimatedComp";
import BtnGroup from "../components/ButtonGroup/Buttongroup";

// UTILS

// DATA
import { trykkfall_sliderData } from "../formulaData/SliderData";
import { trykkfall_link } from "../formulaData/FormulaFunctions";
import { trykkfall_formula_values } from "../formulaData/FormulaValues";

// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Tab } from "@react-navigation/native";

// OTHER
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// FUNCTIONAL COMPONENTS
export const Home = (props) => {
  // PROPS
  const { navigation } = props;
  const {
    formulaValues,
    setFormulaValues,
    formulaFunctions,
    setFormulaFunctions,
    sliderData,
    setSliderData,
    selectedIndex,
    setSelectedIndex,
  } = props.route.params;

  // STATE

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
      <Button
        title="Go to Calc"
        onPress={() => navigation.navigate("Calculator")}
      />
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
