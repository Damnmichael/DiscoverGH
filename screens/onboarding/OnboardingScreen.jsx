import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";

const OnboardingScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../../assets/onbb.jpg")}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 1)",
        }}
        imageStyle={{ opacity: 0.5 }}
      >
        <SafeAreaView style>
          <Text
            style={{
              color: "white",
              fontFamily: "Satoshi-Bold",
              fontSize: 40,
              marginTop: 500,
              marginHorizontal: 20,
            }}
          >
            Explore GH
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "Satoshi-Regular",
              fontSize: 18,
              marginVertical: 15,
              marginHorizontal: 20,
            }}
          >
            Easily navigate Accra with the help of the ideal traveling
            companion. Escape the ordinary, embrace the extraordinary
          </Text>

          <TouchableOpacity
            style={{
              marginHorizontal: 270,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 25,
              width: 60,
              height: 60,
              borderRadius: 50,
              backgroundColor: "black",
            }}
            onPress={() => {
              navigate("LoginScreen");
            }}
          >
            <Ionicons name="arrow-forward-outline" color="white" size={25} />
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default OnboardingScreen;
