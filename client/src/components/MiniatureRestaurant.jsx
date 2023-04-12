import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ImageRestaurant from '../../assets/ImageRestaurant.svg';
import Discount from '../../assets/Discount.svg';
import HeartLike from '../../assets/HeartLike.svg';
import Stars from '../../assets/stars.svg';

const MiniatureRestaurant = () => {
  return (
    <View style={styles.container}>
      <HeartLike style={styles.heart} />
      <ImageRestaurant style={styles.imagerestaurant} />
      <View style={styles.text}>
        <Discount style={styles.discount} />
        <View style={styles.nameCheck}>
          <Text></Text>
        </View>
        <Stars />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 318,
    height: 190,
    margin: 5,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  text: {
    top: 50,
  },

  heart: {
    position: 'absolute',
  },

  imagerestaurant: {
    position: 'absolute',
  },
});

export default MiniatureRestaurant;
