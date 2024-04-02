import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const green = "#697E51";
const white = "#EEEEEE";
const brown = "#705335";
const lightGreen = "#DDF0C7";
const columnCount = 2;
const itemWidth = width / columnCount;

const CategoryStyles = StyleSheet.create({
  container: {
    width: "90%",
    height: "auto",
    backgroundColor: white,
    flex: 1,
    alignItems: "center",
  },
  scrollWrapper: {
    width: "100%",
    height: 600,
    marginTop: 20,
  },

  scrollContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  medicationBox: {
    backgroundColor: "#ddd",
    height: 200,
    flex: 1,
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
  },
  imageBox: {
    width: 100,
    height: 100,
    // backgroundColor: lightGreen,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  medicineImage: {
   width: 120,
   height: 120,
   resizeMode: 'contain'
  },
  medicineName: {
    fontWeight: "500",
    color: "#705335",
    fontSize: 18,
    marginTop: 10,
  },
  medicinePrice: {
    width: '90%',
    height: 40,
    backgroundColor: 'thistle',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bagContainer:{
    width: 36,
    height: 36,
    backgroundColor: lightGreen,
    borderRadius: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryStyles;
