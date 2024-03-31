import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import OnboardingStyles from "../Styles/OnboardingStyles";
import { useFonts } from "expo-font";

const Login = ({ navigation }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  //Login
  const login = () => {
    console.log(loginData);

    if (!loginData.email || loginData.password) {
      Alert.alert("Please fill in all required fields");
    } else if (emailError !== "") {
      Alert.alert("Please input a valid email address");
    }
  };

  //Email Validation
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const isValidEmail = regex.test(customerData.email);

    if (loginData.email && !isValidEmail) {
      setEmailError("Please input a valid email address");
    } else {
      setEmailError("");
    }
  }, [loginData.email]);

  //Check for white space
  const isEmptyOrWhitespace = (str) => {
    return (str ?? "").trim() === "";
  };

  //Fonts
  let [fontLoaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo-VariableFont_wght.ttf"),
    DidactGothic: require("../assets/fonts/DidactGothic-Regular.ttf"),
  });

  if (fontLoaded) {
    return (
      <View style={OnboardingStyles.Login}>
        <View style={OnboardingStyles.loginHeader}>
          <View style={OnboardingStyles.loginLogoCircle}>
            <Image
              source={require("../Images/logo2.png")}
              style={OnboardingStyles.loginLogo}
            />
          </View>
        </View>
        {/* Login Form */}
        <View style={OnboardingStyles.loginForm}>
          <Text style={[{ fontFamily: "Arimo" }, OnboardingStyles.loginTitle]}>
            Login to your account
          </Text>

          <View style={OnboardingStyles.signinForm}>
            {/* Email */}
            <TextInput
              style={[
                { fontFamily: "DidactGothic" },
                OnboardingStyles.inputField,
              ]}
              placeholder="Email"
              selectionColor={"black"}
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.nativeEvent.text })
              }
            />
            {!isEmptyOrWhitespace(emailError) && (
              <Text style={OnboardingStyles.errorText}>{emailError}</Text>
            )}
            {/* Password */}
            <TextInput
              style={[
                { fontFamily: "DidactGothic" },
                OnboardingStyles.inputField,
              ]}
              placeholder="Password"
              selectionColor={"black"}
              secureTextEntry={true}
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.nativeEvent.text })
              }
            />

            {/* Button */}
            <TouchableOpacity
              style={OnboardingStyles.signinBtn}
              onPress={login}
            >
              <Text
                style={[
                  { fontFamily: "Arimo" },
                  OnboardingStyles.signinBtnText,
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>
            <View style={OnboardingStyles.forgotPassword}>
              <Text
                style={[
                  { fontFamily: "DidactGothic" },
                  OnboardingStyles.alreadyText,
                ]}
              >
                Forgot Password?
              </Text>
              <Text
                style={[
                  { fontFamily: "DidactGothic" },
                  OnboardingStyles.resetpwLink,
                ]}
                onPress={() => navigation.navigate("ResetPassword")}
              >
                Reset Password
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

export default Login;
