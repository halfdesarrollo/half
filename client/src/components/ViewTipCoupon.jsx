import { View, StyleSheet } from 'react-native'
import Tip from './Tip'
import AddCouponBtn from './AddCouponBtn'
import { colors } from '../utils/theme'
const ViewTipCoupon = ({ tipInput, setTipInput }) => {
  return (
    <View style={[styles.viewPropinaCupon, styles.shadowProps]}>
      <View style={styles.viewPropinaContentPropina}>
        <Tip tipInput={tipInput} setTipInput={setTipInput} />
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
  },
  viewPropinaContentPropina: {
    borderBottomWidth: 1,
    borderBottomColor: colors.secundary6,
    paddingVertical: 4
  },
  shadowProps: {
    shadowColor: '#000',
    elevation: 2,
  },
  viewPropinaContentCupon: {
    paddingVertical: 8
  }
})

export default ViewTipCoupon