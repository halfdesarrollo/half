import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import categories from "../mocks/categorias";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        style={styles.flatList}
        data={categories}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={(item, i) => {
          return <CategoryItem item={item} i={i} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    fontFamily: fonts.poppins.regular,
  },

  title: {
    color: "#4B5563",
    fontFamily: fonts.poppins.regular,
    width: 94,
    height: 13,
    left: 24,
    fontSize: 20,
    fontWeight: "bold",
  },

});

export default Categories;
