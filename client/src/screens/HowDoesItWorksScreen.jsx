import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import ContinueButton from '../components/ContinueButton'

// Assets
import OrangeTopEllipse from '../../assets/orange-top-ellipse.svg'
import OrangeThinEllipse from '../../assets/orange-thin-ellipse.svg'
import GreenThinEllipse from '../../assets/green-thin-ellipse.svg'
import PlaceMap from '../../assets/place-map.svg'
import GreenCheck from '../../assets/green-check.svg'
import WelcomeFood from '../../assets/welcome-food.svg'
import PayHDIW from '../../assets/pay-hdiw.svg'
import Promotions from '../../assets/promotions.svg'
import GreenBottomEllipse from '../../assets/green-bottom-ellipse.svg'
import GreenBottomThinEllipse from '../../assets/green-bottom-thin-ellipse.svg'

// Utils
import { fonts } from '../utils/theme'

export const HowDoesItWorksScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseContainer}>
        <OrangeTopEllipse style={styles.topEllipse} />
        <OrangeThinEllipse style={styles.orangeThinEllipse} />
        <GreenThinEllipse style={styles.greenThinEllipse} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>¿Cómo funciona?</Text>
        <View style={styles.itemContainer}>
          <PlaceMap style={styles.placeMap} />
          <Text style={[styles.text, styles.textEncuentra]}>
            Encuentra distintos locales cerca a tí
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <GreenCheck style={styles.greenCheck} />
          <Text style={[styles.text, styles.textRealiza]}>
            Realiza reservas en menos tiempo
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <WelcomeFood style={styles.welcomeFood} />
          <Text style={[styles.text, styles.textOrdena]}>
            Ordena o anticipa tu orden si estás en {'\n'}camino al local
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <PayHDIW style={styles.payIcon} />
          <Text style={[styles.text, styles.textDivide]}>
            Divide y paga la cuenta desde tu celular
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Promotions style={styles.promotions} />
          <Text style={[styles.text, styles.textDisfruta]}>
            Disfruta de las promociones personalizadas{'\n'} según tu uso
          </Text>
        </View>
      </View>
      <View style={styles.ellipseContainer}>
        <View style={styles.continueButton}>
          <ContinueButton to={'/login'} />
        </View>
        <GreenBottomThinEllipse style={styles.greenBottomThinEllipse} />
        <GreenBottomEllipse style={styles.greenBottomEllipse} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp('100.00%'),
    height: hp('100.00%'),
  },
  ellipseContainer: {
    position: 'relative',
  },
  topEllipse: {
    width: wp('100.00%'),
    height: hp('10.00%'),
    position: 'absolute',
  },
  orangeThinEllipse: {
    width: wp('100.00%'),
    height: hp('30.00%'),

    top: hp('-2.00%'),
    position: 'absolute',
  },
  greenThinEllipse: {
    width: wp('100.00%'),
    height: hp('32.00%'),
    top: -15,
    position: 'absolute',
  },
  infoContainer: {
    marginTop: hp('10.00%'),
  },
  title: {
    fontFamily: fonts.poppins.bold,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    marginTop: hp('2.50%'),
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    letterSpacing: -0.6,
  },
  textEncuentra: {
    marginLeft: 15,
    marginTop: 25,
  },
  textRealiza: {
    marginLeft: 38,
    marginTop: 10,
  },
  textOrdena: {
    marginLeft: 10,
    marginTop: 10,
    lineHeight: 30,
  },
  textDivide: {
    marginLeft: 15,
    marginTop: 10,
  },
  textDisfruta: {
    marginLeft: wp('2.00%'),
    marginTop: 14,
    lineHeight: 30,
  },
  placeMap: {
    width: wp('20.00%'),
    height: hp('10.00%'),
    marginLeft: 20,
  },
  greenCheck: {
    width: wp('13.00%'),
    height: hp('6.00%'),
    marginLeft: 30,
  },
  welcomeFood: {
    width: wp('20.00%'),
    height: hp('10.00%'),
    marginLeft: 20,
  },
  payIcon: {
    width: wp('20.00%'),
    height: hp('10.00%'),
    marginLeft: 14,
    marginTop: -10,
  },
  promotions: {
    width: wp('14.00%'),
    height: hp('7.00%'),
    marginLeft: wp('7.00%'),
  },
  continueButton: {
    zIndex: 1,
    position: 'absolute',
    bottom: hp('-12.00%'),
    left: wp(25),
  },
  greenBottomThinEllipse: {
    width: wp('100.00%'),
    height: hp('100.00%'),
    position: 'absolute',
    bottom: hp('-70.00%'),
    zIndex: 0,
  },
  greenBottomEllipse: {
    width: wp('100.00%'),
    height: hp('100.00%'),
    position: 'absolute',
    bottom: hp('-70.00%'),
    zIndex: 0,
  },
})
