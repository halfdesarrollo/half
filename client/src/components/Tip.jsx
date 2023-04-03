import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import TipIcon from '../../assets/tipIcon.svg'
import { fonts, colors } from '../utils/theme'

const Tip = () => {
  // guarda el valor ingresado en el input
  const [tipInput, setTipInput] = useState()

  // capturamos el texto ingresado en el input
  const onChangeTipInput = (value) => {
    setTipInput(parseInt(value))
  }

  return (
    <>
      <View style={styles.tipContent}>
        <View style={styles.tipItems}>
          <TipIcon/>
          <Text style={styles.tipText}>Propina</Text>
        </View>
        <TextInput value={tipInput} onChangeText={onChangeTipInput} style={styles.tipInput} inputMode='numeric'/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  tip: {

  },
  tipContent:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  tipItems: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  tipIcon: {

  },
  tipText: {
    fontFamily: fonts.poppins.medium,
  },
  tipInput: {
    borderBottomColor: colors.secundary2,
    borderBottomWidth: 1,
    width: 100,
    textAlign: 'center',
    fontFamily: fonts.poppins.regular,
  },
})

export default Tip