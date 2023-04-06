import { StyleSheet, View, Text } from "react-native";
import { fonts, colors } from "../utils/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Confeti from "../../assets/confeti";
import ButtonReutil from "./ButtonReutil";
import { useNavigate } from "react-router-native";

const ModalPaymentConfirmed = ({ paymentCode }) => {
  const navigation = useNavigate();
  const handleRediret = () => {
    navigation("/menucard/1")
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerDatas}>
        <Confeti style={styles.svg} />
        <Text style={styles.title}>Pago Confirmado</Text>
        <Text style={styles.subTitle}>
          Código de pago: {paymentCode || "#9876543"}
        </Text>
        <ButtonReutil
          colorBtn={styles.button}
          styleText={styles.textButton}
          action={handleRediret}
          text={"Revisar Comprobante"}
        />
      </View>
      <View style={styles.containerBackground}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100.00%"),
    height: hp("100.00%"),
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  containerBackground: {
    width: wp("100.00%"),
    height: hp("100.00%"),
    position: "absolute",
    backgroundColor: "#000000",
    opacity: 0.5,
  },
  containerDatas: {
    width: wp(90),
    height: hp(55),
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 2,
  },
  svg: {
    width: wp(50),
    height: hp(20),
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    fontFamily: fonts.poppins.regular,
    marginTop: 45,
    backgroundColor: "#FFAD3F",
    minWidth: 193,
    minHeight: 44,
    textAlign: "center",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  textButton: {
    color: "#ffff",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: fonts.poppins.medium,
    textAlign: "center",
    letterSpacing: -0.01,
  },
  title: {
    marginTop: 16,
    fontSize: 24,
    fontFamily: fonts.poppins.regular,
    color: colors.primaryGreen,
  },
  subTitle: {
    paddingTop: 0,
    marginTop: 0,
    color: colors.secundary8,
    fontSize: 12,
    fontFamily: fonts.poppins.regular,
  },
});

export default ModalPaymentConfirmed;
