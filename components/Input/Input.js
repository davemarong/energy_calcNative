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
export const Input = ({ inputdata, setFormulaValues, selectedIndex }) => {
  // PROPS
  const { marks, step, min, max, label, metric, defaultValue, stateName } =
    inputdata;

  // STATE
  const [value, setValue] = useState(defaultValue);
  // FUNCTIONS
  const handleUpdateFormulaValue = (value) => {
    console.log(value);
    setFormulaValues((prev) => {
      console.log({
        ...prev,
        [stateName]: { ...prev[stateName], value: value },
      });
      return { ...prev, [stateName]: { ...prev[stateName], value: value } };
    });
  };

  // UseEffect
  useEffect(() => {
    handleUpdateFormulaValue(value);
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
          <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: 1,
              width: "100%",
            }}
          />
          <View style={styles.inputContainer}>
            <Text>{metric}</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={value.toString()}
              onChangeText={setValue}
              onChange={(e) => {
                e.persist();
                handleUpdateFormulaValue(Number(e.nativeEvent.text));
              }}
            />
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
    flexWrap: "wrap",
    borderColor: "#0000001f",
    borderWidth: 1,
    padding: 20,
    borderRadius: 4,
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: { width: "100%", fontSize: "18px" },
  input: {
    height: 40,
    width: 60,
    padding: 0,
    fontSize: "30px",
    borderBottomWidth: 0,
  },
});
