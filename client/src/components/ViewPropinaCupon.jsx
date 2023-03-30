import { View, StyleSheet } from 'react-native'
import React from 'react'
import Propina from './Propina'
import AddCuponBtn from './AddCuponBtn'
import { colors } from '../utils/theme'

const ViewPropinaCupon = () => {
  return (
    <View style={[styles.viewPropinaCupon, styles.shadowProps]}>
      <View style={styles.viewPropinaContentPropina}>
        <Propina/>
      </View>
      <View style={styles.viewPropinaContentCupon}>
        <AddCuponBtn/>
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

export default ViewPropinaCupon