import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import ViewPropinaCupon from '../components/ViewPropinaCupon'
import { AddCard } from '../components/AddCard'
import { CashPayment } from '../components/CashPayment'
import { OrderSummary } from '../components/OrderSummary'
import PaymentProof from '../components/PaymentProof'

export const AddPayMethodScreen = () => {
  return (
    <ScrollView>
      <Text>AddPayMethodScreen</Text>
      <ViewPropinaCupon/>
      <AddCard />
      <CashPayment />
      <PaymentProof />
      <OrderSummary/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
