import React from 'react'
import { View, StyleSheet } from "react-native";
import StateOrden from "../../assets/stateorder.svg"

const StateOrder = () => {
  return (
    <View style={styles.container}>
          <StateOrden/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:18,
  }

})
export default StateOrder