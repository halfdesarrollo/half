import { ScrollView, StyleSheet, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import TitlePage from '../components/TitlePage'
import YourProductList from '../components/YourProductList'
import TotalCost from '../components/TotalCost'
import BigButtonPay from '../components/BigButtonPay'
import OrdersFromOthersMembers from '../components/OrdersFromOthersMembers'
import TypesOfPayments from '../components/TypesOfPayments'

const PayScreen = () => {
  return (
    <View style={styles.container}>
      <TitlePage text='Pagar' route='/vieworder' white={false} />
      <ScrollView contentContainerStyle={styles.visibleBox} >
        <YourProductList screen={'payScreen'} />
        <OrdersFromOthersMembers />
        <TypesOfPayments />
        <TotalCost sliceState={'totalPrice'} />
      </ScrollView>
      <View style={styles.btn}>
        <BigButtonPay text='Pagar' route='/addpaymethod' />
      </View>

    </View>
  )
}

export default PayScreen

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
  visibleBox: {
    height: hp(78),
    alignItems: 'center'
  }
})
