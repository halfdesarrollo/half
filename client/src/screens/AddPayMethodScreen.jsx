import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewPropinaCupon from '../components/ViewPropinaCupon'
import { CashPayment } from '../components/CashPayment'

export const AddPayMethodScreen = () => {
  return (
    <View>
      <Text>AddPayMethodScreen</Text>
      <ViewPropinaCupon/>
      <CashPayment />
    </View>
  )
}

const styles = StyleSheet.create({})
