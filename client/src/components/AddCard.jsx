import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import AddCardButton from '../components/AddCardButton'
import { fonts } from '../utils/theme'
import DebitCard from '../../assets/debit-card.svg'

export const AddCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <DebitCard style={styles.debitCard} />
        <Text style={styles.title}>Puedes agregar un TC o débito</Text>
      </View>
      <AddCardButton />
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    gap: wp(6),
    marginLeft: wp(10),
    marginBottom: hp(-3),
  },
  title: {
    fontFamily: fonts.poppins.medium,
    fontSize: 16,
  },
  debitCard: {
    width: wp(9),
    height: hp(9),
  },
})
