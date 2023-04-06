import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import SearchFriends from '../components/SearchFriends'
import TitlePage from '../components/TitlePage'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import SocialMedias from '../components/SocialMedias'
import Contacts from '../components/Contacts'
import SendInviteModal from '../components/SendInviteModal'

const InviteFriendsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <TitlePage text={'Invita amigos a tu mesa'} white={true} route={'/menucard/4'} />
      <SearchFriends />
      <SocialMedias />
      <Contacts modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <SendInviteModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
  btn: {
    position: 'absolute',
    bottom: 25,
  },
})
