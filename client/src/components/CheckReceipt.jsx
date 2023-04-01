import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { fonts } from '../utils/theme'

 function CheckReceipt() {
  return (
    <TouchableOpacity style={styles.conteiner}>
         <Text style={styles.text}>Revisar Comprobante </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    conteiner: {
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      fontFamily: fonts.poppins.regular,
      marginTop: 30,
      backgroundColor: "#FFAD3F",
      width: 193,
      height: 44,
      textAlign: "center",
      borderRadius: 7,
      shadowColor: "#000000",
      shadowOffset: { width: 1, height: 3 },
      shadowOpacity: 0.2,
      gap: 10
    },

    text: {
        color: "#ffff",
        width: 153,
        height: 21,
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 24,
        textAlign: "center",
        marginTop: 7,
        letterSpacing: -0.01,
      },
})

export default CheckReceipt