import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import OptionsViewRestorant from "../components/OptionsViewRestorant";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ViewOrderButton from "../components/ViewOrderButton";
import BackgroundCard from "../components/BackgroundCard";
import BigButtonOrder from "../components/BigButtonOrder";

import { useSelector } from "react-redux";
import { useParams } from "react-router-native";

export const MenuCardScreen = () => {
  const { id } = useParams();
  const { restaurants } = useSelector((state) => state.restaurantState);
  const logo = restaurants[0].image;
  return (
    <SafeAreaView style={styles.container}>
      <BackgroundCard logo={logo} />
      <OptionsViewRestorant />
      <View style={styles.btn}>
        <BigButtonOrder route='/order' />
      </View>
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
    width:wp(100),
    height:hp(10.1),
    justifyContent:'center',
    paddingBottom:hp(2),
    alignItems:'center',
  },
});
