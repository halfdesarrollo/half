import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CategoryItem = ({ item }) => {

  return (
    <View key={item.id} style={styles.conteiners}>
      <View style={styles.view}>
        <Image style={styles.categoryImage} source={{ uri: item.item.imagen }} />
      </View>
      <View style={styles.nombres}>
        <Text
          style={
            item.index % 2 === 0
              ? styles.categorySecondaryColor
              : styles.categoryPrymaryColor
          }
        >
          {item.item.nombre}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiners: {
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: fonts.poppins.regular,
    color: "#87BE56",
    marginLeft: 25,
    marginTop: 30,

  },
  nombres: {
    padding: 10,
    top: 10,
    marginTop: 55,
    textAlign: "center",
  },

  categoryImage: {
    width: 58,
    height: 58,
    borderRadius: 38,
  },

  categorySecondaryColor: {
    color: "#87BE56",
  },
  categoryPrymaryColor: {
    color: "#FFAD3F",
  },
});

export default CategoryItem;
