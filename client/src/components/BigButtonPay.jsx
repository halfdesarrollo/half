import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigate } from 'react-router-native'
import { colors, fonts } from '../utils/theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useDispatch, useSelector } from 'react-redux'
import { addAllOrder } from '../redux/slices/order/orderSlice'

const BigButtonPay = ({ text, route, order = false }) => {
  const dispatch = useDispatch()
  const { preOrderPrice } = useSelector((state) => state.orderState)
  const navigate = useNavigate()
  const handlePress = () => {
    if (order) {
      dispatch(addAllOrder(preOrderPrice))
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
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: fonts.poppins.bold,
  },
})
