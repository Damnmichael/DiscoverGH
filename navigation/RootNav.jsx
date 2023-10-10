import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import OnboardingNav from "./OnboardingNav";

const Stack = createStackNavigator();
const RootNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingNav" component={OnboardingNav} />
    </Stack.Navigator>
  );
};

export default RootNav;
