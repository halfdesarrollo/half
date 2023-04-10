import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
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

export const AddPayMethodScreen = () => {
  return (
    <View style={styles.container}>
      <TitlePage text='Agregar método de pago' route='/pay' />
      <ScrollView>
        <AddCard />
        <CashPayment />
        <ViewTipCoupon />
        <PaymentProof />
        <OrderSummary />
        <ModalPaymentConfirmed />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
  },
})
