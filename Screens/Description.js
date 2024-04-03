import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import DescriptionStyles from "../Styles/DescriptionStyles";
import Icon from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useFonts } from "expo-font";

const Description = () => {
  const [medicineDesc, setMedicineDesc] = useState([]);

  //Setting Medicine ID
  const [storedMedicineID, setStoredMedicineID] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
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

  //Retreiving medicine
  useEffect(() => {
    getDesc();
    getMedicineDesc();
  }, [getDesc(), getMedicineDesc()]);

  //Fonts
  let [fontLoaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo-VariableFont_wght.ttf"),
    DidactGothic: require("../assets/fonts/DidactGothic-Regular.ttf"),
  });


  if(fontLoaded){
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
             {/* <Image source={{uri: imageUrls[storedMedicineID-1].storedUrl}}/> */}
          </View>
  
          <View style={DescriptionStyles.medicineDetails}>
             <Text style={[{fontFamily: "Arimo"}, DescriptionStyles.medicineName]}>{medicineDesc.Name}</Text>
             <Text style={[{fontFamily: "Arimo"}, DescriptionStyles.medicinePrice]}>{"KES" + " "+medicineDesc.Price}</Text>
             <Text style={[{fontFamily: "DidactGothic"}, DescriptionStyles.descTitle]}>Details</Text>
             <Text style={[{fontFamily: "DidactGothic"}, DescriptionStyles.medicineDesc]}>{medicineDesc.Description}</Text>
             <TouchableOpacity style={DescriptionStyles.addToCart}>
              <Icon name="shopping-bag" style={{color: '#eee', marginRight: 10}} size={18}></Icon>
              <Text style={{fontFamily: "DidactGothic", fontSize: 16, color: '#eee'}}>Add to cart</Text>
             </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default Description;
