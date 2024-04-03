import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import HomeStyles from "../Styles/HomeStyles";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = ({navigation}) => {
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
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="shopping-cart" size={36} style={{ color: "#705335" }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
