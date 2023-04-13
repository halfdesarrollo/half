import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { colors, fonts } from '../utils/theme'
import Back from '../../assets/back-arrow.svg'
import BackBlack from '../../assets/back-arrow-black.svg'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen'

const TitlePage = ({ text, route, white }) => {
  const navigate = useNavigate()
  const handlePress = () => {
    navigate(route)
  }

  return (
    <View style={white ? styles.whiteContainer : styles.container}>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={handlePress}
          activeOpacity={1}
        >
          {white ? (
            <View style={styles.backContainer}>
              <BackBlack style={styles.back} />
            </View>
          ) : (
            <View style={styles.backContainer}>
              <Back style={styles.back} />
            </View>
          )}
        </TouchableOpacity>
        <Text
          onPress={handlePress}
          style={white ? styles.whiteText : styles.text}
        >
          {text}
        </Text>
      </View>
    </View>
  )
}

export default TitlePage

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryGreen,
    height: hp(8),
    paddingHorizontal: 25,
    paddingVertical: 15,
    width: wp(100),
  },
  whiteContainer: {
    backgroundColor: '#fff',
    height: hp(8),
    paddingHorizontal: 25,
    paddingVertical: 15,
    width: wp(100),
    borderBottomWidth: 1,
    borderBottomColor: '#4B556355',
  },
  box: {
    flexDirection: 'row',
    gap: 15,
  },
  text: {
    color: '#fff',
    fontFamily: fonts.roboto.medium,
    fontSize: 18,
    alignSelf: 'center',
  },
  whiteText: {
    color: '#000',
    fontFamily: fonts.roboto.medium,
    fontSize: 18,
    alignSelf: 'center',
  },
  backContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  back: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  whiteBack: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
})
