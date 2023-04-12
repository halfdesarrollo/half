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
      <View style={styles.visibleBox}>
        <ScrollView contentContainerStyle={styles.scrollView} >
          <YourProductList screen={'payScreen'} />
          <OrdersFromOthersMembers />
          <TypesOfPayments />
          <TotalCost sliceState={'totalPrice'} />
        </ScrollView>
      </View>
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
  scrollView:{
    width: wp(100),
    alignItems:'center',
    gap:hp(2.5),
  },
  btn: {
    height: hp(13),
    width: wp(100),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
  },
  visibleBox: {
    height: hp(79),
    alignItems: 'center'
  }
})
