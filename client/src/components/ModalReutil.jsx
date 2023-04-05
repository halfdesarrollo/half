import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Ok from '../../assets/ok.svg'
import {colors, fonts} from '../utils/theme'

const ModalReutil = ({textPrimary, asset}) => {
  return (
      <View style={styles.content}>
        {asset === 'ok' ? <Ok style={styles.contentAsset}/> : ''}
        <Text style={styles.contentText}>{textPrimary}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  content: {
    width: wp('70%'),
    height: hp('40%'),
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    gap: 20
  },
  contentAsset: {
    width: wp(50),
    height: hp(50),
  },
  contentText: {
    fontFamily: fonts.poppins.medium,
    fontSize: 20,
    height: hp('10%'),
    width: wp('40%'),
    textAlign: 'center',
  }
})


export default ModalReutil