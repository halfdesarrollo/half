import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewPropinaCupon from '../components/ViewPropinaCupon'
import { AddCard } from '../components/AddCard'
import { CashPayment } from '../components/CashPayment'
import { OrderSummary } from '../components/OrderSummary'

export const AddPayMethodScreen = () => {
  return (
    <View>
      <Text>AddPayMethodScreen</Text>
      <ViewPropinaCupon/>
      <AddCard />
      <CashPayment />
      <OrderSummary/>
    </View>
  )
}

const styles = StyleSheet.create({})
