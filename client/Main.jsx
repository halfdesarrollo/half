import { View, Text } from "react-native";
import { Routes, Route } from "react-router-native";

//Screens
import { LandingScreen } from "./src/screens/LandingScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { MainMenuScreen } from "./src/screens/MainMenuScreen";

export default function Main() {
  return (
    <View>
      <Routes>
        <Route path="/login" element={<MainMenuScreen />} />
        <Route path="/landing" element={<LandingScreen />} />
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </View>
  );
}
