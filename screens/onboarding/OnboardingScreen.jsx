import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/onb.jpg")}
        style={{ width: "100%", height: "100%" }}
      />
      <Text></Text>
    </View>
  );
};

export default OnboardingScreen;
