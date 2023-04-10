import { View } from "react-native";
import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Navbar from "../components/Navbar";
// components

import SpecialHalf from "../components/SpecialHalf";
import Search from "../components/Search";
import TitlePageLocation from "../components/TitlePageLocation";
import WelcomeUser from '../components/WelcomeUser';
import StartBooking from '../components/StartBooking';
import Categories from '../components/Categories';
import NearMe from '../components/NearMe';

export const MainMenuScreen = () => {
  return (
    <View style={styles.container}>
      <TitlePageLocation />
      <WelcomeUser />
      <Search />
      <StartBooking />
      <SpecialHalf />
      <Categories />
      <NearMe />
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100.00%"),
    height: hp("100.00%"),
    alignItems: "center",
    backgroundColor: "white",
    gap: 15
  },
  logo: {
    width: wp("50.00%"),
    height: hp("30.00%"),
  },
});
