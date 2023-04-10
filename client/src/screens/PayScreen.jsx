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
      <ScrollView>
      <TitlePage text='Pagar' route='/vieworder' white={false} />
      <YourProductList screen={'payScreen'} />
      <OrdersFromOthersMembers />
      <TypesOfPayments />
      <TotalCost sliceState={'totalPrice'}/>
      <BigButtonPay text='Pagar' route='/addpaymethod' />
      </ScrollView>
    </View>
  )
}

export default PayScreen

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
  },
})
