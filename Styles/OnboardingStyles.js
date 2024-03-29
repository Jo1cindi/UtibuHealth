import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

//Colors
const green = "#465902";
const white = "#EEEEEE";
const red = "#592502";

const OnboardingStyles = StyleSheet.create({
  // Splash Screen
  splashStyle: {
    backgroundColor: white,
    height: height,
    width: width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  // Create Account
  createAccount: {
    height: height,
    width: width,
    backgroundColor: white,
  },
  createAccountHeader: {
    width: width,
    height: 150,
    backgroundColor: red,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  logoCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: white,
    position: "absolute",
    top: 85,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  createAccountLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  createAccountForm: {
    width: width,
    height: "70%",
    marginTop: 70,
    display: "flex",
    alignItems: "center",
  },
  welcome: {
    textAlign: "center",
    fontSize: 24,
    color: green,
    fontWeight: "bold",
  },
  createAccountTitle: {
    textAlign: "center",
    fontSize: 22,
    color: green,
    fontWeight: "bold",
  },
  signupForm: {
    width: "80%",
    height: "80%",
    marginTop: 20,
  },
  inputField: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 14,
    backgroundColor: "transparent",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  phoneInput: {
    backgroundColor: "transparent",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 14,
    height: 50,
    marginBottom: 10,
  },
  phoneInputField: {
    backgroundColor: "transparent",
    borderLeftWidth: 1,
    borderLeftColor: "gray",
  },
  flagButton: {
    height: 50,
  },
  code: {
    backgroundColor: "transparent",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
  },
  phoneTextInput: {
    height: 50,
  },
  signupBtn: {
    height: 60,
    backgroundColor: green,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  signupBtnText: {
    color: white,
    fontSize: 16,
  },
  alreadyHaveAccount: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  alreadyText: {
    color: "#000",
    marginRight: 5,
    fontWeight: "bold",
  },
  loginLink: {
    color: red,
    fontWeight: "bold",
  },

  //  Login
  Login : {
    width: width,
    height: height,
    backgroundColor: white,
    flex: 1,
    flexDirection: 'column'
  },
  loginHeader:{
    width: '100%',
    height: 150,
    backgroundColor: green,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  loginLogoCircle:{
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 75
  },
  loginLogo : {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  loginForm : {
   width: '100%',
   height:  0.7* height,
   marginTop: 70,
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center'
  },
  loginTitle:{
    textAlign: "center",
    fontSize: 22,
    color: red,
    fontWeight: "bold",
  },
  signinForm: {
    width: "80%",
    height: "80%",
    marginTop: 20,
  },
  signinBtn: {
    height: 60,
    backgroundColor: red,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  signinBtnText: {
    color: white,
    fontSize: 16,
  },
  forgotPassword: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  alreadyText: {
    color: "#000",
    marginRight: 5,
    fontWeight: "bold",
  },
  resetpwLink: {
    color: green,
    fontWeight: "bold",
  }
});

export default OnboardingStyles;
