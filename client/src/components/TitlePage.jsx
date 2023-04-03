import { StyleSheet, Text, View } from "react-native";
import { useNavigate } from "react-router-native";
import { colors, fonts } from "../utils/theme";
import Back from "../../assets/back-arrow.svg";
import BackBlack from "../../assets/back-arrow-black.svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const randomHexColor = () => {
  return "#000000".replace(/0/g, () => {
    return Math.round(Math.random() * 16).toString(16);
  });
};

const TitlePage = ({ text, route, white }) => {
  const navigate = useNavigate();
  const handlePress = () => {
    navigate(route);
  };

  return (
    <View style={white ? styles.whiteContainer : styles.container}>
      <View style={styles.box}>
        {white ? (
          <BackBlack style={styles.back} onPress={handlePress} />
        ) : (
          <Back style={styles.back} onPress={handlePress} />
        )}
        <Text style={white ? styles.whiteText : styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default TitlePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryGreen,
    height: 80,
    justifyContent: "flex-end",
    paddingHorizontal: 25,
    paddingVertical: 15,
    width: wp("100%"),
  },
  whiteContainer: {
    backgroundColor: "#fff",
    height: 80,
    justifyContent: "flex-end",
    paddingHorizontal: 25,
    paddingVertical: 15,
    width: wp("100%"),
    borderBottomWidth: 1,
    borderBottomColor: "#4B556355",
  },
  box: {
    flexDirection: "row",
    gap: 20,
  },
  text: {
    color: "#fff",
    fontFamily: fonts.poppins.bold,
    fontSize: 16,
    alignSelf: "center",
  },
  whiteText: {
    color: "#000",
    fontFamily: fonts.poppins.bold,
    fontSize: 16,
    alignSelf: "center",
  },
  back: {
    height: hp("2.3%"),
    width: wp("2.3%"),
    alignSelf: "center",
  },
  whiteBack: {
    height: hp("2.3%"),
    width: wp("2.3%"),
    alignSelf: "center",
  },
});
