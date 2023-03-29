import { View, Text } from "react-native";
import { Routes, Route } from "react-router-native";

//Screens
import { WelcomeScreen } from "./src/screens/WelcomeScreen";
import { MainMenuScreen } from "./src/screens/MainMenuScreen";
import { HowDoesItWorksScreen } from "./src/screens/HowDoesItWorksScreen";
import { LoginScreen } from "./src/screens/LoginScreen";

export default function Main() {
  return (
    <View>
      <Routes>
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/" element={<LoginScreen />} />
        <Route path="/howdoesitworks" element={<HowDoesItWorksScreen />} />
      </Routes>
    </View>
  );
}
