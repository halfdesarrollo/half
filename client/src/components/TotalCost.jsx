import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useSelector } from 'react-redux';

const TotalCost = () => {
    
const totalPrice = useSelector(state => state.orderState.cash)
const precioTotal = totalPrice ==  0  ? "49.70" : totalPrice.toFixed(2)

  return (
    <View>
        <View style={styles.conteiner}>
            <View style={styles.box}>
            <Text style={styles.title}>Costo total</Text>
            <View style={styles.line}></View>
            <Text style={styles.price}>S/.{precioTotal}</Text>
        </View>
        </View>
    </View>
  )
}

export default TotalCost



const styles = StyleSheet.create({
  conteiner: {
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
  },
  box: {
    width: wp(85),
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
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
    fontWeight: "500",
    margin: 5,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#4B5563",
    width: "99%",
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: { 
    margin: 5,
  }
});
