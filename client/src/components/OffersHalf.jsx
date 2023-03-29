import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {fonts, colors} from '../utils/theme'

const OffersHalf = () => {
  return (
    <View style={styles.offers}>
      <Text style={styles.offersTitle}>Ofertas Half</Text>
      <View style={styles.offersElement}>
        <Image style={styles.offersImage}/>
        <View style={styles.offersTexts}>
          <Text style={styles.offersSubtitle}>10% de desct. por tu 1era visita.</Text>
          <Text style={styles.offersParagraph}>Por elegirnos en está ocasión te estaremos brindando 10% de dsct. Podrás agregarlo a la hora de pagar.</Text>
        </View>
      </View>
      <View style={styles.offersElement}>
        <Image style={styles.offersImage}/>
        <View style={styles.offersTexts}>
          <Text style={styles.offersSubtitle}>50% de desct. en entradas.</Text>
          <Text style={styles.offersParagraph}>Por elegirnos en está ocasión te estaremos brindando una entrada de con 50% de desct. Podrás agregarlo a la hora de pagar.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  offers: {
    paddingHorizontal: 10,
  },
  offersTitle: {
    fontFamily: fonts.poppins,
    paddingLeft: 10,
    fontSize: 20,
  },
  offersElement: {
    flexDirection:'row',
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: colors.secundary3,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 14,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    gap: 10,
  },
  offersImage: {
    backgroundColor:'red',
    width: 40,
    height: 40
  },
  offersTexts: {
    flexDirection: 'column',
    width: 300,
  },
  offersSubtitle: {
    fontSize: 16,
    fontFamily: fonts.poppins,
    fontWeight: 'bold'
  },
  offersParagraph: {
    fontSize: 12,
    fontFamily: fonts.poppins,
    color: colors.secundary4,
  }
})

export default OffersHalf