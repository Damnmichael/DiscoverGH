import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AuthNav from "./AuthNav";

const Stack = createStackNavigator();

const RootNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthNav" component={AuthNav} />
    </Stack.Navigator>
  );
};

export default RootNav;
