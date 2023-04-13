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
  const { preOrder } = useSelector((state) => state.orderState)

  const [select, setSelect] = useState('Entradas')
  //No borrar lo que esta comentado: razon: porque se necesita para un futuro
  // const { id } = useParams()
  // const filterRestaurant = restaurants.filter(
  //   (restaurant) => restaurant.id === 0
  // )

  //Filtramos menu del restaurante para hacerlos keys dinamicos

  const filterMenu = Object.keys(restaurants[0]?.menu);
  filterMenu[1] = filterMenu[1].replace(/([A-Z])/g, ' $1').trim()

  const filter = (el) => {
    setSelect(el)
  }

  const quantityGet = (id) => {
    let order = preOrder?.find((orderItem) => orderItem.id == id)
    return order?.quantity?.toString().padStart(2, '0') || '00'
  }
  return (
    <View style={style.container}>
      <View style={style.containerView}>
        <ScrollView horizontal={true} contentContainerStyle={style.scroll}>
          {filterMenu?.map((el, index) => (
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
        </ScrollView>
      </View>
      <View style={style.cardBox}>
        <ScrollView contentContainerStyle={style.scrollDish}>
          {select === 'Entradas' &&
            restaurants[0]?.menu?.Entradas?.map((entrada, index) => (
              <View key={index}>
                <FoodCard
                  id={entrada.id}
                  name={entrada.name}
                  description={entrada.description}
                  image={entrada.imageDish}
                  price={entrada.price}
                  quantity={quantityGet(entrada?.id)}
                />
              </View>
            ))}
          {select === 'Bebidas' &&
            restaurants[0]?.menu?.Bebidas?.map((bebidas, index) => (
              <View key={index}>
                <FoodCard
                  id={bebidas.id}
                  name={bebidas.name}
                  description={bebidas.description}
                  image={bebidas.imageDrink}
                  price={bebidas.price}
                  quantity={quantityGet(bebidas.id)}
                />
              </View>
            ))}
          {select === 'Platos De Fondo' &&
            restaurants[0]?.menu?.PlatosDeFondo?.map((plato, index) => (
              <View key={index}>
                <FoodCard
                  id={plato.id}
                  name={plato.name}
                  description={plato.description}
                  image={plato.imageDish}
                  price={plato.price}
                  quantity={quantityGet(plato.id)}
                />
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    width: wp('100'),
    height: hp('46'),
    maxHeight: hp('46'),
    alignItems:'center',
  },
  containerView: {
    width:wp(100),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 13,
    paddingVertical: 2,
  },
  scrollDish:{
    alignItems:'center',
    width:wp(100),
    minHeight:hp(4),
  },
  scroll:{
    paddingBottom:hp(0.5),
    paddingHorizontal:wp(2),
    minWidth:wp(100),
    marginVertical:hp(0.5),
    flexDirection:'row',
    gap:10
  },
  textButton: {
    textAlign: 'center',
    fontFamily: fonts.roboto.medium,
    color: colors.primaryGreen,
    lineHeight: 16.41,
    fontSize: 15,
  },
  cardBox: {
    height: hp(40),
    marginTop: 6
  },
  button: {
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.secundary6,
    minWidth: wp(30),
    minHeight: hp(4),
    paddingHorizontal:wp(4),
  },
  buttonSelected: {
    minWidth: wp(30),
    minHeight: hp(4),
    backgroundColor: colors.primaryGreen,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 4,
    borderRadius: 8,
    paddingHorizontal:wp(4),
    justifyContent:'center'
  },
  textbuttonSelected: {
    textAlign: 'center',
    fontFamily: fonts.roboto.medium,
    fontSize: 15,
    lineHeight: 16.41,
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
