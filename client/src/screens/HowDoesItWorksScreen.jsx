import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import OrangeTopEllipse from '../../assets/orange-top-ellipse.svg'
import OrangeThinEllipse from '../../assets/orange-thin-ellipse.svg'
import GreenThinEllipse from '../../assets/green-thin-ellipse.svg'
import PlaceMap from '../../assets/place-map.svg'
import GreenCheck from '../../assets/green-check.svg'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { fonts } from '../utils/theme'

export const HowDoesItWorksScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <OrangeTopEllipse style={styles.topEllipse} />
        <OrangeThinEllipse style={styles.orangeThinEllipse} />
        <GreenThinEllipse style={styles.greenThinEllipse} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>¿Cómo funciona?</Text>
        <View style={styles.encuentraContainer}>
          <PlaceMap style={styles.placeMap} />
          <Text style={styles.textEncuentra}>
            Encuentra distintos locales cerca a tí
          </Text>
        </View>
        <View>
          <GreenCheck style={styles.greenCheck} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp('100.00%'),
    height: hp('100.00%'),
  },
  topEllipse: {
    width: wp('100.00%'),
    height: hp('10.00%'),
    position: 'absolute',
  },
  orangeThinEllipse: {
    width: wp('100.00%'),
    height: hp('30.00%'),
    top: 0,
    position: 'absolute',
  },
  greenThinEllipse: {
    width: wp('100.00%'),
    height: hp('40.00%'),
    top: 0,
    position: 'absolute',
  },
  infoContainer: {
    marginTop: 120,
  },
  title: {
    fontFamily: fonts.poppins,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  encuentraContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 40,
  },
  placeMap: {
    width: wp('20.00%'),
    height: hp('10.00%'),
  },
  textEncuentra: {
    fontSize: 16,
    // textAlign: 'center',
    marginLeft: 20,
  },
  greenCheck: {
    width: wp('15.00%'),
    height: hp('10.00%'),

    // backgroundColor: 'red',
  },
})
