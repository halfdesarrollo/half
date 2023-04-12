import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitlePage from '../components/TitlePage'
import NewCardPay from '../components/NewCardPay'

const AddCardPayScreen = () => {
  return (
    <View>
      <TitlePage text={'Agregar tarjeta'} route={'/addpaymethod'} />
      <NewCardPay />
    </View>
  )
}

export default AddCardPayScreen

const styles = StyleSheet.create({})
