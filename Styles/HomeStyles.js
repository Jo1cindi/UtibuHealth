import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const green = "#697E51";
const white = "#EEEEEE";
const brown = "#705335";
const lightGreen = "#DDF0C7";

const HomeStyles = StyleSheet.create({
  homeContainer: {
    width: width,
    height: height,
    backgroundColor: white,
    flex: 1,
    alignItems: "center",
  },
  topMenu: {
    width: "90%",
    marginTop: "20px",
    height: 70,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBox: {
    width: "60%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ddd",
  },
  searchInput: {
    width: "85%",
    height: 50,
    fontSize: 14,
  },
  cartBox: {
    width: "20%",
    height: 50,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  welcomeBox: {
    width: "90%",
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  welcomeMessage: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5
  },
  userName:{
    fontSize: 18,
    color: brown
  },
  banner:{
   width:'90%',
   height: 200,
   backgroundColor: green,
   borderRadius: 10,
   marginTop: 20,
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center'
  },
  bannerText:{
    width: '45%',
    height: '80%',
    display: 'flex',
    justifyContent:'center',
  },
  bannerImage:{
    width: '55%',
    height: '100%',
  },
  illustration:{
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  categories: {
   width: '90%',
   height: 150,
   marginTop: 20
  }, 
  categoriesTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: brown
  },
  categoryItems:{
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  categoryItem:{
    width: '22%',
    height: 90,
    backgroundColor: lightGreen,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    borderRadius: 10,
  },
  categoryIcon:{
   width: 50,
   height: 50,
   resizeMode: 'contain'
  },
  categoryDesc: {
   color: brown,
   marginTop: 5,
   fontWeight: 'bold'
  }

});

export default HomeStyles;
