import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResources() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "Satoshi-Bold": require("../assets/font/Satoshi-Bold.otf"),
          "Satoshi-Medium": require("../assets/font/Satoshi-Medium.otf"),
          "Satoshi-Regular": require("../assets/font/Satoshi-Regular.otf"),
          ...FontAwesome.font,
        });
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResources();
  }, []);

  return isLoadingComplete;
}
