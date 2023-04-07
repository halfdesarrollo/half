import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import ViewTipCoupon from '../components/ViewTipCoupon'
import { AddCard } from '../components/AddCard'
import { CashPayment } from '../components/CashPayment'
import { OrderSummary } from '../components/OrderSummary'
import TitlePage from '../components/TitlePage'
import PaymentProof from '../components/PaymentProof'

export const AddPayMethodScreen = () => {
  return (
    <View>
      <TitlePage text='Agregar método de pago' route='/pay' />
      <ScrollView>
        <AddCard />
        <CashPayment />
        <ViewTipCoupon />
        <PaymentProof />
        <OrderSummary />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})
