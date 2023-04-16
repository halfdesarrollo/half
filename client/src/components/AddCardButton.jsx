import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { fonts } from '../utils/theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const AddCardButton = ({ action }) => {
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity onPress={() => action()}>
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
    backgroundColor: '#FFC107',
    width: wp(90),
    height: 45,
    borderRadius: 5,
    // backgroundColor: 'white',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
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
