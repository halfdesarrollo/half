import { View, StyleSheet } from 'react-native'
import Tip from './Tip'
import AddCouponBtn from './AddCouponBtn'
import { colors } from '../utils/theme'
const ViewTipCoupon = () => {
  return (
    <View style={[styles.viewPropinaCupon, styles.shadowProps]}>
      <View style={styles.viewPropinaContentPropina}>
        <Tip />
      </View>
      <View style={styles.viewPropinaContentCupon}>
        <AddCouponBtn />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewPropinaCupon: {
    width: 340,
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginTop: '9%',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  viewPropinaContentPropina: {
    borderBottomWidth: 1,
    borderBottomColor: colors.secundary6,
    paddingVertical: 4,
  },
  shadowProps: {
    shadowColor: '#000',
    elevation: 2,
  },
  viewPropinaContentCupon: {
    paddingVertical: 8,
  },
})

export default ViewTipCoupon
