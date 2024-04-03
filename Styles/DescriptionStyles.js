import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const green = "#697E51";
const white = "#EEEEEE";
const brown = "#705335";
const lightGreen = "#DDF0C7";

const DescriptionStyles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: lightGreen,
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 40,
    backgroundColor: lightGreen,
  },
  topMenu: {
    width: "90%",
    height: 40,
    backgroundColor: lightGreen,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  medicineImage: {
    width: "80%",
    height: 400,
    marginTop: 20,
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  medicineDetails: {
    width: width,
    height: 500,
    backgroundColor: white,
    borderTopRightRadius: 60, // Adjust the radius value as needed
    borderTopLeftRadius: 60,
  },
  medicineName: {
    fontSize: 20,
    color: brown,
    marginLeft: 20,
    marginBottom: 30,
    marginTop: 30,
  },
  medicinePrice: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  descTitle: {
    fontSize: 18,
    marginLeft: 20,
    textDecorationLine: "underline",
    fontWeight: '500',
  },
  medicineDesc: {
    marginLeft: 20,
    width: "90%",
    fontSize: 16,
    marginBottom: 20,
    height: 40
  },
  addToCart: {
    width: "70%",
    marginLeft: "15%",
    height: 50,
    backgroundColor: green,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // color: white,
  },
});

export default DescriptionStyles;
