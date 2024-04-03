import { View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import HomeStyles from "../Styles/HomeStyles";
import Icon from "react-native-vector-icons/Feather";
import axios from "axios";

const Header = ({navigation}) => {
  //Retrieving User ID
  const [customerID, setCustomerID] = useState("")
  const getUserID  = async() =>{
    try {
      const id = await AsyncStorage.getItem("customerID");
      if (id) {
        setCustomerID(id);
      } else {
        console.log("No ID found");
      }
      // console.log(id)
      return id;
    } catch (error) {
      console.error("Error retrieving ID", error);
      return null;
    }
  }

  //Retrieving Order count
  
  
  return (
    <View style={HomeStyles.topMenu}>
      <View style={HomeStyles.logo}>
        <Image
          source={require("../Images/logo.png")}
          style={HomeStyles.logoImage}
        />
      </View>
      <View style={HomeStyles.cartBox}>
        <TouchableOpacity onPress={()=> navigation.navigate("Checkout")}>
          <Icon
            name="user"
            size={36}
            style={{ color: "#697E51", marginRight: 10 }}
          />
          <View style={HomeStyles.count}>

          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="shopping-cart" size={36} style={{ color: "#705335" }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
