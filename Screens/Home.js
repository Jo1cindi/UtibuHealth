import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HomeStyles from "../Styles/HomeStyles";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../Components/Header";


const Home = ({ navigation }) => {
  //Fonts
  let [fontLoaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo-VariableFont_wght.ttf"),
    DidactGothic: require("../assets/fonts/DidactGothic-Regular.ttf"),
  });

  const categories = [
    {
      id: 1,
      name: "Antibiotics",
      icon: require("../Images/medicine.png"),
    },
    {
      id: 2,
      name: "Insulin",
      icon: require("../Images/insulin.png"),
    },
    {
      id: 3,
      name: "ARVs",
      icon: require("../Images/capsules.png"),
    },
    {
      id: 4,
      name: "Vaccines",
      icon: require("../Images/vaccine.png"),
    },
  ];

  // Getting user's name
  const [name, setName] = useState("");
  useEffect(() => {
    const getName = async () => {
      try {
        const storedName = await AsyncStorage.getItem("userName");
        if (storedName !== null) {
          setName(storedName);
        } else {
          console.log("No data found for the key");
        }
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    };
    getName();
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
        <View style={HomeStyles.container}>
          {/* Menu */}
          <Header navigation={navigation} />

          {/* Welcome */}
          <View style={HomeStyles.welcomeBox}>
            <Text style={[{ fontFamily: "Arimo" }, HomeStyles.welcomeMessage]}>
              Welcome
            </Text>
            <Text style={[{ fontFamily: "DidactGothic" }, HomeStyles.userName]}>
              {name}
            </Text>
          </View>

          {/* Banner */}
          <View style={HomeStyles.banner}>
            <View style={HomeStyles.bannerText}>
              <Text
                style={{
                  color: "#eee",
                  fontFamily: "Arimo",
                  fontWeight: "500",
                  fontSize: 18,
                  marginLeft: 20,
                }}
              >
                Tired of going to the pharmacy all the time?
              </Text>
              <Text
                style={{
                  color: "#DDF0C7",
                  fontFamily: "DidactGothic",
                  fontSize: 16,
                  marginLeft: 20,
                }}
              >
                Get any medication at your convinience using our app
              </Text>
            </View>
            <View style={HomeStyles.bannerImage}>
              <Image
                source={require("../Images/banner-image.png")}
                style={HomeStyles.illustration}
              />
            </View>
          </View>

          {/* Categories */}
          <View style={HomeStyles.categories}>
            <Text style={[{ fontFamily: "Arimo" }, HomeStyles.categoriesTitle]}>
              Categories
            </Text>
            <View style={HomeStyles.categoryItems}>
              {categories.map((category, index) => (
                <TouchableOpacity
                  style={HomeStyles.categoryItem}
                  key={index}
                  onPress={() => {
                    category.id === 1
                      ? navigation.navigate("Antibiotics")
                      : category.id === 2
                      ? navigation.navigate("Insulin")
                      : category.id === 3
                      ? navigation.navigate("Arv")
                      : navigation.navigate("Vaccines");
                  }}
                >
                  <Image
                    source={category.icon}
                    key={index}
                    style={HomeStyles.categoryIcon}
                  />
                  <Text
                    style={[
                      { fontFamily: "DidactGothic" },
                      HomeStyles.categoryDesc,
                    ]}
                  >
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={HomeStyles.medicineBox}>
            <Text style={[{fontFamily: "Arimo"}, HomeStyles.howToTitle]}>How to use the app</Text>
            <Text style={[{fontFamily: "DidactGothic"}, HomeStyles.howToText]}>1. Click on a category</Text>
            <Text style={[{fontFamily: "DidactGothic"}, HomeStyles.howToText]}>2. Pick  a medication</Text>
            <Text style={[{fontFamily: "DidactGothic"}, HomeStyles.howToText]}>3. Add to cart</Text>
            <Text style={[{fontFamily: "DidactGothic"}, HomeStyles.howToText]}>4. Go back to home screen</Text>
            <Text style={[{fontFamily: "DidactGothic"}, {marginBottom: 30, marginLeft: 20, fontSize: 18}]}>5. View your cart</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default Home;
