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
export const DisplayResult_Dimensjonering = ({
  formulaValues,
  formulaFunctions,
}) => {
  // STATE

  // FUNCTIONS
  const result = formulaFunctions.map((item) => {
    return {
      label: item.label,
      value: item.func(formulaValues),
      metric: item.metric,
    };
  });

  const [selected, setSelected] = useState("");

  // RETURN
  return (
    <View>
      <SelectList
        setSelected={setSelected}
        data={data}
        onSelect={() => alert(selected)}
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
