import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { fonts, colors } from "../utils/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useState } from "react";
import { useParams } from "react-router-native";
import { useSelector } from "react-redux";
import { styles } from "./OffersHalf";
import FoodCard from "./FoodCard";
import BigButtonOrder from "./BigButtonOrder";

const LetterFilters = () => {
  const [switchs, setSwitchs] = useState(false);
  const [select, setSelect] = useState("starters");

  //Traemos el estado restaurante del redux
  const { restaurants } = useSelector((state) => state.restaurantState);

  //Filtramos restaurante por id params
  const { id } = useParams();
  const filterRestaurant = restaurants.filter(
    (restaurant) => restaurant.id === id
  );

  //Filtramos menu del restaurante para hacerlos keys dinamicos
  const filterMenu = filterRestaurant.map((restaurant) =>
    Object.keys(restaurant.menu)
  );

  //Filtramos las Bebidas del Restaurante
  const filterDrinks = filterRestaurant.map(
    (restaurant) => restaurant.menu.drinks
  );

  //Filtramos las Entradas del Restaurante
  const filterStarters = filterRestaurant.map(
    (restaurante) => restaurante.menu.starters
  );

  //Filtramos los platos de Fondo del Restaurante
  const filterMainDishes = filterRestaurant.map(
    (restaurant) => restaurant.menu.mainDishes
  );

  // const [info, setInfo] = useState([
  //   "Entradas",
  //   "Platos de fondo",
  //   "Postres",
  //   "Bebidas",
  // ]);
  const filter = (el) => {
    setSelect(el);
    console.log(el);
  };

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
          {select === "starters" &&
            filterRestaurant[0].menu.starters.map((starters, index) => (
              <View key={index} style={styles.menu_container}>
                <FoodCard
                  name={starters.name}
                  description={starters.description}
                  image={starters.imageDish}
                  price={starters.price}
                />
              </View>
            ))}
          {select === "drinks" &&
            filterRestaurant[0].menu.drinks.map((drinks, index) => (
              <View key={index}>
                <FoodCard
                  name={drinks.name}
                  description={drinks.description}
                  image={drinks.imageDrink}
                  price={drinks.price}
                />
              </View>
            ))}
          {select === "mainDishes" &&
            filterRestaurant[0].menu.mainDishes.map((mainDishes, index) => (
              <View key={index}>
                <FoodCard
                  name={mainDishes.name}
                  description={mainDishes.description}
                  image={mainDishes.imageDish}
                  price={mainDishes.price}
                />
              </View>
            ))}
          <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
            <BigButtonOrder />
          </View>
        </ScrollView>
      }
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: wp("100"),
    maxWidth: wp("100"),
    height: hp("60"),
    maxHeight: hp("100"),
    paddingHorizontal: 5,
    paddingVertical: -10,
    backgroundColor: "white",
  },
  containerView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 2,
    gap: 13,
    paddingVertical: 3,
  },
  textButton: {
    textAlign: "center",
    fontFamily: fonts.roboto.bold,
    color: colors.primaryGreen,
    fontSize: 15,
  },
  button: {
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: colors.secundary6,
    width: wp(27),
    height: hp(4),
  },
  buttonSelected: {
    width: wp(30),
    height: hp(4),
    backgroundColor: colors.primaryGreen,
    padding: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 8,
    color: "red",
  },
  textbuttonSelected: {
    textAlign: "center",
    fontFamily: fonts.roboto.bold,
    fontSize: 15,
    color: colors.secundary6,
  },

  menu_container: {
    bottom: 0,
    width: wp("100%"),
    height: hp("100%"),
    paddingHorizontal: 20,
    zIndex: 1,
  },
});

export default LetterFilters;
