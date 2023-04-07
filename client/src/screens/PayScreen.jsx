import { StyleSheet, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import TitlePage from '../components/TitlePage'
import YourProductList from '../components/YourProductList'
import TotalCost from '../components/TotalCost'
import BigButtonPay from '../components/BigButtonPay'

const PayScreen = () => {
  return (
    <View style={styles.container}>
      <TitlePage text='Pagar' route='/vieworder' white={false} />
      <YourProductList screen={'payScreen'} />
      <TotalCost />
      <BigButtonPay text='Pagar' route='/addpaymethod' />
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
