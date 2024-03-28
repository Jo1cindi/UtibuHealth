import React, { useRef } from "react";
import OnboardingStyles from "../Styles/OnboardingStyles";
import { View, Image, Text, TextInput, TouchableOpacity, Linking } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useFonts } from "expo-font";
import PhoneInput from "react-native-phone-number-input";

const CreateAccount = () => {
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

  //Phone
  const phoneInput = useRef();

  if (fontLoaded) {
    return (
      <View style={OnboardingStyles.createAccount}>
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
          {/* <Text style={[{ fontFamily: "Arimo" }, OnboardingStyles.welcome]}>
            Welcome to Utibu Health
          </Text> */}
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
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  style={[
                    { fontFamily: "DidactGothic" },
                    OnboardingStyles.inputField,
                  ]}
                  placeholder="First Name"
                  selectionColor={"black"}
                />
              )}
              name="name"
              rules={{ required: "You must enter your name" }}
            />

            {errors.name && (
              <Text style={styles.errorText}>{errors.name.message}</Text>
            )}

            {/* Last Name */}
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  style={[
                    { fontFamily: "DidactGothic" },
                    OnboardingStyles.inputField,
                  ]}
                  placeholder="Last Name"
                  selectionColor={"black"}
                />
              )}
              name="name"
              rules={{ required: "You must enter your name" }}
            />

            {errors.name && (
              <Text style={styles.errorText}>{errors.name.message}</Text>
            )}

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

            {/* Phone Number */}
            <PhoneInput
              ref={phoneInput}
              defaultValue=""
              defaultCode="KE"
              // onChangeFormattedText={(text) => {
              //   setValue(text);
              // }}
              containerStyle={OnboardingStyles.phoneInput}
              textContainerStyle={OnboardingStyles.phoneInputField}
              textInputStyle={[
                { fontFamily: "DidactGothic" },
                OnboardingStyles.phoneTextInput,
              ]}
              flagButtonStyle={OnboardingStyles.flagButton}
              codeTextStyle={OnboardingStyles.code}
            />

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
              name="confirmpassword"
              rules={{
                required: "You must enter your name",
                pattern: {
                  value: /^[A-Za-z]\w{7,14}$/,
                  message: "Use a strong password",
                },
              }}
            />
            {errors.email && (
              <Text style={styles.errorText}>
                {errors.confirmpassword.message}
              </Text>
            )}

            {/* Button */}
            <TouchableOpacity style={OnboardingStyles.signupBtn}>
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
             <Text style={[{fontFamily: 'DidactGothic'}, OnboardingStyles.alreadyText]}>Already have an account?</Text>
             <Text style={[{fontFamily: 'DidactGothic'}, OnboardingStyles.loginLink]}>Log in</Text>
          </View>
          </View>
        </View>
      </View>
    );
  }
};
export default CreateAccount;
