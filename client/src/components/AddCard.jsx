import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import { addCreditCardToPay } from '../redux/slices/user/userSlice'
import Trash from '../../assets/trash.svg'
import IconVisa from '../../assets/iconVisa.svg'

export const AddCard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { creditCard } = useSelector(state => state.userState)
  const { user } = useSelector(state => state.userState)

  const handleSelect = () => {
    navigate('/addcard')
    dispatch(addCreditCardToPay(true))
  }
  const handleDelete = () => {
    dispatch(addCreditCardToPay(false))
  }
  return (
    <View style={styles.container}>
      {
        creditCard
          ? <View style={styles.cardPayElement}>
            <IconVisa style={styles.cardPayIcon} />
            <View>
              <Text style={styles.cardPayText}>
                {user.userLogged?.name || user.userRegistered?.name}
              </Text>
              <Text style={styles.cardPayText}>xxxx xxxx xxxx 4590</Text>
            </View>
            <TouchableOpacity onPress={handleDelete}>
              <Trash />
            </TouchableOpacity>
          </View>
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
  cardPayElement: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cardPayIcon: {
    elevation: 2,
  },
  cardPayText: {
    fontFamily: fonts.poppins.regular,
    fontSize: 15,
  },
})
