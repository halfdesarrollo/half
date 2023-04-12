import { View, Text, StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import OrderList from './OrderList'
import { colors, fonts } from '../utils/theme'
import { useSelector } from 'react-redux'

const YourProductList = ({ screen }) => {
  const { preOrder, order } = useSelector((state) => state.orderState)

  const orderType = screen === 'orderScreen' ? preOrder : order

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Tu Lista de Pedidos</Text>
        {screen === 'orderScreen' && (
          <Text style={[styles.secondTitle, styles.text]}>Cantidad</Text>
        )}
        {screen === 'viewOrderScreen' && (
          <Text style={[styles.text, styles.secondTitle]}>Estado</Text>
        )}
        {screen === 'payScreen' && <Text></Text>}
      </View>
      <View style={styles.containerLine}>
        <View style={styles.line}/>
      </View>
      <View style={styles.platesContainer}>
        {orderType?.map((dish, i) => {
          return (
            <View key={i}>
              <OrderList dish={dish} screen={screen} />
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: wp('90%'),
    minHeight: hp(40),
    marginTop: hp(3),
    textAlign: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  line:{
    width:wp(89),
    borderColor: colors.secundary4,
    borderBottomWidth: 1,
  },

  containerLine:{
    alignItems:'center',
  },

  top: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },

  platesContainer: {
    padding: 10,
  },

  text: {
    fontFamily: fonts.poppins.medium,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0,
    color: colors.secundary4
  },

  // Cantidad / Estado
  secondTitle: {
    paddingRight: 14,
  },
})

export default YourProductList
