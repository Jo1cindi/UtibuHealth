import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import OnboardingStyles from "../Styles/OnboardingStyles";
import { useFonts } from "expo-font";

const ResetPassword = () => {
  const [resetData, setResetData] = useState({
    email: "",
    newPassword: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  //Email Validation
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const isValidEmail = regex.test(resetData.email);

    if (resetData.email && !isValidEmail) {
      setEmailError("Please input a valid email address");
    } else {
      setEmailError("");
    }
  }, [resetData.email]);

  //Password Validation
  const [passwordError, setPasswordError] = useState();
  useEffect(() => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const isStrongPassword = regex.test(resetData.newPassword);

    if (resetData.newPassword && !isStrongPassword) {
      setPasswordError(
        "Your password should be 6 to 20 characters with 1 numeric digit, 1 uppercase and 1 lowercase letter"
      );
    } else {
      setPasswordError("");
    }
  }, [resetData.newPassword]);

  //Password Confirmation
  const [confirmationError, setConfirmationError] = useState("");
  useEffect(() => {
    if (resetData.newPassword !== confirmPassword) {
      setConfirmationError("The passwords do not match!");
    } else {
      setConfirmationError("");
    }
  });

  //Check for white space
  const isEmptyOrWhitespace = (str) => {
    return (str ?? "").trim() === "";
  };

  //Reset Password
  const handleResetPassword = () => {
    console.log(resetData);
    if (!resetData.newPassword || !resetData.email) {
      Alert.alert("Please fill in all required fields");
    } else if (resetData.newPassword !== confirmPassword) {
      Alert.alert("The passwords do not match");
    }
  };

  //Fonts
  let [fontLoaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo-VariableFont_wght.ttf"),
    DidactGothic: require("../assets/fonts/DidactGothic-Regular.ttf"),
  });

  if (fontLoaded) {
    return (
      <View style={OnboardingStyles.resetPassword}>
        <View style={OnboardingStyles.createAccountHeader}>
          <View style={OnboardingStyles.logoCircle}>
            <Image
              source={require("../Images/logo.png")}
              style={OnboardingStyles.createAccountLogo}
            />
          </View>
        </View>
        {/* Reset Password Form */}
        <View style={OnboardingStyles.loginForm}>
          <Text
            style={[
              { fontFamily: "Arimo" },
              OnboardingStyles.createAccountTitle,
            ]}
          >
            Reset Your Password
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
              value={resetData.email}
              onChange={(e) =>
                setResetData({ ...resetData, email: e.nativeEvent.text })
              }
            />
            {!isEmptyOrWhitespace(emailError) && (
              <Text style={OnboardingStyles.errorText}>{emailError}</Text>
            )}
            <TextInput
              style={[
                { fontFamily: "DidactGothic" },
                OnboardingStyles.inputField,
              ]}
              placeholder="New Password"
              selectionColor={"black"}
              secureTextEntry={true}
              value={resetData.newPassword}
              onChange={(e) =>
                setResetData({ ...resetData, newPassword: e.nativeEvent.text })
              }
            />
            {!isEmptyOrWhitespace(passwordError) && (
              <Text style={OnboardingStyles.errorText}>{passwordError}</Text>
            )}
            {/* Password */}
            <TextInput
              style={[
                { fontFamily: "DidactGothic" },
                OnboardingStyles.inputField,
              ]}
              placeholder="Confirm Password"
              selectionColor={"black"}
              secureTextEntry={true}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.nativeEvent.text)}
            />
            {!isEmptyOrWhitespace(confirmationError) && (
              <Text style={OnboardingStyles.errorText}>
                {confirmationError}
              </Text>
            )}
            {/* Button */}
            <TouchableOpacity
              style={OnboardingStyles.signupBtn}
              onPress={handleResetPassword}
            >
              <Text
                style={[
                  { fontFamily: "Arimo" },
                  OnboardingStyles.signinBtnText,
                ]}
              >
                Reset Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

export default ResetPassword;
