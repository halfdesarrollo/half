import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AddCard } from '../components/AddCard'
import { CashPayment } from '../components/CashPayment'
import { OrderSummary } from '../components/OrderSummary'
export const AddPayMethodScreen = () => {
  return (
    <View>
      <AddCard />
      <CashPayment />
      <OrderSummary/>
    </View>
  )
}

const styles = StyleSheet.create({})
