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
    width: "90%",
    height: "auto",
    marginTop: 20,
  },
  item: {
    width: "100%",
    height: 200,
    backgroundColor: "#ddd",
    borderRadius: 20,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20
    //  justifyContent: 'center'
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginLeft: 20,
  },
  ItemDesc: {
    width: "50%",
    height: "250",
    marginLeft: 40,
  },
  itemName: {
    color: brown,
    fontWeight: "500",
    fontSize: 18,
  },
  itemDescription: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },
  updateItem: {
    width: 150,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  subtract: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  total: {
    width: '80%',
    height: 200,
    marginLeft: '10%',
    marginBottom: 20
  },
  subtotal :{
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text:{
   width: '70%',
   height: '100%'
  },
  value:{
    width: '30%',
    height: '100%',
  }, 
  vat:{
    width: '100%',
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalAmount: {
    width: '100%',
    height: '20%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  totalText: {
    // width: '70%',
    // height: '100%',
    // fontWeight: 'bold',
    // fontSize: 20,
    // justifyContent: 'center', // To vertically center the text
  },
  totalValue: {
    // width: '30%',
    // height: '100%',
    // Add any other styles as needed
  },
  
});

export default checkoutStyles;
