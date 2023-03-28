import { View, Text, StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import WelcomePingIcon from '../../assets/welcome-ping-icon.svg'
import React from 'react'

export const WelcomeHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.welcomeHalf}>¡Bienvenidos a HALF!</Text>
      <WelcomePingIcon style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcomeHalf: {
    marginTop: 50,
    marginLeft: 50,
    fontSize: 28,
  },
  logo: {
    width: wp('15.00%'),
    height: hp('10.00%'),
    marginTop: 40,
    marginLeft: 2,
  },
})
