import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigate } from 'react-router-native'
import { colors, fonts } from '../utils/theme'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useDispatch } from 'react-redux'
import { addAllOrder } from '../redux/slices/order/orderSlice'

const BigButtonPay = ({ text, route, order = false }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handlePress = () => {
    if (order) {
      dispatch(addAllOrder())
    }

    navigate(route)
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default BigButtonPay
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryGreen,
    paddingVertical: 11,
    borderRadius: 6,
    width: wp('90%'),
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fonts.poppins.bold,
  },
})
