import { View, StyleSheet } from 'react-native'
import React from 'react'
import Coupon from '../components/Coupon'
import { fonts, colors } from '../utils/theme'
import { useNavigate } from 'react-router-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitlePage from '../components/TitlePage'

const CouponScreen = () => {

  const navigate = useNavigate();

  // la funcion me lleva a la venta anterior que es agregar metodo de pago
  const backViewScreen = () => {
    navigate('/addpaymethod');
  }

  return (
    <View style={styles.couponS}>
      <TitlePage text='Agregar cupón' route='/addpaymethod' />
      <Coupon viewCheck={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  couponS: {
    width: wp('100%'),
    height: hp('100%'),
  },
  couponSHeader: {
    width: wp('100%'),
    height: hp('10%'),
    backgroundColor: colors.primaryGreen,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 14,
  },
  couponSTitle: {
    fontFamily: fonts.poppins.medium,
    color: colors.secundary6,
    fontSize: 18
  },
})

export default CouponScreen