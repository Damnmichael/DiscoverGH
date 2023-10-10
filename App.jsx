import "react-native-gesture-handler";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "./navigation/RootNav";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </View>
  );
}
