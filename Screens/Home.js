import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import HomeStyles from "../Styles/HomeStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import icon1 from "../Images/medicine.png"
import OnboardingStyles from "../Styles/OnboardingStyles";

const Home = () => {
  //Fonts
  let [fontLoaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo-VariableFont_wght.ttf"),
    DidactGothic: require("../assets/fonts/DidactGothic-Regular.ttf"),
  });

  const categories = [
    {
      name: "Antibiotics",
      icon: require("../Images/medicine.png"),
    },
    {
      name: "Insulin",
      icon: require("../Images/insulin.png"),
    },
    {
      name: "ARVs",
      icon: require("../Images/capsules.png"),
    },
    {
      name: "Vaccines",
      icon: require("../Images/vaccine.png"),
    },
  ];


  if (fontLoaded) {
    const icons = () =>{
        
    }
    return (
      <View style={HomeStyles.homeContainer}>
        {/* Menu */}
        <View style={HomeStyles.topMenu}>
          <View style={HomeStyles.searchBox}>
            <Icon
              name="search"
              size={24}
              style={{ marginRight: 10, marginLeft: 10, color: "gray" }}
            />
            <TextInput
              placeholder="search"
              selectionColor={"black"}
              style={{ fontFamily: "DidactGothic" }}
            />
          </View>
          <View style={HomeStyles.cartBox}>
            <TouchableOpacity>
              <Icon
                name="shopping-cart"
                size={36}
                style={{ color: "#705335" }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Welcome */}
        <View style={HomeStyles.welcomeBox}>
          <Text style={[{ fontFamily: "Arimo" }, HomeStyles.welcomeMessage]}>
            Welcome
          </Text>
          <Text style={[{ fontFamily: "DidactGothic" }, HomeStyles.userName]}>
            John
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
          <Text style={[{fontFamily: "Arimo"}, HomeStyles.categoriesTitle]}>Categories</Text>
          <View style={HomeStyles.categoryItems}>
             {
               categories.map((category, index)=>(
                <View style={HomeStyles.categoryItem}>
                <Image source={category.icon} key={index} style={HomeStyles.categoryIcon}/>
                <Text style={[{fontFamily: "DidactGothic"}, HomeStyles.categoryDesc]}>{category.name}</Text>
                </View>
               ))
             }
          </View>
        </View>


      </View>
    );
  }
};

export default Home;
