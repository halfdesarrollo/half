import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import OptionsViewRestorant from "../components/OptionsViewRestorant";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ViewOrderButton from "../components/ViewOrderButton";
import BackgroundCard from "../components/BackgroundCard";
import BigButtonOrder from "../components/BigButtonOrder";

export const MenuCardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackgroundCard />
      {/* <ViewOrderButton /> */}
      <OptionsViewRestorant />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100.00%"),
    height: hp("100.00%"),
    alignItems: "center",
  },
  btn: {
    position: "absolute",
    bottom: 25,
  },
});
