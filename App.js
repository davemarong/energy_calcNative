// IMPORT

// REACT
import { useState } from "react";

// REACT NATIVE
import { StyleSheet, View, Button } from "react-native";

// REACT_NATIVE_ELEMENTS
import { Text } from "@rneui/themed";

// COMPONENTS
import { Slider } from "./components/Slider/Slider";
import { SliderContainer } from "./components/Slider/SliderContainer";
import { Filters } from "./components/Filters/Filters";
import { DisplayResult } from "./components/DisplayResult/DisplayResult";
import BtnGroup from "./components/ButtonGroup/Buttongroup";
import { PipeCalculator } from "./components/PipeCalculator/PipeCalculator";
// UTILS

// DATA

// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// OTHER
import { StatusBar } from "expo-status-bar";
import { StartPage } from "./pages/StartPage";
import { Home } from "./pages/Home";
import { Calc } from "./pages/Calc";

// FUNCTIONAL COMPONENTS
export default function App() {
  // STATE

  // NAVIGATION
  const Stack = createNativeStackNavigator();

  // RETURN
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          initialRouteName="StartPage"
        >
          <Stack.Screen
            name="StartPage"
            component={StartPage}
            options={{
              headerTitle: "Home",
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            // options={{
            //   headerTitle: "Formler",
            // }}
            options={({ route }) => ({ title: route.params.name })}
          />
          <Stack.Screen
            name="Rør"
            component={PipeCalculator}
            // options={{
            //   title: "Rør",
            // }}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    // justifyContent: "center",
    alignItems: "center",
  },
});
