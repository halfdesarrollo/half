import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewTipCoupon from '../components/ViewTipCoupon'
import { AddCard } from '../components/AddCard'
import { CashPayment } from '../components/CashPayment'
import { OrderSummary } from '../components/OrderSummary'

export const AddPayMethodScreen = () => {
  return (
    <View>
      <Text>AddPayMethodScreen</Text>
      <AddCard />
      <CashPayment />
      <ViewTipCoupon/>
      <OrderSummary/>
    </View>
  )
}

const styles = StyleSheet.create({})
