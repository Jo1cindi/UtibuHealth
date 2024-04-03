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
    width: '90%',
    height: 'auto',
    backgroundColor: lightGreen,
    marginTop: 20
  },
  item: {
   width: '100%',
   height: 200,
   backgroundColor: '#ddd',
   borderRadius: 20,
   marginBottom: 20,
   display: 'flex',
   alignItems: 'center',
  flexDirection: 'row',
  //  justifyContent: 'center'
  },
  itemImage:{
   width: 100,
   height: 100,
   resizeMode: 'contain',
   marginLeft: 20
  },
  ItemDesc: {
    width: '50%',
    height: '250',
    marginLeft: 40
  },
  itemName:{
    color: brown,
    fontWeight: '500',
    fontSize: 18
  },
  itemDescription: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold'
  }
});

export default checkoutStyles;
