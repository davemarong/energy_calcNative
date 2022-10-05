// IMPORT

// REACT

// REACT NATIVE
import { StyleSheet, View, Button } from "react-native";

// REACT_NATIVE_ELEMENTS
import { Text, ListItem } from "@rneui/themed";

// COMPONENTS

// UTILS

// DATA
import { allMeny_item } from "../Data/Items/Items";
// OTHER

// FUNCTIONAL COMPONENTS
export const StartPage = (props) => {
  // PROPS
  const { navigation } = props;

  // PROPS OBJECT

  // RETURN
  return (
    <View style={styles.container}>
      {allMeny_item.map((item) => {
        return (
          <ListItem
            style={styles.item}
            key={item.id}
            onPress={() => {
              navigation.navigate("Home", item.menyItems);
            }}
          >
            <ListItem.Title>{item.title}</ListItem.Title>
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
    backgroundColor: "#f4511e",
    margin: 40,
    // padding: "16px",
  },
});
