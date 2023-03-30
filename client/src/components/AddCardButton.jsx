import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { fonts } from '../utils/theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const AddCardButton = () => {
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity>
        <Text style={styles.text}>Agregar tarjeta</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: wp(4.5),
    backgroundColor: '#FFC107',
    width: wp(90),
    height: 45,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.2,
  },
  text: {
    color: '#ffff',
    width: wp(80),
    fontFamily: fonts.poppins.medium,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default AddCardButton
