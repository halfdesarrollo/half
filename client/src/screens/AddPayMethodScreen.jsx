import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CashPayment } from '../components/CashPayment'
import { OrderSummary } from '../components/OrderSummary'
export const AddPayMethodScreen = () => {
  return (
    <View>
      <CashPayment />
      <OrderSummary/>
    </View>
  )
}

const styles = StyleSheet.create({})
