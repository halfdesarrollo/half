import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TrashIcon from '../../assets/trash.svg'
import { fonts } from '../utils/theme'

const OrderList = ({ screen, plate }) => {
  const [state, setState] = useState('Entregado')

  return (
    <View>
      {screen === 'orderScreen' && (
        <View>
          <View style={styles.spaceText}>
            <View>
              <Text style={styles.text}>{plate}</Text>
              <Text style={styles.text}>S/.22.90</Text>
            </View>
            <View style={styles.quantIcon}>
              <Text style={styles.text}>01</Text>
              <TrashIcon />
            </View>
          </View>
        </View>
      )}
      {screen === 'viewOrderScreen' && (
        <View style={styles.spaceText}>
          <Text style={styles.text}>{plate}</Text>
          <Text style={styles.text}>{state}</Text>
        </View>
      )}
      {screen === 'payScreen' && (
        <View style={styles.payContainer}>
          <Text style={styles.text}>{plate}</Text>
          <Text style={styles.text}>S/.22.90</Text>
        </View>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  spaceText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },

  text: {
    fontFamily: fonts.poppins.medium,
  },

  // Order Screen
  quantIcon: {
    flexDirection: 'row',
    gap: 10,
  },

  //
  payContainer: {
    gap: 8,
    marginTop: 15,
  },
  // payText: {
  //   fontFamily
  // },
})

export default OrderList
