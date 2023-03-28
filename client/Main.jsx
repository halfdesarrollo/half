import { View, Text } from "react-native";
import { Routes, Route } from "react-router-native";

//Screens
import { LandingScreen } from "./src/screens/LandingScreen";
import { LogRegScreen } from "./src/screens/LogRegScreen";
import { MainMenuScreen } from "./src/screens/MainMenuScreen";

export default function Main() {
  return (
    <View>
      <Routes>
        <Route path="/login" element={<LogRegScreen />} />
        <Route path="/landing" element={<LandingScreen />} />
        <Route path="/" element={<MainMenuScreen />} />
      </Routes>
    </View>
  );
}
