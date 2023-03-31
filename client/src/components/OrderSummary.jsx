import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const OrderSummary = ({ total, subTotal }) => {
  
  let totalDinero = total || "40.30";
  let subTotalDinero = subTotal || "40.30";

  return (
    <View style={styles.conteiner}>
      <Text style={styles.title}>Resumen del Pedido</Text>
      <View style={styles.pedidos}>
        <View style={styles.line}>
          <Text>Subtotal</Text>
          <Text>S/.{totalDinero}</Text>
        </View>
        <View style={styles.line}>
          <Text>Total a Pagar</Text>
          <Text style={styles.textMoney}>S/.{subTotalDinero}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
  },
  pedidos: {
    width: wp(85),
    height: 96,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    marginVertical: 21,
    marginTop: 21,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 21,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#F1F2F3",
    width: "90%",
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
