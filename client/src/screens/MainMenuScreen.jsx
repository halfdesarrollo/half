import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Navbar from '../components/Navbar'
// components

import SpecialHalf from '../components/SpecialHalf'
import Search from '../components/Search'

export const MainMenuScreen = () => {
  return (
    <View style={styles.container}>
      <Search />
      <Navbar />
      <SpecialHalf />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp('100.00%'),
    height: hp('100.00%'),
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: wp('50.00%'),
    height: hp('30.00%'),
  },
})
