import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { fonts, colors } from '../utils/theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useState } from 'react'

const LetterFilters = () => {
  const [info, setInfo] = useState([
    'Entradas',
    'Platos de fondo',
    'Postres',
    'Bebidas',
  ])
  const [select, setSelect] = useState('Entradas')
  const filter = (el) => {
    setSelect(el)
  }
  return (
    <ScrollView horizontal={true} style={style.container}>
      <View style={style.containerView}>
        {info?.map((el, index) => (
          <TouchableOpacity
            style={select === el ? style.buttonSelected : style.button}
            key={index}
            onPress={() => filter(el)}
          >
            <Text
              style={
                select === el ? style.textbuttonSelected : style.textButton
              }
            >
              {el}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}
const style = StyleSheet.create({
  container: {
    width: wp('100'),
    maxWidth: wp('100'),
    height: hp('8'),
    maxHeight: hp('8'),
  },
  containerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 13,
    paddingHorizontal: 18,
  },
  textButton: {
    textAlign: 'center',
    fontFamily: fonts.roboto.bold,
    color: colors.primaryGreen,
    fontSize: 15,
  },
  button: {
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.secundary6,
    width: wp(35),
    height: hp(4),
  },
  buttonSelected: {
    width: wp(35),
    height: hp(4),
    backgroundColor: colors.primaryGreen,
    padding: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 8,
    color: 'red',
  },
  textbuttonSelected: {
    textAlign: 'center',
    fontFamily: fonts.roboto.bold,
    fontSize: 15,
    color: colors.secundary6,
  },
})

export default LetterFilters
