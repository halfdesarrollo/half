import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TotalCost from '../components/TotalCost'
import TitlePage from "../components/TitlePage"


const PayScreen = () => {
  return (
    <View>
      <Text>PayScreen</Text>
       <TotalCost/>
       <TitlePage  text="Pagar" route="/vieworder" white={false}/>
    </View>
  )
}

export default PayScreen

const styles = StyleSheet.create({})
