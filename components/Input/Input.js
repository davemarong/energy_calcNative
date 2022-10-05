// IMPORT

// REACT
import { useState, useEffect, useRef } from "react";

// REACT NATIVE
import { View, StyleSheet, TextInput, ScrollView } from "react-native";

// REACT_NATIVE_ELEMENTS
import { Input as InputElement, Text } from "@rneui/themed";

// COMPONENTS

// UTILS

// DATA

// FUNCTIONAL COMPONENTS
export const Input = ({
  inputdata,
  setFormulaValues,
  selectedIndex,
  lastInputValues,
  setLastInputValues,
}) => {
  // PROPS
  const { marks, step, min, max, label, metric, defaultValue, stateName } =
    inputdata;

  // STATE
  const [value, setValue] = useState(defaultValue);

  // FUNCTIONS
  const handleUpdateFormulaValue = (value) => {
    const updatedValue = turnStringToNumber(value);
    setFormulaValues((prev) => {
      return {
        ...prev,
        [stateName]: { ...prev[stateName], value: updatedValue },
      };
    });
  };
  const turnStringToNumber = (value) => {
    if (value.toString().includes(",")) {
      return Number(value.toString().replaceAll(",", "."));
    }
    return value;
  };

  // Find if a lastInputValue exists. If it does, set the current inputvalue to that
  const findLastInputValue = () => {
    let updatedValue;
    Object.entries(lastInputValues).forEach((value) => {
      if (value[0] === stateName) {
        setValue(value[1]);
        updatedValue = value[1];
        return;
      }
    });
    return updatedValue;
  };
  // Update the lastInputValue list every time a new value is set
  const handleUpdateLastValue = (value, valueLabel) => {
    setLastInputValues((prev) => {
      return {
        ...prev,
        [valueLabel]: value,
      };
    });
  };

  // UseEffect
  useEffect(() => {
    const updatedValue = findLastInputValue();
    console.log(updatedValue);
    if (updatedValue) {
      handleUpdateFormulaValue(updatedValue);
    } else {
      handleUpdateFormulaValue(value);
    }
  }, [selectedIndex]);

  // RETURN
  return (
    <>
      {/* <View style={styles.container}> */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          // alignItems: "center",
          // flexDirection: "row",
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.inputField}>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={value.toString()}
              onChangeText={setValue}
              onChange={(e) => {
                e.persist();
                handleUpdateFormulaValue(e.nativeEvent.text);
                handleUpdateLastValue(e.nativeEvent.text, stateName);
              }}
            />
            <Text style={{ marginLeft: 5 }}>{metric}</Text>
          </View>
        </View>
      </ScrollView>
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderColor: "#0000001f",
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  label: { fontSize: "18px" },
  input: {
    height: 40,
    width: "auto",
    padding: 0,
    paddingRight: 20,
    fontSize: "30px",
    borderBottomWidth: 0,
  },
});
