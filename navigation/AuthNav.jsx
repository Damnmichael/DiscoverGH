import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/auth/LoginScreen";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";

const Stack = createStackNavigator();
const AuthNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNav;
