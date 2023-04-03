import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Svg, { Image } from "react-native-svg";
import { fonts } from '../utils/theme';
import Promo from '../../assets/promociones.svg'
import Map from '../../assets/mapa.svg'
import Populars from '../../assets/populares.svg'

const NearMe = () => {
  const [pressedNearMe, setPressedNearMe] = useState(false);
  const [pressedPromo, setPressedPromo] = useState(false)
  const [pressedPopular, setPressedPopular] = useState(false)


  const handlePressNearMe = () => {
    setPressedNearMe(true)
  };

  const handlePressPromo = () => {
    setPressedPromo(true)
  };

  const handlePressPopu = () => {
    setPressedPopular(true)
  };

  const handleRelease = () => {
    setPressedNearMe(false);
    setPressedPromo(false)
    setPressedPopular(false)
  };

  const buttonStyleNearme = {
    backgroundColor: pressedNearMe ? '#F2C94C' : '#fff',
    paddingVertical: 6,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.7,
    shadowOpacity: 0.1,
    shadowColor: "#000000",
    shadowOffset: { width: 0.5, height: 2 },
    flexDirection: "row",
    width: 110,
    gap: 5
  };

  const buttonStylePromociones = {
    backgroundColor: pressedPromo ? '#F2C94C' : '#fff',
    paddingVertical: 6,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.7,
    shadowOpacity: 0.1,
    shadowColor: "#000000",
    shadowOffset: { width: 0.5, height: 2 },
    flexDirection: "row",
    width: 110,
    gap: 5
  };

  const buttonStylePopulares = {
    backgroundColor: pressedPopular ? '#F2C94C' : '#fff',
    paddingVertical: 6,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.7,
    shadowOpacity: 0.1,
    shadowColor: "#000000",
    shadowOffset: { width: 0.5, height: 2 },
    flexDirection: "row",
    width: 110,
    gap: 5
  };

  return (
    <View style={styles.conteiners}>
      <View >
        <TouchableOpacity
          style={buttonStyleNearme}
          color={pressedNearMe}
          onPress={handlePressNearMe}
          onPressOut={handleRelease}
        >
          <Map />
          <Text style={styles.text}>Cerca a mí</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={buttonStylePromociones}
          color={pressedPromo}
          onPress={handlePressPromo}
          onPressOut={handleRelease}
        >
          <Promo />
          <Text style={styles.text}>Promociones</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={buttonStylePopulares}
          color={pressedPopular}
          onPress={handlePressPopu}
          onPressOut={handleRelease}
        >
          <Populars />
          <Text style={styles.text}>Populares</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiners: {
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "space-evenly",
    gap: 10
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    fontFamily: fonts.poppins.regular,
    width: "auto",
    alignItems: "center",
  },
});

export default NearMe;
