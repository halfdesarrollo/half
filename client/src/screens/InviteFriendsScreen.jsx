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
  return (
    <View style={styles.container}>
      <TitlePage text={'Invita amigos a tu mesa'} white={true} />
      <SearchFriends />
      <SocialMedias />
      <Contacts />
      <SendInviteModal />
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
