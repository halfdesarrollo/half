import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { colors, fonts } from '../utils/theme'
import InviteCard from './InviteCard'
import { useNavigate } from 'react-router-native'
import { addNewGuest } from '../redux/slices/table/tableSlice'

const Contacts = ({ guests, setGuests }) => {
  const contacts = useSelector((state) => state.userState.contacts)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contactos que ya tienen Half</Text>
      <ScrollView style={styles.contactsBox}>
        {contacts?.map((e) => {
          return (
            <InviteCard
              key={e.id}
              id={e.id}
              name={e.name}
              img={e.img}
              guests={guests}
              setGuests={setGuests}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Contacts

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    marginVertical: 20,
  },
  title: {
    fontSize: 17,
    fontFamily: fonts.poppins.bold,
    color: colors.secundary4,
    paddingBottom: 5,
  },
  contactsBox: {
    height: hp(57),
  },
})
