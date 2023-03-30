import { View } from "react-native";
import { Routes, Route } from "react-router-native";
import { LoginScreen } from "./src/screens/LoginScreen";
import { WelcomeScreen } from "./src/screens/WelcomeScreen";
import { MainMenuScreen } from "./src/screens/MainMenuScreen";
import { HowDoesItWorksScreen } from "./src/screens/HowDoesItWorksScreen";
import { ScanQRScreen } from "./src/screens/ScanQRScreen";
import { QrScreen } from "./src/screens/QrScreen";

export default function Main() {
  return (
    <View>
      <Routes>
        <Route path="/qr" element={<QrScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/howdoesitworks" element={<HowDoesItWorksScreen />} />
        <Route path="/" element={<MainMenuScreen />} />
      </Routes>
    </View>
  );
}
