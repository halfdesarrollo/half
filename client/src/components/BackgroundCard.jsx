import React from "react";
import { View, StyleSheet, SafeAreaView, Text, Image } from "react-native";
import TitlePage from "./TitlePage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BackgroundImage from "../../assets/backgroundCard.svg";
import { useParams } from "react-router-native";
import { useSelector } from "react-redux";
import ViewOrderButton from "./ViewOrderButton";
import HeartLogo from "../../assets/CorazonLogo.svg";
import ProfileLogo from "../../assets/ProfilePicture.svg";
import InviteBtn from "./InviteBtn";

const BackgroundCard = ({ logo }) => {
  console.log(logo);
  return (
    <SafeAreaView>
      <TitlePage text="Inicio" route={"/"} />
      <View style={styles.backgroundCard_container}>
        <BackgroundImage
          style={{
            resizeMode: "contain",
            flex: 1,
            filter: "brightness(90%) saturate(0%)",
            opacity: 0.76,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
        />
        <Image
          source={{ uri: logo }}
          resizeMode="cover"
          alt="algo paso"
          style={styles.backgroundCard_logo}
        />
        <View style={styles.background_text}>
          <Text
            style={{
              color: "#fff",
              textShadowColor: "#000",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 1,
            }}
          >
            N° de Mesa: 05
          </Text>
          <Text
            style={{
              color: "#fff",
              textShadowColor: "#000",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 1,
            }}
          >
            N° de Comensales:{" 1 "}
          </Text>
          <HeartLogo style={{ marginVertical: 10 }} />
        </View>
        <View style={styles.backgroundCard_button}>
          <InviteBtn />
          <ViewOrderButton />
        </View>
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

  backgroundCard_logo: {
    height: "40%",
    width: "35%",
    position: "absolute",
    left: "30%",
    top: "10%",
  },

  background_text: {
    color: "white",
    position: "absolute",
    width: "50%",
    left: "30%",
    top: "60%",
  },
  backgroundCard_button: {
    position: "absolute",
    width: "50%",
    height: "80%",
    left: "83%",
    top: "0%",
    flexDirection: "column",
  },
});

export default BackgroundCard;
