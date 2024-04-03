import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import DescriptionStyles from "../Styles/DescriptionStyles";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/Feather";
import checkoutStyles from "../Styles/CheckOutStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Checkout = ({ navigation }) => {
  //Fonts
  let [fontLoaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo-VariableFont_wght.ttf"),
    DidactGothic: require("../assets/fonts/DidactGothic-Regular.ttf"),
  });

  if (fontLoaded) {
    //Getting userid
    const [customerID, setCustomerID] = useState("");
    const getUserID = async () => {
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
    };

    //Getting the items
    const url =
      "http://ec2-18-133-195-128.eu-west-2.compute.amazonaws.com:8080/api/get-orders";
    const customer_id = {
      customerID: customerID,
    };
    const [orderItems, setOrderItems] = useState([]);

    const getItems = () => {
      axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json" },
        data: customer_id,
      })
        .then((response) => {
          setOrderItems(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    useEffect(() => {
      getUserID();
      getItems();
      // console.log(orderItems[0].MedicineID)
    }, [getUserID, getItems]);

    return (
      <ScrollView
        contentContainerStyle={[
          {
            flexDirection: "row",
            flexWrap: "wrap",
          },
        ]}
      >
        <View style={checkoutStyles.container}>
          {/* Header */}
          <View style={checkoutStyles.header}></View>
          <View style={checkoutStyles.topMenu}>
            <Text
              style={{
                fontFamily: "Arimo",
                fontSize: 30,
                fontWeight: "500",
                color: "#705335",
                textAlign: "center",
              }}
              onPress={() => navigation.goBack()}
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
              Checkout
            </Text>
            <TouchableOpacity>
              <Icon
                name="shopping-cart"
                size={36}
                style={{ color: "#705335", marginRight: 10 }}
              />
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={[
              {
                flexDirection: "row",
                flexWrap: "wrap",
              },
            ]}
          >
            <View style={checkoutStyles.checkout} >
              {orderItems.map((uniqueOrderItem, index) => (
                <View key={index} style={checkoutStyles.item}>
                  <View style={checkoutStyles.itemImage}>
                    <Image
                      source={
                        uniqueOrderItem.Category === "ARVs"
                          ? require("../Images/ARVs/2.png")
                          : uniqueOrderItem.Category === "Insulin"
                          ? require("../Images/ARVs/12.png")
                          : uniqueOrderItem.Category === "Antibiotics"
                          ? require("../Images/ARVs/8.png")
                          : require("../Images/ARVs/10.png")
                      }
                      style={checkoutStyles.itemImage}
                    ></Image>
                  </View>

                  <View style={checkoutStyles.ItemDesc}>
                    <Text style={[{fontFamily: "Arimo"}, checkoutStyles.itemName]}>{uniqueOrderItem.Name}</Text>
                    <Text style={[{fontFamily: "DidactGothic"}, checkoutStyles.itemDescription]}>{'KES' + " " +uniqueOrderItem.Price}</Text>
                  </View>
                </View>
              ))}
            </View>
            <TouchableOpacity style={[DescriptionStyles.addToCart,{marginBottom: 20}]}>
              <Text style={{color: '#eee', fontSize: 16}}>Checkout</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
};

export default Checkout;
