import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const green = "#697E51";
const white = "#EEEEEE";
const brown = "#705335";
const lightGreen = "#DDF0C7";

const checkoutStyles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: white,
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 40,
  },
  topMenu: {
    width: "90%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkout: {
    width: '85%',
    height: 500,
    backgroundColor: lightGreen,
    marginTop: 20
  },
  item: {
   width: '100%',
   height: 200,
   backgroundColor: '#ddd',
   borderRadius: 20
  }
});

export default checkoutStyles;
