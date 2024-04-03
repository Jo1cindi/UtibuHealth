import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const green = "#697E51";
const white = "#EEEEEE";
const brown = "#705335";
const lightGreen = "#DDF0C7";

const HomeStyles = StyleSheet.create({
   container: {
    width: width,
    height: height,
    backgroundColor: white,
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "90%",
    marginTop: "20px",
    height: 80,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topMenu: {
    width: "90%",
    marginTop: "20px",
    height: 80,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 75,
    height:75 ,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  logoImage: {
    width:'100%',
    height:'100%',
    resizeMode: 'contain'
  },
  
  cartBox: {
    width: "auto",
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    position: 'relative'
  },
  // icon: {
  //   position: 'absolute',
  //   top: 0,
  //   bottom: 0,
  //   right: 1000
  // },
  count: {
    position: 'absolute',
    width: 22,
    height: 22,
    backgroundColor: green,
    borderRadius: 11,
    left: 0,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
    Bottom: 100
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
  },
  medicineBox:{
    width: '90%',
    height: 'auto',
    backgroundColor: '#ddd',
    borderRadius: 15,
    marginBottom: 30
  },
  howToTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20
  },
  howToText:{
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 20
  }
});

export default HomeStyles;
