import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { 
  widthPercentageToDP as wp 
} from "react-native-responsive-screen";
import { useSelector } from 'react-redux';
import { colors, fonts } from '../utils/theme';

const TotalCost = ({titleTwo}) => {
const totalPrice = useSelector(state => state.orderState.cash)
const precioTotal = totalPrice ==  0  ? "49.70" : totalPrice.toFixed(2)

  return (
    <View>
        <View style={styles.conteiner}>
            <View style={styles.box}>
              <View style={styles.boxText}>  
                <Text style={styles.title}>Costo total</Text>
                {titleTwo && 
                <Text 
                  style={[styles.title, styles.titleTwo]}>
                  {titleTwo}
                </Text>
                }
              </View>
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
  boxText:{
    width: wp(85),
    flexDirection:'row',
  },
  title: {
    fontFamily: fonts.poppins.semiBold,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0,
    margin: 6,
    marginEnd:0,
    color:colors.secundary4,
    paddingStart:wp(1.5),
  },
  titleTwo:{
    marginStart:0
  },
  line: {
    borderBottomWidth: 1,
    borderColor: colors.secundary4,
    width: "99%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal:wp(0.5),
  },
  price: { 
    color:colors.secundary2,
    fontFamily: fonts.poppins.regular,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    margin: 5,
    paddingStart:wp(2),
  }
});
