import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import { fonts, colors } from '../utils/theme'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

const TypesOfPayments = () => {
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(false)

  const resetCheckBoxes = () => {
    setCheck1(false) 
    setCheck2(false)  
    setCheck4(false)
  }
  const selectCheckBox = (state, setState) => {
    if(state) setState(!state)
    else if(check1 || check2 || check4){
      resetCheckBoxes()
      setState(!state)
    }else{
      setState(!state)
    }
}
  return (
    <View style={styles.types}>
      <Text style={styles.typesTitle}>Tipos de pago</Text>
      <View style={styles.containerLine}>
        <View style={styles.line}/>
      </View>
      <View style={styles.typesElements}>
        <Text
          style={styles.typesSubtitle}
        >{`Dividir pagos por igual \n(Todos deben aceptar)`}</Text>
        <CheckBox
          iconType='material-community'
          checkedIcon='checkbox-marked'
          uncheckedIcon='checkbox-blank-outline'
          uncheckedColor={colors.primaryGreen}
          checkedColor={colors.primaryGreen}
          size={28}
          checked={check1}
          onPress={() => selectCheckBox(check1, setCheck1)}
        />
      </View>
      <View style={styles.typesElements}>
        <Text
          style={styles.typesSubtitle}
        >{`Yo pago todo \n(Todos deben aceptar)`}</Text>
        <CheckBox
          iconType='material-community'
          checkedIcon='checkbox-marked'
          uncheckedIcon='checkbox-blank-outline'
          uncheckedColor={colors.primaryGreen}
          checkedColor={colors.primaryGreen}
          size={28}
          checked={check2}
          onPress={() => selectCheckBox(check2, setCheck2)}
        />
      </View>
      <View style={styles.typesElements}>
        <Text
          style={styles.typesSubtitle}
        >{`Pagar saldo en efectivo \n(Todos deben aceptar)`}</Text>
        <CheckBox
          iconType='material-community'
          checkedIcon='checkbox-marked'
          uncheckedIcon='checkbox-blank-outline'
          uncheckedColor={colors.primaryGreen}
          checkedColor={colors.primaryGreen}
          size={28}
          checked={check3}
          onPress={() => setCheck3(!check3)}
        />
      </View>
      <View style={styles.typesElements}>
        <Text
          style={styles.typesSubtitle}
        >{`Paga jugando \n(Todos deben aceptar)`}</Text>
        <CheckBox
          iconType='material-community'
          checkedIcon='checkbox-marked'
          uncheckedIcon='checkbox-blank-outline'
          uncheckedColor={colors.primaryGreen}
          checkedColor={colors.primaryGreen}
          size={28}
          checked={check4}
          onPress={() => selectCheckBox(check4, setCheck4)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  types: {
    width:wp(90),
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  containerLine:{
    alignItems:'center',
  },
  line:{
    borderBottomColor: colors.secundary4,
    borderBottomWidth: 1,
    width:wp(89),
  },
  typesTitle: {
    color: colors.secundary4,
    paddingLeft:4,
    paddingBottom:5,
    paddingTop:8,
    fontFamily: fonts.poppins.semiBold,
    fontSize: 12,
    lineHeight: 18,
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
