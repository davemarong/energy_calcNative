// IMPORT

// REACT
import { useState } from "react";

// REACT NATIVE
import { View } from "react-native";

// REACT_NATIVE_ELEMENTS
import { ListItem, Text } from "@rneui/themed";

// COMPONENTS

// LIBRARIES
import SelectList from "react-native-dropdown-select-list";

// UTILS

// DATA

// FUNCTIONAL COMPONENTS
export const DisplayResult = ({
  formulaValues,
  formulaFunctions,
  toolTypes,
}) => {
  // STATE
  // This is the selected toolType value that will be used in the formulas
  const [selected, setSelected] = useState("");
  // FUNCTIONS
  console.log(formulaFunctions);
  const result = formulaFunctions.map((item) => {
    return {
      label: item.label,
      value: item.func(formulaValues, selected),
      metric: item.metric,
    };
  });
  console.log(result);
  // RETURN
  return (
    <View>
      <SelectList
        setSelected={setSelected}
        data={toolTypes}
        defaultOption={{ key: "Stålrør", value: "Stålrør" }}
      />
      {result.map((item) => {
        return (
          <ListItem key={item.label}>
            <Text>{item.label}</Text>
            <Text>
              {item.value} {item.metric}
            </Text>
          </ListItem>
        );
      })}
    </View>
  );
};
