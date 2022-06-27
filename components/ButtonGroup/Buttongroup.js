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
import { allFormulaData } from "../../formulaData/CombinedData";

// FUNCTIONAL COMPONENTS
const BtnGroup = ({
  setFormulaFunctions,
  setFormulaValues,
  setSliderData,
  selectedIndex,
  setSelectedIndex,
}) => {
  // STATE
  const [selection, setSelection] = useState(1);

  // FUNCTIONS
  const handleSwitchFilter = (value) => {
    const { formulaValue, formulaFunctions, sliderData } =
      allFormulaData[value];
    setFormulaFunctions(formulaFunctions);
    setFormulaValues(formulaValue);
    setSliderData(sliderData);
    setSelectedIndex(value);
  };

  // RETURN
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnGroup}>
        {buttongroup_items.map((button) => {
          return (
            <TouchableOpacity
              key={button.label}
              style={[
                styles.btn,
                selection === button.id ? { backgroundColor: "#6B7280" } : null,
              ]}
              onPress={() => {
                setSelection(button.id);
                handleSwitchFilter(button.label);
              }}
            >
              <Text
                style={[
                  styles.btnText,
                  selection === button.id ? { color: "white" } : null,
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
