import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import OnboardingStyles from "../Styles/OnboardingStyles";
import { Controller, useForm } from "react-hook-form";
import { useFonts } from "expo-font";

const AccountVerification = ({navigation}) => {
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
      <View style={OnboardingStyles.accountVerification}>
        <View style={OnboardingStyles.illustration}>
          <Image
            source={require("../Images/illustration.png")}
            style={OnboardingStyles.illustrationImage}
          />
        </View>

        <View style={OnboardingStyles.verificationForm}>
          <Text
            style={[
              { fontFamily: "Arimo" },
              OnboardingStyles.createAccountTitle,
            ]}
          >
            Verify your email address
          </Text>
          <Text
            style={[
              { fontFamily: "DidactGothic" },
              { color: "gray" },
              { fontSize: 16 },
              { width: "80%" },
              { textAlign: "center" },
            ]}
          >
            Please enter the 4-digit code sent to your email address
          </Text>

          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                style={[
                  { fontFamily: "DidactGothic" },
                  OnboardingStyles.verificationInput,
                ]}
                placeholder="Enter the verification code"
                selectionColor={"black"}
              />
            )}
            name="name"
            rules={{ required: "You must enter your name" }}
          />

          {errors.name && (
            <Text style={styles.errorText}>{errors.name.message}</Text>
          )}

          <TouchableOpacity style={OnboardingStyles.verificationButton} onPress={()=> navigation.navigate('Login')}>
              <Text
                style={[
                  { fontFamily: "Arimo" },
                  OnboardingStyles.signupBtnText,
                ]}
              >
                Verify Email Address
              </Text>
            </TouchableOpacity>
            <Text style={[{fontFamily: 'DidactGothic'}, OnboardingStyles.resend]}>Resend code</Text>
        </View>
      </View>
    );
  }
};

export default AccountVerification;
