import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import PropinaIcon from '../../assets/propinaIcon.svg'
import { fonts, colors } from '../utils/theme'

const Propina = () => {
  // guarda el valor ingresado en el input
  const [propinaInput, setPropinaInput] = useState()

  // capturamos el texto ingresado en el input
  const onChangePropinaInput = (value) => {
    setPropinaInput(parseInt(value))
  }

  return (
    <>
      <View style={styles.propinaContent}>
        <View style={styles.propinaItems}>
          <PropinaIcon/>
          <Text style={styles.propinaText}>Propina</Text>
        </View>
        <TextInput value={propinaInput} onChangeText={onChangePropinaInput} style={styles.propinaInput} inputMode='numeric'/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  propina: {

  },
  propinaContent:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  propinaItems: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  propinaIcon: {

  },
  propinaText: {
    fontFamily: fonts.poppins.medium,
  },
  propinaInput: {
    borderBottomColor: colors.secundary2,
    borderBottomWidth: 1,
    width: 100,
    textAlign: 'center',
    fontFamily: fonts.poppins.regular,
  },
})

export default Propina