import { StyleSheet, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import TitlePage from '../components/TitlePage'
import YourProductList from '../components/YourProductList'
import BigButtonPay from '../components/BigButtonPay'
import TotalCost from '../components/TotalCost'

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <TitlePage text={'Ordernar'} route={'/menucard/1'} />
      <YourProductList screen={'orderScreen'} />
      <TotalCost titleTwo={'(Este monto aún no será cobrado)'}/>
      <BigButtonPay text='Ordenar' route='/menucard/1' />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
  },
})
