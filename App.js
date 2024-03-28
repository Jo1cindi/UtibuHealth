import * as React from "react";
import { NavigationContainer } from "./node_modules/@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./Screens/SplashScreen";
import CreateAccount from "./Screens/CreateAccount";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name=" " component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Splashscreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
