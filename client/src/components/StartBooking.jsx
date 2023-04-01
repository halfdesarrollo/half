import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Calendary from '../../assets/calendary.svg'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors, fonts } from '../utils/theme';

const StartBooking = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Empieza a reservar</Text>
        <View style={styles.box} >
          <Text style={styles.boxText}>01/03/22</Text>
          <Text style={styles.bar}>|</Text>
          <Text style={styles.boxText}>1 persona</Text>
          <Text style={styles.bar}>|</Text>
          <Text style={styles.boxText}>1:00 pm</Text>
        </View>
      </View>
      <Calendary />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: wp('85%'),
    justifyContent: 'space-between',
  },
  title: {
    color: colors.primaryOrange,
    fontFamily: fonts.poppins.bold,
    fontSize: 17,
  },
  box: {
    borderRadius: 5,
    borderColor: colors.primaryOrange,
    borderWidth: 2,
    borderStyle: 'solid',
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: wp('65%')

  },
  boxText: {
    color: '#BDBDBD',
    paddingVertical: 8,
    fontFamily: fonts.poppins.regular,
    fontSize: 12
  },
  bar: {
    color: colors.primaryOrange,
    fontSize: 36,
    lineHeight: 36,
    top: 1
  }
});

export default StartBooking;
