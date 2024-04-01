import React, { useRef, useState, useEffect } from "react";
import OnboardingStyles from "../Styles/OnboardingStyles";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import { useFonts } from "expo-font";
import PhoneInput from "react-native-phone-number-input";
import axios from "axios";

const CreateAccount = ({ navigation }) => {
  const [customerData, setCustomerData] = useState({
    customer_ID: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  //Email Validation
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const isValidEmail = regex.test(customerData.email);

    if (customerData.email && !isValidEmail) {
      setEmailError("Please input a valid email address");
    } else {
      setEmailError("");
    }
  }, [customerData.email]);

  //Password Regex
  const [passwordError, setPasswordError] = useState();
  useEffect(() => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const isStrongPassword = regex.test(customerData.password);

    if (customerData.password && !isStrongPassword) {
      setPasswordError(
        "Your password should be 6 to 20 characters with 1 numeric digit, 1 uppercase and 1 lowercase letter"
      );
    } else {
      setPasswordError("");
    }
  });

  //Password Confirmation
  const [confirmationError, setConfirmationError] = useState("");
  useEffect(() => {
    if (customerData.password !== confirmPassword) {
      setConfirmationError("The passwords do not match!");
    } else {
      setConfirmationError("");
    }
  });

  //Check for white space
  const isEmptyOrWhitespace = (str) => {
    return (str ?? "").trim() === "";
  };

  // Event handler for form submission
  const [userExists, setUserExists] = useState("");
  
  const signUp = () => {
    const url =
      "http://ec2-18-133-195-128.eu-west-2.compute.amazonaws.com:8080/api/signup";

    //Preventing Empty Submissions
    if (
      !customerData.firstName ||
      !customerData.lastName ||
      !customerData.email ||
      !customerData.phoneNumber ||
      !customerData.password ||
      !confirmPassword
    ) {
      Alert.alert("Please fill in all required fields");
    } else if (emailError !== "") {
      Alert.alert("Please input a valid email address");
    } else if (passwordError !== "") {
      Alert.alert("Please set a strong password");
    } else if (confirmationError !== "") {
      Alert.alert("The passwords do not match");
    } else {
      axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json" },
        data: customerData,
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            navigation.navigate("Login");
          } else if (response.status === 409) {
            setUserExists("This user already exists");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    //
  };

  //Fonts
  let [fontLoaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo-VariableFont_wght.ttf"),
    DidactGothic: require("../assets/fonts/DidactGothic-Regular.ttf"),
  });

  //Phone
  const phoneInput = useRef();

  if (fontLoaded) {
    return (
      <View style={OnboardingStyles.createAccount}>
        <StatusBar barStyle="light-content" />
        <View style={OnboardingStyles.createAccountHeader}>
          <View style={OnboardingStyles.logoCircle}>
            <Image
              source={require("../Images/logo.png")}
              style={OnboardingStyles.createAccountLogo}
            />
          </View>
        </View>

        {/* Create Account Form */}
        <View style={OnboardingStyles.createAccountForm}>
          <Text
            style={[
              { fontFamily: "Arimo" },
              OnboardingStyles.createAccountTitle,
            ]}
          >
            Create Your Account
          </Text>

          {/* First Name */}
          <View style={OnboardingStyles.signupForm}>
            <TextInput
              style={[
                { fontFamily: "DidactGothic" },
                OnboardingStyles.inputField,
              ]}
              placeholder="First Name"
              selectionColor={"black"}
              value={customerData.firstName}
              onChange={(e) =>
                setCustomerData({
                  ...customerData,
                  firstName: e.nativeEvent.text,
                })
              }
            />

            {/* Last Name */}
            <TextInput
              style={[
                { fontFamily: "DidactGothic" },
                OnboardingStyles.inputField,
              ]}
              placeholder="Last Name"
              selectionColor={"black"}
              value={customerData.lastName}
              onChange={(e) =>
                setCustomerData({
                  ...customerData,
                  lastName: e.nativeEvent.text,
                })
              }
            />

            {/* Email */}
            <TextInput
              style={[
                { fontFamily: "DidactGothic" },
                OnboardingStyles.inputField,
              ]}
              placeholder="Email"
              selectionColor={"black"}
              value={customerData.email}
              onChange={(e) =>
                setCustomerData({ ...customerData, email: e.nativeEvent.text })
              }
            />
            {!isEmptyOrWhitespace(emailError) && (
              <Text style={OnboardingStyles.errorText}>{emailError}</Text>
            )}

            {/* Phone Number */}
            <PhoneInput
              ref={phoneInput}
              defaultValue=""
              defaultCode="KE"
              containerStyle={OnboardingStyles.phoneInput}
              textContainerStyle={OnboardingStyles.phoneInputField}
              textInputStyle={[
                { fontFamily: "DidactGothic" },
                OnboardingStyles.phoneTextInput,
              ]}
              flagButtonStyle={OnboardingStyles.flagButton}
              codeTextStyle={OnboardingStyles.code}
              value={customerData.phoneNumber}
              onChangeFormattedText={(text) => {
                setCustomerData({ ...customerData, phoneNumber: text });
              }}
            />

            {/* Password */}
            <TextInput
              style={[
                { fontFamily: "DidactGothic" },
                OnboardingStyles.inputField,
              ]}
              placeholder="Password"
              selectionColor={"black"}
              secureTextEntry={true}
              value={customerData.password}
              onChange={(e) =>
                setCustomerData({
                  ...customerData,
                  password: e.nativeEvent.text,
                })
              }
            />
            {!isEmptyOrWhitespace(passwordError) && (
              <Text style={OnboardingStyles.errorText}>{passwordError}</Text>
            )}

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
              onPress={signUp}
            >
              <Text
                style={[
                  { fontFamily: "Arimo" },
                  OnboardingStyles.signupBtnText,
                ]}
              >
                Create Your Account
              </Text>
            </TouchableOpacity>
            <View style={OnboardingStyles.alreadyHaveAccount}>
              <Text
                style={[
                  { fontFamily: "DidactGothic" },
                  OnboardingStyles.alreadyText,
                ]}
              >

                {!isEmptyOrWhitespace(userExists) && (
                  <Text style={OnboardingStyles.errorText}>{userExists}</Text>
                )}

                Already have an account?
              </Text>
              <Text
                style={[
                  { fontFamily: "DidactGothic" },
                  OnboardingStyles.loginLink,
                ]}
                onPress={() => navigation.navigate("Login")}
              >
                Log in
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
};
export default CreateAccount;
