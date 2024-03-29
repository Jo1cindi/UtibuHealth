import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import OnboardingStyles from "../Styles/OnboardingStyles";
import { useFonts } from "expo-font";
import { Controller, useForm } from "react-hook-form";

const ResetPassword = () => {
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
      <View style={OnboardingStyles.resetPassword}>
        <View style={OnboardingStyles.createAccountHeader}>
          <View style={OnboardingStyles.logoCircle}>
            <Image
              source={require("../Images/logo.png")}
              style={OnboardingStyles.createAccountLogo}
            />
          </View>
        </View>
        {/* Login Form */}
        <View style={OnboardingStyles.loginForm}>
          <Text style={[{ fontFamily: "Arimo" }, OnboardingStyles.createAccountTitle]}>
            Reset Your Password
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
                  placeholder="New Password"
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
                  placeholder="Confirm Password"
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
            <TouchableOpacity style={OnboardingStyles.signupBtn}>
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
