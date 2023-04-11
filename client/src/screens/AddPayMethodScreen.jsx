import { StyleSheet, View, ScrollView, Pressable, Text } from 'react-native'
import React, { useState } from 'react'
import ViewTipCoupon from '../components/ViewTipCoupon'
import { AddCard } from '../components/AddCard'
import { CashPayment } from '../components/CashPayment'
import { OrderSummary } from '../components/OrderSummary'
import TitlePage from '../components/TitlePage'
import PaymentProof from '../components/PaymentProof'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import ModalPaymentConfirmed from '../components/ModalPaymentConfirmed'
import { colors, fonts } from '../utils/theme'
import { useDispatch } from 'react-redux'
import { addTip } from '../redux/slices/order/orderSlice'

export const AddPayMethodScreen = () => {
  // guarda el valor ingresado en el input del componente Tip
  const [tipInput, setTipInput] = useState()
  const [modalVisible, setModalVisible] = useState(false)

  const dispatch = useDispatch()

  const handlePay = () => {
    setModalVisible(true)
    dispatch(addTip(tipInput))
  }

  return (
    <View style={styles.container}>
      <TitlePage text='Agregar método de pago' route='/pay' />
      <View style={styles.visibleBox}>
        <ScrollView>
          <AddCard />
          <CashPayment />
          <ViewTipCoupon tipInput={tipInput} setTipInput={setTipInput} />
          <PaymentProof />
          <OrderSummary />
        </ScrollView>
      </View>
      <ModalPaymentConfirmed modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <Pressable
        style={styles.pressButton}
        onPress={() => handlePay()}
      >
        <Text style={styles.text}>Pagar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
  },
  // button to active modal
  pressButton: {
    width: wp('90%'),
    marginTop: hp(5),
    elevation: 5,
    backgroundColor: colors.primaryGreen,
    paddingVertical: 11,
    borderRadius: 6,
    position: "absolute",
    bottom: hp(5),
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: wp('4.00%'),
    fontFamily: fonts.poppins.bold,
  },
  visibleBox: {
    height: hp(78)
  }
})
