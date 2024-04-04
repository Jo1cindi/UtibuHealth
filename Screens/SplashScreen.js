import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import OnboardingStyles from "../Styles/OnboardingStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
  const [timeoutReached, setTimeoutReached] = useState(false);


  //Navigation
  const navigateToScreens = async () => {
  
    //Getting auth token
    // try {
    //   const token = await AsyncStorage.getItem('authToken');
    //   if(token){
    //     navigation.navigate("Home");
    //   }else{
    //     navigation.navigate("CreateAccount");
    //   }
    //   console.log(token)
    //   return token;
    // } catch (error) {
    //   console.error('Error retrieving authentication token:', error);
    //   return null;
    // }

    navigation.navigate("Login")
     
    

  };
  
  //Navigating to Create Account
  useEffect(() => {
    const timeout = setTimeout(() => navigateToScreens(), 4000)
    
    
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
