import React, {useState} from 'react'
import { View, Text, StyleSheet } from "react-native";

const ListOfProducts = ({plate, i}) => {
  console.log(plate)
  const [state, setState] = useState("Entregado")

  return (
        <View style={styles.spaceText} key={i}>
          <Text style={styles.text}>{plate}</Text>
          <Text style={styles.text}>{state}</Text>
        </View>
  )
}
const styles = StyleSheet.create({
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
})

export default ListOfProducts