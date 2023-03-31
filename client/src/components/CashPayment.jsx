import { StyleSheet, Text, View, TextInput } from 'react-native'
import { useState } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { fonts } from '../utils/theme'
import { CheckBox, Icon } from 'react-native-elements'
export const CashPayment = () => {
  const [textInputValue, setTextInputValue] = useState('')
  const [check, setCheck] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pago en efectivo</Text>
      <View style={styles.inputcheck}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTextInputValue(text)}
          value={textInputValue}
          placeholder='Con cuanto pagarás'
          placehol
        />
        <View style={styles.checkbox}>
          <CheckBox
            checkedIcon={
              <Icon
                name='radio-button-checked'
                type='material'
                color='green'
                size={25}
                iconStyle={{ marginRight: 10 }}
              />
            }
            uncheckedIcon={
              <Icon
                name='radio-button-unchecked'
                type='material'
                color='grey'
                size={25}
                iconStyle={{ marginRight: 10 }}
              />
            }
            checked={check}
            onPress={() => setCheck(!check)}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: wp('9%'),
  },
  title: {
    fontFamily: fonts.poppins.bold,
    fontSize: 16,
    marginLeft: wp('5%'),
  },
  inputcheck: {
    flexDirection: 'row',
  },
  input: {
    marginTop: hp('1%'),
    height: hp('5%'),
    width: wp('65%'),
    borderColor: '#BEC5D1',
    borderWidth: 1,
    borderRadius: 5,
    placeholderTextColor: 'gray',
  },
  checkbox: {
    marginLeft: wp('5%'),
  },
})