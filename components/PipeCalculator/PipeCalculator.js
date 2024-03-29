// IMPORT

// REACT
import { useState, useEffect } from "react";

// REACT NATIVE
import { StyleSheet, View, ScrollView, TextInput } from "react-native";

// REACT_NATIVE_ELEMENTS
import { Text } from "@rneui/themed";

// COMPONENTS
import { Slider } from "../../components/Slider/Slider";
import { SliderContainer } from "../../components/Slider/SliderContainer";
import { Filters } from "../../components/Filters/Filters";
import { DisplayResult } from "../../components/DisplayResult/DisplayResult";
import BtnGroup from "../../components/ButtonGroup/Buttongroup";

// UTILS

// DATA
// import { hastighet_inputdata } from "../../Data/formulaData/Inputdata";
// import { hastighet_link } from "../../Data/formulaData/FormulaFunctions";
// import { hastighet_formula_values } from "../../Data/formulaData/FormulaValues";
// import { pipe_buttonLabels } from "../../Data/formulaData/ButtonGroupLabels";
// import { apv_inputdata } from "../../Data/formulaData/InputData";
// import { apv_link } from "../../Data/formulaData/FormulaFunctions";
// import { apv_formula_values } from "../../Data/formulaData/FormulaValues";
// import { threeKv_buttonLabels } from "../../Data/formulaData/ButtonGroupLabels";

// OTHER
import { StatusBar } from "expo-status-bar";
import { Input } from "../Input/Input";
import { InputContainer } from "../Input/InputContainer";

// FUNCTIONAL COMPONENTS
export const PipeCalculator = ({ navigation, route: { params } }) => {
  // PROPS
  // STATE
  // User input values
  const [formulaValues, setFormulaValues] = useState(params.formulaValue);

  // The formula functions that calculate the result values
  const [formulaFunctions, setFormulaFunctions] = useState(
    params.formulaFunctions
  );

  // The data for the sliders/inputfields the user interacts with
  const [inputdata, setInputdata] = useState(params.inputdata);

  // The buttonGroup labels
  const [buttonGroup, setButtonGroup] = useState(params.buttonGroup);

  // The data for ToolTypes (PipeTypes = Stål, Kobber, Mepla...)
  const [toolTypes, setToolTypes] = useState(params.toolTypes);

  // The toggleButton/nav that is active."Trykkfall/Hastighet/Diameter"
  const [selectedIndex, setSelectedIndex] = useState(1);

  // The last values the user has put in the input fields.
  const [lastInputValues, setLastInputValues] = useState({});

  // EFFECT
  useEffect(() => {
    navigation.setOptions({
      title: params.currentTitle,
    });
  }, []);

  // PROPS OBJECT
  const ButtongroupProps = {
    setFormulaFunctions: setFormulaFunctions,
    setFormulaValues: setFormulaValues,
    setInputdata: setInputdata,
    setToolTypes: setToolTypes,
    selectedIndex: selectedIndex,
    setSelectedIndex: setSelectedIndex,
    buttonGroup: buttonGroup,
    setButtonGroup: setButtonGroup,
  };

  const SliderContainerProps = {
    inputdata: inputdata,
    setFormulaValues: setFormulaValues,
    selectedIndex: selectedIndex,
    lastInputValues: lastInputValues,
    setLastInputValues: setLastInputValues,
  };

  // FIX THIS - UGLY!!!
  let Inputcomp;
  if (params.inputType === "Slider") {
    Inputcomp = SliderContainer;
  } else {
    Inputcomp = InputContainer;
  }

  // RETURN
  return (
    <View>
      <View style={styles.container}>
        <View style={{ margin: 10 }}>
          <Text h4>{params.currentTitle}</Text>
        </View>
        <View style={{ margin: 10 }}>
          <DisplayResult
            formulaValues={formulaValues}
            formulaFunctions={formulaFunctions}
            toolTypes={toolTypes}
          />
        </View>
        <View style={{ height: 50, width: "80%", margin: 10 }}>
          <BtnGroup {...ButtongroupProps} />
        </View>
        <ScrollView style={{ width: "80%", margin: 10 }}>
          {/* <SliderContainer {...SliderContainerProps} /> */}
          <Inputcomp {...SliderContainerProps} />
        </ScrollView>
        <View>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // justifyContent: "center",
    alignItems: "center",
  },
});
