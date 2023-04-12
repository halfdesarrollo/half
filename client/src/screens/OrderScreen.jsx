import { ScrollView, StyleSheet, View } from 'react-native'
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
      <View style={styles.visibleBox}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TitlePage text={'Ordernar'} route={'/menucard/0'} />
          <YourProductList screen={'orderScreen'} />
          <TotalCost order />
        </ScrollView>
      </View>
      <View style={styles.btn}>
        <BigButtonPay text='Ordenar' route='/menucard/0' order />
      </View>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  scrollView: {
    width: wp(100),
    alignItems: 'center',
    gap: hp(1),
  },
  container: {
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: hp(5),
  },
  visibleBox: {
    maxHeight: hp(86),
  },
})
