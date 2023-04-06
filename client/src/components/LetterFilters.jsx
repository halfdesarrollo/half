import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { fonts, colors } from '../utils/theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-native'
import { useSelector } from 'react-redux'
import { styles } from './OffersHalf'
import FoodCard from './FoodCard'
import BigButtonOrder from './BigButtonOrder'

const LetterFilters = () => {
  //Traemos el estado restaurante del redux
  const { restaurants } = useSelector((state) => state.restaurantState)
  const { order } = useSelector((state) => state.orderState)

  const [select, setSelect] = useState('Entradas')
  const [orders, setOrders] = useState([])

  const handleDeleteOrder = (id) => {
    const newOrder = order.filter((item) => item.id !== id)
    setOrders(newOrder)
  }

  const handleAddOrder = (item, quantity) => {
    const index = order.findIndex((orderItem) => orderItem.id === item.id)
    if (index === -1) {
      const newOrder = [...order, { ...item, quantity }]
      setOrders(newOrder)
    } else {
      const newOrder = [...order]
      newOrder[index].quantity = quantity
      setOrders(newOrder)
    }
  }

  const { id } = useParams()
  const filterRestaurant = restaurants.filter(
    (restaurant) => restaurant.id === id
  )

  //Filtramos menu del restaurante para hacerlos keys dinamicos
  const filterMenu = filterRestaurant.map((restaurant) => {
    const menu = Object.keys(restaurant.menu)
    menu[1] = menu[1].replace(/([A-Z])/g, ' $1')
    return menu
  })

  // const [info, setInfo] = useState([
  //   "Entradas",
  //   "Platos de fondo",
  //   "Postres",
  //   "Bebidas",
  // ]);
  const filter = (el) => {
    setSelect(el)
  }

  return (
    <View style={style.container}>
      <View style={style.containerView}>
        {filterMenu[0]?.map((el, index) => (
          <TouchableOpacity
            style={select === el ? style.buttonSelected : style.button}
            key={index}
            onPress={() => filter(el)}
          >
            <Text
              style={
                select === el ? style.textbuttonSelected : style.textButton
              }
            >
              {el}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {
        <ScrollView>
          {select === 'Entradas' &&
            filterRestaurant[0].menu.Entradas.map((Entradas, index) => (
              <View key={index}>
                <FoodCard
                  id={Entradas.id}
                  name={Entradas.name}
                  description={Entradas.description}
                  image={Entradas.imageDish}
                  price={Entradas.price}
                  onAddOrder={handleAddOrder}
                  onDelete={handleDeleteOrder}
                  quantity={order.find(
                    (orderItem) => (orderItem.id === id)?.quantity || '0'
                  )}
                />
              </View>
            ))}
          {select === 'Bebidas' &&
            filterRestaurant[0].menu.Bebidas.map((Bebidas, index) => (
              <View key={index}>
                <FoodCard
                  id={Bebidas.id}
                  name={Bebidas.name}
                  description={Bebidas.description}
                  image={Bebidas.imageDrink}
                  price={Bebidas.price}
                  onAddOrder={handleAddOrder}
                  onDelete={handleDeleteOrder}
                  quantity={order.find(
                    (orderItem) => (orderItem.id === id)?.quantity || '0'
                  )}
                />
              </View>
            ))}
          {select === ' Plato De Fondo' &&
            filterRestaurant[0].menu.PlatoDeFondo.map((PlatoDeFondo, index) => (
              <View key={index}>
                <FoodCard
                  id={PlatoDeFondo.id}
                  name={PlatoDeFondo.name}
                  description={PlatoDeFondo.description}
                  image={PlatoDeFondo.imageDish}
                  price={PlatoDeFondo.price}
                  onAddOrder={handleAddOrder}
                  onDelete={handleDeleteOrder}
                  quantity={order.find(
                    (orderItem) => (orderItem.id === id)?.quantity || '0'
                  )}
                />
              </View>
            ))}
          <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
            <BigButtonOrder route='/order' />
          </View>
        </ScrollView>
      }
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    width: wp('100'),
    maxWidth: wp('100'),
    height: hp('60'),
    maxHeight: hp('100'),
    paddingHorizontal: 5,
    paddingVertical: -10,
    backgroundColor: 'white',
  },
  containerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 2,
    gap: 13,
    paddingVertical: 3,
  },
  textButton: {
    textAlign: 'center',
    fontFamily: fonts.roboto.bold,
    color: colors.primaryGreen,
    fontSize: 15,
  },
  button: {
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.secundary6,
    width: wp(30),
    height: hp(4),
  },
  buttonSelected: {
    width: wp(32),
    height: hp(4),
    backgroundColor: colors.primaryGreen,
    padding: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 8,
    color: 'red',
  },
  textbuttonSelected: {
    textAlign: 'center',
    fontFamily: fonts.roboto.bold,
    fontSize: 15,
    color: colors.secundary6,
  },

  menu_container: {
    bottom: 0,
    width: wp('100%'),
    height: hp('100%'),
    paddingHorizontal: 20,
    zIndex: 1,
  },
})

export default LetterFilters
