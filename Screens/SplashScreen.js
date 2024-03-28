import React from "react";
import { View, Image } from "react-native";
import OnboardingStyles from "../Styles/OnboardingStyles";


const SplashScreen = () => {
  return (
    <View style={OnboardingStyles.splashStyle}>
      <Image
        source={require("../Images/logo.png")}
        style={OnboardingStyles.logo}
      ></Image>
    </View>
  );
};

export default SplashScreen;
