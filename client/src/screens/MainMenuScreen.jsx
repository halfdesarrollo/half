import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Logo from "../../assets/halflogo.svg";
import Navbar from "../components/Navbar";
import SpecialHalf from "../components/SpecialHalf"
// components
import Search from "../components/Search/Search";

export const MainMenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MainMenuScree</Text>
      <Search />
      <Navbar />
      <SpecialHalf/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100.00%"),
    height: hp("100.00%"),
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    width: wp("50.00%"),
    height: hp("30.00%"),
  },
});
