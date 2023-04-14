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

export const AddPayMethodScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const handlePay = () => {
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <TitlePage text='Agregar método de pago' route='/pay' />
      <View style={styles.visibleBox}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <AddCard />
          <CashPayment />
          <ViewTipCoupon />
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
  scroll: {
    alignItems: 'center',
    paddingBottom: hp(1)
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
