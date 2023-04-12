import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { colors, fonts } from '../utils/theme'
import { useDispatch, useSelector } from 'react-redux'
import { useToggle } from '../customHooks'
import { CheckBox } from 'react-native-elements'
import { addToTotalPrice, removeToTotalPrice } from '../redux/slices/order/orderSlice'

const OrdersFromOthersMembers = () => {
  const membersOrders = useSelector((state) => state.tableState.orders)
  const dispatch = useDispatch()
  const finalPriceMore = (price) => dispatch(addToTotalPrice(+price))
  const finalPriceMinus = (price) => dispatch(removeToTotalPrice(+price))

  return (
      <View style={styles.container}>
        <Text style={styles.text}>Pedidos de los demás miembros</Text>
        {membersOrders?.map((el, index) => (
          <View style={styles.containerLine} key={index}>
            <View style={styles.line} />
            <MembersOrdersCard
              userName={el.user.name}
              foodName={el.name}
              foodPrice={el.price}
              finalPriceMore={finalPriceMore}
              finalPriceMinus={finalPriceMinus}
            />
          </View>
        ))}
      </View>
  )
}

const MembersOrdersCard = ({
  userName,
  foodPrice,
  foodName,
  finalPriceMore,
  finalPriceMinus,
}) => {
  const { toggle, changeOpposite } = useToggle()

  const handleChangeSelect = () => {
    !toggle
      ? finalPriceMore(foodPrice)
      : finalPriceMinus(foodPrice)
    changeOpposite()
  }
  return (
    <View style={stylesMembers.container}>
      <View style={stylesMembers.viewDatas}>
        <Text style={stylesMembers.name}>{userName || 'Sin nombre'}</Text>
        <Text style={stylesMembers.food}>{foodName || 'Sin nombre'}</Text>
        <Text style={stylesMembers.price}>S/.{foodPrice || 'Sin precio'}</Text>
      </View>
      <View style={stylesMembers.viewCheckBox}>
        <CheckBox
          checked={toggle}
          onPress={handleChangeSelect}
          iconType='material-community'
          checkedIcon='checkbox-marked'
          uncheckedIcon='checkbox-blank-outline'
          uncheckedColor={colors.primaryGreen}
          checkedColor={colors.primaryGreen}
          size={28}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  containerLine:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: wp(85),
    paddingTop: 8,
    paddingBottom: 5,
    paddingStart: 4,
    color: colors.secundary4,
    fontFamily: fonts.poppins.semiBold,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'left',
  },
  line: {
    width: wp(89),
    borderBottomWidth: 1,
    borderColor: colors.secundary4,
  },
})
const stylesMembers = StyleSheet.create({
  container: {
    width: wp(90),
    height: hp(13),
    flexDirection: 'row',
  },
  viewCheckBox: {
    width: wp(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewDatas: {
    gap: 10,
    paddingStart: 11,
    width: wp(65),
  },
  name: {
    paddingStart: 4,
    color: colors.secundary4,
    fontFamily: fonts.poppins.semiBold,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0,
    marginTop: 10,
  },
  food: {
    fontFamily: fonts.poppins.medium,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
    color: colors.secundary2,
  },
  price: {
    fontFamily: fonts.poppins.regular,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
})

export default OrdersFromOthersMembers;
