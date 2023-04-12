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
          <Text style={styles.secondTitle}>Cantidad</Text>
        )}
        {screen === 'viewOrderScreen' && (
          <Text style={[styles.text, styles.secondTitle]}>Estado</Text>
        )}
        {screen === 'payScreen' && <Text></Text>}
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
    height: hp(40),
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

  top: {
    borderColor: colors.secundary4,
    borderBottomWidth: 1,
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
  },

  // Cantidad / Estado
  secondTitle: {
    paddingRight: 14,
  },
})

export default YourProductList
