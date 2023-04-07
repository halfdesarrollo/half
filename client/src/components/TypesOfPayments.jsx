import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import { fonts } from '../utils/theme'

const TypesOfPayments = () => {
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(false)

  return (
    <View style={styles.types}>
      <Text style={styles.typesTitle}>Tipos de pago</Text>
      <View style={styles.typesElements}>
        <Text
          style={styles.typesSubtitle}
        >{`Dividir pagos por igual \n(Todos deben aceptar)`}</Text>
        <CheckBox
          checkedIcon='checkbox-outline'
          uncheckedIcon={'checkbox-blank-outline'}
          iconType='material-community'
          checked={check1}
          onPress={() => setCheck1(!check1)}
          checkedColor='green'
        />
      </View>
      <View style={styles.typesElements}>
        <Text
          style={styles.typesSubtitle}
        >{`Yo pago todo \n(Todos deben aceptar)`}</Text>
        <CheckBox
          checkedIcon='checkbox-outline'
          uncheckedIcon={'checkbox-blank-outline'}
          iconType='material-community'
          checked={check2}
          onPress={() => setCheck2(!check2)}
          checkedColor='green'
        />
      </View>
      <View style={styles.typesElements}>
        <Text
          style={styles.typesSubtitle}
        >{`Pagar saldo en efectivo \n(Todos deben aceptar)`}</Text>
        <CheckBox
          checkedIcon='checkbox-outline'
          uncheckedIcon={'checkbox-blank-outline'}
          iconType='material-community'
          checked={check3}
          onPress={() => setCheck3(!check3)}
          checkedColor='green'
        />
      </View>
      <View style={styles.typesElements}>
        <Text
          style={styles.typesSubtitle}
        >{`Paga jugando \n(Todos deben aceptar)`}</Text>
        <CheckBox
          checkedIcon='checkbox-outline'
          uncheckedIcon={'checkbox-blank-outline'}
          iconType='material-community'
          checked={check4}
          onPress={() => setCheck4(!check4)}
          checkedColor='green'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  types: {
    width: 300,
    paddingHorizontal: 10,
    shadowColor: '#000',
    elevation: 2,
  },
  typesTitle: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingVertical: 4,
    fontFamily: fonts.poppins.medium,
  },
  typesElements: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  typesSubtitle: {
    fontFamily: fonts.poppins.medium,
  },
})

export default TypesOfPayments
