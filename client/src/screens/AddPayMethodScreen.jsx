import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewTipCoupon from '../components/ViewTipCoupon'
import { AddCard } from '../components/AddCard'
import { CashPayment } from '../components/CashPayment'
import { OrderSummary } from '../components/OrderSummary'
import TitlePage from '../components/TitlePage'

export const AddPayMethodScreen = () => {
  return (
    <View>
      <TitlePage text='Agregar método de pago' route='/pay' />
      <AddCard />
      <CashPayment />
      <ViewTipCoupon />
      <OrderSummary />
    </View>
  )
}

const styles = StyleSheet.create({})
