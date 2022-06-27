// IMPORT

// REACT
import { useState } from "react";

// REACT NATIVE
import { StyleSheet, View, Button } from "react-native";

// REACT_NATIVE_ELEMENTS
import { Text, ListItem } from "@rneui/themed";

// COMPONENTS
import { Slider } from "../components/Slider/Slider";
import { SliderContainer } from "../components/Slider/SliderContainer";
import { Filters } from "../components/Filters/Filters";
import { DisplayResult } from "../components/DisplayResult/DisplayResult";
import AnimatedComp from "../components/AnimatedComp";
import BtnGroup from "../components/ButtonGroup/Buttongroup";

// UTILS

// DATA

// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Tab } from "@react-navigation/native";

// OTHER
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// FUNCTIONAL COMPONENTS
export const Home = (props) => {
  // PROPS
  const { navigation } = props;
  const {
    formulaValues,
    setFormulaValues,
    formulaFunctions,
    setFormulaFunctions,
    sliderData,
    setSliderData,
    selectedIndex,
    setSelectedIndex,
  } = props.route.params;

  // STATE

  // NAVIGATION
  const Stack = createNativeStackNavigator();

  // PROPS OBJECT
  const ButtongroupProps = {
    setFormulaFunctions: setFormulaFunctions,
    setFormulaValues: setFormulaValues,
    setSliderData: setSliderData,
    selectedIndex: selectedIndex,
    setSelectedIndex: setSelectedIndex,
  };

  const SliderContainerProps = {
    sliderData: sliderData,
    setFormulaValues: setFormulaValues,
    selectedIndex: selectedIndex,
  };

  const homeMeny_items = [
    {
      title: "Rør",
      content:
        "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
      id: 0,
      route: "Rør",
    },
    {
      title: "Vann",
      content:
        "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
      id: 1,
      route: "Vann",
    },
    {
      title: "Betong",
      content:
        "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
      id: 2,
      route: "Betong",
    },
    {
      title: "Klima",
      content:
        "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
      id: 3,
      route: "Klima",
    },
    {
      title: "Annsidig",
      content:
        "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
      id: 4,
      route: "Annsidig",
    },
  ];

  // RETURN
  return (
    <View style={styles.container}>
      {homeMeny_items.map((item) => {
        return (
          <ListItem
            style={styles.item}
            key={item.id}
            onPress={() => {
              navigation.navigate(item.route);
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
  },
});
