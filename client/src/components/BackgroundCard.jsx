import React from "react";
import { View, StyleSheet, SafeAreaView, Text, Dimensions } from "react-native";
import TitlePage from "./TitlePage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BackgroundImage from "../../assets/backgroundCard.svg";
import { useParams } from "react-router-native";
import { useSelector } from "react-redux";

const BackgroundCard = () => {
  return (
    <SafeAreaView>
      <TitlePage text="Inicio" route={"/"} />
      <View style={styles.backgroundCard_container}>
        <BackgroundImage style={{ resizeMode: "contain" }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundCard_container: {
    width: wp("100"),
    maxWidth: wp("100"),
    height: hp("25"),
    backgroundColor: "#fff",
    marginHorizontal: -105,
  },
  backgroundCard_top: {
    backgroundColor: "blue",
  },
});

export default BackgroundCard;
