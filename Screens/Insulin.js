import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import HomeStyles from "../Styles/HomeStyles";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/Feather";
import axios from "axios";
import CategoryStyles from "../Styles/CategoryStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Insulin = ({ navigation }) => {
  const category = {
    category: "Insulin",
  };
  const [medicines, setMedicines] = useState([]);
  const medicineImages = [
    {
      id: 1,
      url: require("../Images/ARVs/1.png"),
      storedUrl:"../Images/ARVs/1.png" 
    },
    {
      id: 2,
      url: require("../Images/ARVs/2.png"),
      storedUrl:"../Images/ARVs/2.png" 
    },
    {
      id: 3,
      url: require("../Images/ARVs/3.png"),
      storedUrl:"../Images/ARVs/3.png" 
    },
    {
      id: 4,
      url: require("../Images/ARVs/4.png"),
      storedUrl:"../Images/ARVs/4.png" 
    },
    {
      id: 5,
      url: require("../Images/ARVs/5.png"),
      storedUrl:"../Images/ARVs/5.png" 
    },
    {
      id: 6,
      url: require("../Images/ARVs/6.png"),
      storedUrl:"../Images/ARVs/6.png" 
    },
    {
      id: 7,
      url: require("../Images/ARVs/7.png"),
      storedUrl:"../Images/ARVs/7.png" 
    },
    {
      id: 8,
      url: require("../Images/ARVs/8.png"),
      storedUrl:"../Images/ARVs/8.png" 
    },
  ];
  const url =
    "http://ec2-18-133-195-128.eu-west-2.compute.amazonaws.com:8080/api/get-medicine";

  const fetchData = () => {
    axios({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: category,
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          const fetchedData = response.data[0];
          setMedicines(fetchedData);
        } else {
          console.log("Request failed with status code:", response.status);
        }
      })
      .catch((error) => {
        console.error("Request failed with error:", error);
      });
  };
  useEffect(() => {
    fetchData();
    // console.log(medicines[0])
  }),
    [fetchData, url];

  //Fonts
  let [fontLoaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo-VariableFont_wght.ttf"),
    DidactGothic: require("../assets/fonts/DidactGothic-Regular.ttf"),
  });

  if (fontLoaded) {
    return (
      <View style={HomeStyles.container}>
        {/* Header */}
        <View style={HomeStyles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text
              style={{
                fontFamily: "DidactGothic",
                fontSize: 40,
                fontWeight: "500",
                color: "#705335",
              }}
            >
              {"<"}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Arimo",
              fontSize: 30,
              fontWeight: "500",
              color: "#705335",
              textAlign: "center",
            }}
          >
            ARVs
          </Text>
          <View style={HomeStyles.cartBox}>
            <TouchableOpacity>
              <Icon
                name="user"
                size={36}
                style={{ color: "#697E51", marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="shopping-cart"
                size={36}
                style={{ color: "#705335" }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Medicine */}
        <View style={CategoryStyles.container}>
          <Text style={{ fontFamily: "Arimo", color: "gray", fontSize: 20 }}>
            All
          </Text>

          <ScrollView
            contentContainerStyle={[
              {
                flexDirection: "row",
                flexWrap: "wrap",
              },
            ]}
          >
            {medicines.map((medicine) => (
              <TouchableOpacity
                key={medicine.MedicineID}
                style={{ width: "50%", flexDirection: "row" }}
                onPress={async () => {
                  navigation.navigate("Description");
                  await AsyncStorage.setItem(
                    "medicineID",
                    medicine.MedicineID.toString()
                  );
                }}
              >
                <View
                  style={CategoryStyles.medicationBox}
                  key={medicine.MedicineID}
                >
                  <View style={CategoryStyles.imageBox}>
                    <Image
                      source={
                        medicine.MedicineID === 1
                          ? medicineImages[0].url
                          : medicine.MedicineID === 2
                          ? medicineImages[1].url
                          : medicine.MedicineID === 3
                          ? medicineImages[2].url
                          : medicine.MedicineID === 5
                          ? medicineImages[3].url
                          : medicine.MedicineID === 5
                          ? medicineImages[4].url
                          : medicine.MedicineID === 6
                          ? medicineImages[5].url
                          : medicine.MedicineID === 7
                          ? medicineImages[6].url
                          : medicineImages[7].url
                      }
                      style={CategoryStyles.medicineImage}
                    />
                  </View>
                  <Text
                    style={[
                      { fontFamily: "Arimo" },
                      CategoryStyles.medicineName,
                    ]}
                  >
                    {medicine.Name}
                  </Text>
                  <Text style={CategoryStyles.desc}>
                    {medicine.Description + "..."}
                  </Text>
                  <View style={CategoryStyles.medicinePrice}>
                    <Text style={{ fontFamily: "DidactGothic" }}>
                      {"KES" + " " + medicine.Price}
                    </Text>

                    <TouchableOpacity style={CategoryStyles.bagContainer}>
                      <Icon
                        name="shopping-bag"
                        size={22}
                        color={"#705335"}
                      ></Icon>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
};

export default Insulin;
