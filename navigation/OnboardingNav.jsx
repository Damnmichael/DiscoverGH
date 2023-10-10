import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";

const Stack = createStackNavigator();

const OnboardingNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingNav;