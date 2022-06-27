// IMPORT

// REACT
import { useState } from "react";

// REACT NATIVE
import { StyleSheet, View, Button } from "react-native";

// REACT_NATIVE_ELEMENTS
import { Text } from "@rneui/themed";

// COMPONENTS
import { Slider } from "./components/Slider/Slider";
import { SliderContainer } from "./components/Slider/SliderContainer";
import { Filters } from "./components/Filters/Filters";
import { DisplayResult } from "./components/DisplayResult/DisplayResult";
import AnimatedComp from "./components/AnimatedComp";
import BtnGroup from "./components/ButtonGroup/Buttongroup";
import { PipeCalculator } from "./components/PipeCalculator/PipeCalculator";
// UTILS

// DATA
import { trykkfall_sliderData } from "./formulaData/SliderData";
import { trykkfall_link } from "./formulaData/FormulaFunctions";
import { trykkfall_formula_values } from "./formulaData/FormulaValues";

// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// OTHER
import { StatusBar } from "expo-status-bar";
import { Home } from "./pages/Home";
import { Calc } from "./pages/Calc";

// FUNCTIONAL COMPONENTS
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

  // NAVIGATION
  const Stack = createNativeStackNavigator();

  const HomeProps = {
    formulaValues: formulaValues,
    setFormulaValues: setFormulaValues,
    formulaFunctions: formulaFunctions,
    setFormulaFunctions: setFormulaFunctions,
    sliderData: sliderData,
    setSliderData: setSliderData,
    selectedIndex: setSliderData,
    setSelectedIndex: setSelectedIndex,
  };
  // RETURN
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          initialRouteName="Home"
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: "My home",
            }}
            initialParams={{ ...HomeProps }}
          />
          <Stack.Screen
            name="Rør"
            component={PipeCalculator}
            options={{
              title: "Rør",
            }}
            initialParams={{ itemId: 42 }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    // justifyContent: "center",
    alignItems: "center",
  },
});
