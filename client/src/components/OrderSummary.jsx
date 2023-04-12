import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { useSelector } from 'react-redux'
import { colors, fonts } from '../utils/theme'

export const OrderSummary = () => {
  const { totalPrice, offersUserSelected, tip } = useSelector(
    (state) => state.orderState
  )
  const subTotal = totalPrice
  const coupon =
    offersUserSelected.value > 0 ? subTotal * offersUserSelected.value : 0
  const serviceFee = 1
  const total = subTotal - coupon + tip + serviceFee
  return (
    <View style={styles.conteiner}>
      <Text style={styles.title}>Resumen del Pedido</Text>
      <View style={styles.pedidos}>
        <View style={styles.line}>
          <Text style={styles.text}>Costo de productos</Text>
          <Text style={styles.textMoney}>S/.{subTotal?.toFixed(2)}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Propina</Text>
          <Text style={styles.textMoney}>S/.{tip?.toFixed(2)}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Cupon de Descuento</Text>
          <Text style={styles.textMoney}>S/.{coupon?.toFixed(2)}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Tarifa de servicio</Text>
          <Text style={styles.textMoney}>S/.{serviceFee?.toFixed(2)}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.textTotal}>Total a Pagar</Text>
          <Text style={styles.textMoneyTotal}>S/.{total?.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  pedidos: {
    width: wp(85),
    paddingTop: hp(1),
    paddingBottom: hp(3),
    minHeight: 96,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  text: {
    fontFamily: fonts.poppins.regular,
    letterSpacing: 0,
    fontSize: 16,
    lineHeight: 24,
    color: colors.secundary2,
  },
  textTotal: {
    fontFamily: fonts.poppins.bold,
    letterSpacing: 0,
    fontSize: 18,
    lineHeight: 24,
    color: colors.secundary2,
  },
  title: {
    marginBottom: hp(2),
    marginTop: hp(4),
    fontFamily: fonts.poppins.medium,
    letterSpacing: 0,
    fontSize: 14,
    lineHeight: 21,
    color: colors.secundary2,
  },
  line: {
    color: colors.secundary2,
    borderBottomWidth: 1,
    borderColor: '#F1F2F3',
    width: '90%',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textMoneyTotal: {
    fontFamily: fonts.poppins.bold,
    fontSize: 19,
    lineHeight: 28.5,
    color: colors.secundary2,
  },
  textMoney: {
    fontFamily: fonts.poppins.regular,
    fontSize: 18,
    lineHeight: 28.5,
    color: colors.secundary2,
  },
})
