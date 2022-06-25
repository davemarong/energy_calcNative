// IMPORT

// REACT

// REACT NATIVE
import { View } from "react-native";

// REACT_NATIVE_ELEMENTS
import { ListItem, Text } from "@rneui/themed";

// COMPONENTS

// UTILS

// DATA

// FUNCTIONAL COMPONENTS
export const DisplayResult = ({ formulaValues, formulaFunctions }) => {
  // STATE

  // FUNCTIONS
  const result = formulaFunctions.map((item) => {
    return {
      label: item.label,
      value: item.func(formulaValues),
      metric: item.metric,
    };
  });

  // RETURN
  return (
    <View>
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
