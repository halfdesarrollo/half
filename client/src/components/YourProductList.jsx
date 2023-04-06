import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import OrderList from './OrderList'
import { colors, fonts } from '../utils/theme'
import { useSelector } from 'react-redux'

const YourProductList = ({ screen }) => {
  const [plates, setPlates] = useState([
    'Caldo de Gallina',
    'Papa a la huancaína',
    'Jarra de chicha morada',
  ])

  const { order } = useSelector((state) => state.orderState)

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
        {plates?.map((plate, i) => {
          return (
            <View key={i}>
              <OrderList plate={plate} screen={screen} />
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
    shadowColor: '#000000',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    textAlign: 'center',
    overflow: 'hidden',
    elevation: 4,
  },

  top: {
    borderColor: colors.secundary4,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 10,
  },

  platesContainer: {
    padding: 10,
  },

  text: {
    fontFamily: fonts.poppins.medium,
  },

  // Cantidad / Estado
  secondTitle: {
    marginLeft: 150,
  },
})

export default YourProductList
