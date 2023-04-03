import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import categories from "../mocks/categorias";
import CategoryItem from "./CategoryItem";
import { fonts, colors } from '../utils/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <View style={styles.list}>
        {
          categories.map((e, i) => (
            <CategoryItem key={i} item={e} index={i} />
          ))
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('85%')
  },

  title: {
    color: colors.secundary2,
    fontFamily: fonts.poppins.bold,
    fontSize: 18,
    marginBottom: 10
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

});

export default Categories;
