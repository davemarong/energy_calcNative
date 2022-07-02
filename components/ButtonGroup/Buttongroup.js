// IMPORT

// REACT
import React, { useState } from "react";

// REACT NATIVE
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

// DATA
import { buttongroup_items } from "./Buttongroup_items";
import { allFormulaData } from "../../Data/formulaData/CombinedData";

// FUNCTIONAL COMPONENTS
const BtnGroup = ({
  setFormulaFunctions,
  setFormulaValues,
  setInputdata,
  selectedIndex,
  setSelectedIndex,
  setButtonGroup,
  buttonGroup,
}) => {
  // STATE
  // console.log(buttonGroup);
  // FUNCTIONS
  const handleSwitchFilter = (value, id) => {
    const { formulaValue, formulaFunctions, inputdata, buttonGroup } =
      allFormulaData[value];
    setFormulaFunctions(formulaFunctions);
    setFormulaValues(formulaValue);
    setInputdata(inputdata);
    setButtonGroup(buttonGroup);
    setSelectedIndex(id);
  };
  // RETURN
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnGroup}>
        {buttonGroup.map((button) => {
          return (
            // Maybe change to "Pressable" in the future
            <TouchableOpacity
              key={button.label}
              style={[
                styles.btn,
                selectedIndex === button.id
                  ? { backgroundColor: "#6B7280" }
                  : null,
              ]}
              onPress={() => {
                handleSwitchFilter(button.label, button.id);
              }}
            >
              <Text
                style={[
                  styles.btnText,
                  selectedIndex === button.id ? { color: "white" } : null,
                ]}
              >
                {button.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    overflow: "hidden",
    borderColor: "#0000001f",
    borderWidth: 1,
    height: 48,
  },
  btn: {
    flex: 1,
    borderRightWidth: 0.5,
    // borderRadius: 4,
    overflow: "hidden",
    borderLeftWidth: 0.5,
    borderColor: "#0000001f",
  },

  btnText: {
    textAlign: "center",
    paddingVertical: 16,
    fontSize: 14,
  },
});
export default BtnGroup;
