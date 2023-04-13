import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import React from 'react'
import IconAdd from '../../assets/icon-add-cupon.svg'
import { colors, fonts } from '../utils/theme'
import { useNavigate } from 'react-router-native'

const AddCouponBtn = () => {
  const navigate = useNavigate()

  // me lleva a la screen de CouponScreen
  const viewCouponScreen = () => {
    navigate('/couponScreen')
  }

  return (
    <View style={styles.addCupon}>
      <TouchableOpacity
        style={styles.addCuponContent}
        onPress={viewCouponScreen}
      >
        <IconAdd style={styles.addCuponImage} />
        <Text style={styles.addCuponText}>Agregar Cupón</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  addCupon: {
    alignItems: 'center',
  },
  addCuponContent: {
    flexDirection: 'row',
    backgroundColor: '#FFC107',
    width: 240,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addCuponImage: {},
  addCuponText: {
    fontFamily: fonts.poppins.bold,
    color: '#fff',
  },
})

export default AddCouponBtn
