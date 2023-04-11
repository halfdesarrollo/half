import { StyleSheet, View } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import TitlePage from '../components/TitlePage'
import StateOrder from '../components/StateOrder'
import YourProductList from '../components/YourProductList'
import BigButtonPay from '../components/BigButtonPay'

const ViewOrderScreen = () => {
  return (
    <View style={styles.container}>
      <TitlePage text='Ver pedidos' route='/menucard/0' white={false} />
      <StateOrder />
      <YourProductList screen={'viewOrderScreen'} />
      <View style={styles.btn}>
        <BigButtonPay text='Pagar' route='/pay' />
      </View>
    </View>
  )
}

export default ViewOrderScreen

const styles = StyleSheet.create({
  container: {
    width: wp('100.00%'),
    height: hp('100.00%'),
    alignItems: 'center',
  },
  btn: {
    position: "absolute",
    bottom: hp(5),
  },
})
