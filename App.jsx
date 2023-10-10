import "react-native-gesture-handler";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "./navigation/RootNav";
import useCachedResources from "./hooks/useCachedResources";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </View>
  );
}
