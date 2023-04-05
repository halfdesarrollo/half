import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitlePage from "../components/TitlePage"

const PayScreen = () => {
  return (
    <View>
    <TitlePage  text="Pagar" route="/vieworder" white={false}/>
    </View>
  )
}

export default PayScreen

const styles = StyleSheet.create({})
