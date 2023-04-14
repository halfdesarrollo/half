import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import AddCardButton from '../components/AddCardButton'
import { fonts } from '../utils/theme'
import DebitCard from '../../assets/debit-card.svg'
import { useNavigate } from 'react-router-native'
import { useDispatch, useSelector } from 'react-redux'
import ExistingCard from './ExistingCard'
import { addCreditCardToPay } from '../redux/slices/user/userSlice'

export const AddCard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { creditCard } = useSelector(state => state.userState)

  const handleSelect = () => {
    navigate('/addcard')
    dispatch(addCreditCardToPay(true))
  }

  return (
    <View style={styles.container}>
      {
        creditCard
          ? <ExistingCard />
          : <View style={styles.cardContainer}>
            <DebitCard style={styles.debitCard} />
            <Text style={styles.title}>Puedes agregar un TC o débito</Text>
          </View>
      }

      <AddCardButton action={handleSelect} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: hp('18%'),
    paddingTop: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
