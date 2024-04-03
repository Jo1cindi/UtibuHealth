import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import DescriptionStyles from "../Styles/DescriptionStyles";
import Icon from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useFonts } from "expo-font";

const Description = ({ navigation }) => {
  const [medicineDesc, setMedicineDesc] = useState([]);

  //Setting Medicine ID
  const [storedMedicineID, setStoredMedicineID] = useState("");
  const getDesc = async () => {
    try {
      const storedID = await AsyncStorage.getItem("medicineID");
      if (storedID !== null) {
        setStoredMedicineID(storedID);
      } else {
        console.log("No data found for the key");
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  //Retrieving the medicine description
  const url =
    "http://ec2-18-133-195-128.eu-west-2.compute.amazonaws.com:8080/api/get-medicine-info";
  const medicineID = {
    medicineID: storedMedicineID,
  };
  const getMedicineDesc = () => {
    axios({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: medicineID,
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          const fetchedData = response.data;
          setMedicineDesc(fetchedData);
        } else {
          console.log("Request failed with status code:", response.status);
        }
      })
      .catch((error) => {
        console.error("Request failed with error:", error);
      });
    // console.log(medicineDesc)
  };

  //Getting User ID
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


  //Retreiving medicine
  useEffect(() => {
    getDesc();
    getMedicineDesc();
    getUserID();
    // console.log(imageUrl)
    // console.log(medicineID.medicineID)
  }, [getDesc, getMedicineDesc]);

  //Adding to cart
  const currentDate = new Date();
  const orderUrl =
    "http://ec2-18-133-195-128.eu-west-2.compute.amazonaws.com:8080/api/add-order";
  const orderDetails = {
    customerID: customerID,
    medicineID: storedMedicineID,
    quantity: 1,
    orderDate: currentDate,
  };
  const [buttonText, setButtonText] = useState("Add to cart");
  const addToCart = () => {
    axios({
      method: "POST",
      url: orderUrl,
      headers: { "Content-Type": "application/json" },
      data: orderDetails,
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          setButtonText("Added to cart");
        } else {
          console.log("Request failed with status code:", response.status);
        }
      })
      .catch((error) => {
        console.error("Request failed with error:", error);
      });

      navigation.navigate("Home")
  };

  //Fonts
  let [fontLoaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo-VariableFont_wght.ttf"),
    DidactGothic: require("../assets/fonts/DidactGothic-Regular.ttf"),
  });

  if (fontLoaded) {
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
          {/* Header */}
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

          <View style={DescriptionStyles.medicineImage}>
            <Image
              source={
                medicineDesc.Category === "ARVs"
                  ? require("../Images/ARVs/2.png")
                  : medicineDesc.Category === "Insulin"
                  ? require("../Images/ARVs/12.png")
                  : medicineDesc.Category === "Antibiotics"
                  ? require("../Images/ARVs/8.png")
                  : require("../Images/ARVs/10.png")
              }
              style={DescriptionStyles.image}
            />
          </View>

          <View style={DescriptionStyles.medicineDetails}>
            <Text
              style={[{ fontFamily: "Arimo" }, DescriptionStyles.medicineName]}
            >
              {medicineDesc.Name}
            </Text>
            <Text
              style={[{ fontFamily: "Arimo" }, DescriptionStyles.medicinePrice]}
            >
              {"KES" + " " + medicineDesc.Price}
            </Text>
            <Text
              style={[
                { fontFamily: "DidactGothic" },
                DescriptionStyles.descTitle,
              ]}
            >
              Details
            </Text>
            <Text
              style={[
                { fontFamily: "DidactGothic" },
                DescriptionStyles.medicineDesc,
              ]}
            >
              {medicineDesc.Description}
            </Text>
            <TouchableOpacity
              style={DescriptionStyles.addToCart}
              onPress={addToCart}
            >
              <Icon
                name="shopping-bag"
                style={{ color: "#eee", marginRight: 10 }}
                size={18}
              ></Icon>
              <Text
                style={{
                  fontFamily: "DidactGothic",
                  fontSize: 16,
                  color: "#eee",
                }}
              >
                {buttonText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default Description;
