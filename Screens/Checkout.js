import { View, Text, ScrollView } from "react-native";
import DescriptionStyles from "../Styles/DescriptionStyles";
import React from "react";

const Checkout = () => {
  
  
  return (
    <ScrollView
      contentContainerStyle={[
        {
          flexDirection: "row",
          flexWrap: "wrap",
        },
      ]}
    >
        <View style={DescriptionStyles.container}>
        <View style={DescriptionStyles.header}></View>
          <View style={DescriptionStyles.topMenu}>
            <Text
              style={{
                fontFamily: "Arimo",
                fontSize: 30,
                fontWeight: "500",
                color: "#705335",
                textAlign: "center",
              }}
              onPress={()=> navigation.goBack()}
            >
              {"<"}
            </Text>
            <Text
              style={{
                fontFamily: "Arimo",
                fontSize: 20,
                fontWeight: "500",
                color: "#705335",
                textAlign: "center",
              }}
            >
              Medicine Description
            </Text>
            <TouchableOpacity>
              <Icon
                name="shopping-cart"
                size={36}
                style={{ color: "#705335", marginRight: 10 }}
              />
            </TouchableOpacity>
          </View>

        </View>

        <View >

        </View>
    </ScrollView>
  );
};

export default Checkout;
