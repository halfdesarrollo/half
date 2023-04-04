import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useNavigate } from 'react-router-native'
import { colors } from '../utils/theme'
import { fonts } from '../utils/theme'

const ViewOrderButton = () => {
  const navigate = useNavigate()

  const buttonOnPress = () => {
    navigate('/vieworder')
  }
  return (
    <TouchableOpacity style={styles.button} onPress={buttonOnPress}>
      <Text style={styles.textButton}>Ver pedidos</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryGreen,
    width: wp('38.00%'),
    height: hp('4.00%'),
    borderRadius: 7,
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    fontSize: 17,
    color: '#FFFFFF',
    fontFamily: fonts.poppins.medium,
  },
})

export default ViewOrderButton
