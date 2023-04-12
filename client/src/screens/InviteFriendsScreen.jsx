import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SearchFriends from '../components/SearchFriends'
import TitlePage from '../components/TitlePage'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import SocialMedias from '../components/SocialMedias'
import Contacts from '../components/Contacts'
import SendInviteModal from '../components/SendInviteModal'
import { colors, fonts } from '../utils/theme'
import { useDispatch } from 'react-redux'
import { addNewGuest } from '../redux/slices/table/tableSlice'

const InviteFriendsScreen = () => {
  const [guests, setGuests] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const dispatch = useDispatch()

  const handlePress = () => {
    setModalVisible(!modalVisible)
    dispatch(addNewGuest(guests))
  }

  return (
    <View style={styles.container}>
      <TitlePage
        text={'Invita amigos a tu mesa'}
        white={true}
        route={'/menucard/0'}
      />
      <SearchFriends />
      <SocialMedias />
      <Contacts
        guests={guests}
        setGuests={setGuests}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {/* Boton para enviar invitacion */}
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
        disabled={guests.length < 1}
      >
        <Text style={styles.text}>Enviar invitación</Text>
      </TouchableOpacity>
      <SendInviteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  )
}

export default InviteFriendsScreen

const styles = StyleSheet.create({
  container: {
    width: wp('100.00%'),
    height: hp('100.00%'),
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primaryGreen,
    paddingVertical: 11,
    borderRadius: 6,
    width: wp('90%'),
    position: 'absolute',
    bottom: hp(3),
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: fonts.poppins.bold,
  },
})
