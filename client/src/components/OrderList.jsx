import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import TrashIcon from '../../assets/trash.svg'
import { fonts } from '../utils/theme'
import { removeOrder } from '../redux/slices/order/orderSlice'
import { useDispatch } from 'react-redux'

const OrderList = ({ screen, dish }) => {
  const dispatch = useDispatch()

  const [state, setState] = useState('Entregado')

  const deleteDish = (dishId) => {
    console.log(Number(dish.id))
    dispatch(removeOrder(dishId))
  }

  return (
    <View>
      {screen === 'orderScreen' && (
        <View>
          <View style={styles.spaceText}>
            <View>
              <Text style={styles.text}>{dish.name}</Text>
              <Text style={styles.text}>S/.22.90</Text>
            </View>
            <View style={styles.quantIcon}>
              <Text style={styles.text}>{dish.quantity}</Text>
              <TouchableOpacity onPress={() => deleteDish(dish.id)}>
                <TrashIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {screen === 'viewOrderScreen' && (
        <View style={styles.spaceText}>
          <Text style={styles.text}>{dish.name}</Text>
          <Text style={styles.text}>{state}</Text>
        </View>
      )}
      {screen === 'payScreen' && (
        <View style={styles.payContainer}>
          <Text style={styles.text}>{dish.name}</Text>
          <Text style={styles.text}>S/.22.90</Text>
        </View>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  spaceText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },

  text: {
    fontFamily: fonts.poppins.medium,
  },

  // Order Screen
  quantIcon: {
    flexDirection: 'row',
    gap: 10,
  },

  payContainer: {
    gap: 8,
    marginTop: 15,
  },
})

export default OrderList
