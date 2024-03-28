import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import OnboardingStyles from "../Styles/OnboardingStyles";

const SplashScreen = ({ navigation }) => {
  const [timeoutReached, setTimeoutReached] = useState(false);

  //Navigation
  const navigateToScreens = () => {
    navigation.navigate("CreateAccount");
  };
  
  //Navigating to Create Account
  useEffect(() => {
    const timeout = setTimeout(() => navigateToScreens(), 4000);

    // // //Clean up timeout
    // clearTimeout(timeout);
    
    
  }, []);

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
