import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import OnboardingStyles from "../Styles/OnboardingStyles";
import { useFonts } from "expo-font";
import { Controller, useForm } from "react-hook-form";

const Login = ({navigation}) => {
  //Form Controllers
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  style={[
                    { fontFamily: "DidactGothic" },
                    OnboardingStyles.inputField,
                  ]}
                  placeholder="Email"
                  selectionColor={"black"}
                />
              )}
              name="email"
              rules={{
                required: "You must enter your name",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address",
                },
              }}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            )}

            {/* Password */}
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  style={[
                    { fontFamily: "DidactGothic" },
                    OnboardingStyles.inputField,
                  ]}
                  placeholder="Password"
                  selectionColor={"black"}
                  secureTextEntry={true}
                />
              )}
              name="password"
              rules={{
                required: "You must enter your name",
                pattern: {
                  value: /^[A-Za-z]\w{7,14}$/,
                  message: "Use a strong password",
                },
              }}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}

            {/* Button */}
            <TouchableOpacity style={OnboardingStyles.signinBtn}>
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
