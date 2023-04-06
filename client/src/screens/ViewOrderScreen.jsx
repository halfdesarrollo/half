import { StyleSheet, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TitlePage from "../components/TitlePage";
import StateOrder from "../components/StateOrder"
import YourProductList from "../components/YourProductList"
import BigButtonPay from "../components/BigButtonPay"

const ViewOrderScreen = () => {
  return (
    <View style={styles.container}>
      <TitlePage text="Ver pedidos" route="/menucard/1" white={false} />
      <StateOrder />
      <YourProductList />
      <BigButtonPay text="Pagar" route="/pay" />
    </View>
  );
};

export default ViewOrderScreen;

const styles = StyleSheet.create({
  container: {
    width: wp("100.00%"),
    height: hp("100.00%"),
    alignItems: "center",
    backgroundColor: "white",
  },
});
