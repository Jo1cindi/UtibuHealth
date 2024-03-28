import * as React from "react";
import { NavigationContainer } from "./node_modules/@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./Screens/SplashScreen";
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splashscreen"
          component={SplashScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
