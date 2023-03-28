import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Logo from '../../assets/halflogo.svg'

export const MainMenuScreen = () => {
  return (
    <View>
      <Text> Hola</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp('100.00%'),
    height: hp('100.00%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  logo: {
    width: wp('50.00%'),
    height: hp('30.00%'),
  },
})
