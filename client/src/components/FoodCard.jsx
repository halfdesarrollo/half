import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { fonts, colors } from "../utils/theme";
import MoreButton from "../../assets/more-button";
import MinusButton from "../../assets/minus-button";
import { useEffect, useState } from "react";
import {
  addOrder,
  decreaseOrderQuantity,
  increaseOrderQuantity,
} from "../redux/slices/order/orderActions";
import { useDispatch, useSelector } from "react-redux";

const FoodCard = ({ name, description, image, price, id, onDelete }) => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.orderState);
  const [quantity, setQuantity] = useState("00");
  const [originPrice, setOriginPrice] = useState(null);

  useEffect(() => {
    const priceSplit = price?.toString().split(".");
    price = !priceSplit[1]
      ? price?.toString() + ".00"
      : !priceSplit[1].at(1)
      ? price?.toString() + "0"
      : price?.toString();
    setOriginPrice(price);
  }, []);

  const quantityCalculate = (sign) => {
    const currentQuantityIndex = order.findIndex((item) => item.id === id);
    let newQuantity;

    if (sign === "-" && currentQuantityIndex !== -1) {
      dispatch(decreaseOrderQuantity({ id }));
      newQuantity = order[currentQuantityIndex].quantity - 1;
    } else if (sign === "+") {
      dispatch(
        currentQuantityIndex === -1
          ? addOrder({
              id,
              name,
              description,
              image,
              price,
              quantity: 1,
            })
          : increaseOrderQuantity({ id })
      );
      newQuantity = order[currentQuantityIndex]?.quantity + 1 || 1;
    } else {
      return;
    }

    const result = newQuantity.toString().padStart(2, "0");
    setQuantity(result);
  };
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <View style={styles.containerFoodCard}>
      <View style={styles.viewImage}>
        <Image
          style={styles.image}
          source={{ uri: image } || require("../../assets/NotFound.png")}
          alt="imagen de la comida"
        />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.title}>{name || "Sin titulo"}</Text>
        <Text style={styles.description}>
          {description || "Sin descripcion"}
        </Text>
        <View style={styles.viewOrder}>
          <Text style={styles.priceAndQuantity}>
            S/.{originPrice || "0.00"}
          </Text>
          <View style={styles.viewSvgs}>
            <TouchableOpacity onPress={() => quantityCalculate("-")}>
              <MinusButton style={styles.svgs} />
            </TouchableOpacity>
            <Text style={styles.priceAndQuantity}>{quantity || "00"}</Text>
            <TouchableOpacity onPress={() => quantityCalculate("+")}>
              <MoreButton style={styles.svgs} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  containerFoodCard: {
    marginVertical: 4,
    borderColor: "lightgray",
    borderWidth: 2,
    borderRadius: 12,
    width: wp(97),
    minHeight: hp(18),
    flexDirection: "row",
  },
  viewImage: {
    justifyContent: "center",
    alignItems: "center",
    width: wp(26),
    height: 135,
    maxHeight: 135,
    borderRadius: 8,
  },
  image: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
    width: 82,
    height: 82,
    resizeMode: "cover",
  },
  viewText: {
    width: wp(74),
    paddingStart: 10,
    paddingEnd: 24,
    marginBottom: 6,
  },
  title: {
    marginVertical: 5,
    fontSize: 14,
    fontFamily: fonts.poppins.bold,
  },
  description: {
    fontSize: 12,
    fontFamily: fonts.poppins.medium,
    color: colors.secundary7,
  },
  viewOrder: {
    paddingEnd: 18,
    flexDirection: "row",
    marginTop: 18,
    width: wp(68),
    height: hp(6),
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceAndQuantity: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 16,
    fontFamily: fonts.poppins.medium,
    height: hp(6),
  },
  svgs: {
    width: 35,
    height: 35,
    marginVertical: 5,
  },
  viewSvgs: {
    flexDirection: "row",
    width: wp(30),
    height: hp(6),
    textAlign: "center",
    justifyContent: "space-around",
    alignContent: "center",
  },
});

export default FoodCard;
