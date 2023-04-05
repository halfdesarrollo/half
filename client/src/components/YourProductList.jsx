import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ListOfProducts from "./ListOfProducts";
import { useSelector } from "react-redux";

const YourProductList = () => {
   const [plates, setPlates] = useState([
    "Caldo de Gallina",
    "Papa a la huancaína",
    "Jarra de chicha morada"
   ])

  return (
    <View style={styles.container}>
        <View style={styles.container2}>
      <View style={styles.spaceText}>
        <Text style={styles.text}>Tu Lista de Pedidos</Text>
        <Text style={styles.text}>Estado</Text>
      </View>
        </View>
      <View style={styles.container3}>
        {
          plates?.map((plate, i)=>{
            return (
                <ListOfProducts plate={plate} i={i}/>
                )
          })
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: wp('90%'),
    height: 200,
    top: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    textAlign: "center",
    padding: 25,
    overflow : "hidden" ,
    shadowColor: 'transparent',
    elevation: 3,
    marginBottom: 250,
  },

  container2:{
    borderColor: "000000",
    borderBottomWidth:2,
    top: 20,
    // textAlign: "center",
    // justifyContent:"center",
  },

  container3:{
    top: 28.97,
    bottom: 68.33,
    padding: 10,
  },

  spaceText:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
},

text:{
    fontWeight: "600",
  },
});

export default YourProductList;