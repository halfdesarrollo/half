import { View, Text } from "react-native";
import { Routes, Route } from "react-router-native";

//Screens
<<<<<<< HEAD
import { LandingScreen } from "./src/screens/LandingScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { MainMenuScreen } from "./src/screens/MainMenuScreen";
=======
import { WelcomeScreen } from './src/screens/WelcomeScreen'
import { MainMenuScreen } from './src/screens/MainMenuScreen'
import { HowDoesItWorksScreen } from './src/screens/HowDoesItWorksScreen'
>>>>>>> ff4a96c01858cf585b906ff010da6ddc30b86c85

export default function Main() {
  return (
    <View>
      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<MainMenuScreen />} />
        <Route path="/landing" element={<LandingScreen />} />
        <Route path="/" element={<LoginScreen />} />
=======
        <Route path='/welcome' element={<WelcomeScreen />} />
        <Route path='/' element={<MainMenuScreen />} />
        <Route path='/howdoesitworks' element={<HowDoesItWorksScreen />} />
>>>>>>> ff4a96c01858cf585b906ff010da6ddc30b86c85
      </Routes>
    </View>
  );
}
