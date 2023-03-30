import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AddCard } from '../components/AddCard'
import { CashPayment } from '../components/CashPayment'

export const AddPayMethodScreen = () => {
  return (
    <View>
      <AddCard />
      <CashPayment />
    </View>
  )
}

const styles = StyleSheet.create({})
