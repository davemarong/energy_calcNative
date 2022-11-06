// IMPORT

// REACT

// REACT NATIVE
import { StyleSheet, View, Button } from "react-native";

// REACT_NATIVE_ELEMENTS
import { Text, ListItem } from "@rneui/themed";

// COMPONENTS

// UTILS

// DATA
import { homeMeny_items } from "../Data/Items/Items";
import { allFormulaData } from "../Data/formulaData/CombinedData";

// OTHER

// FUNCTIONAL COMPONENTS
export const Home = ({ route: { params: menyItems }, navigation }) => {
  // PROPS
  console.log(menyItems, navigation);

  // PROPS OBJECT
  const findDefaultFormula = (formulaTitle) => allFormulaData[formulaTitle];

  // RETURN
  return (
    <View style={styles.container}>
      {menyItems.map((item) => {
        return (
          <ListItem
            style={styles.item}
            key={item.id}
            onPress={() => {
              const defaultFormula = findDefaultFormula(item.defaultFormula);
              console.log(defaultFormula);
              navigation.navigate(item.route, {
                ...defaultFormula,
                inputType: item.inputType,
              });
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.content}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: "90%",
  },
  item: {
    width: "auto",
    borderWidth: 1,
    margin: 10,
  },
});
