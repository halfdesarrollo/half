import { View, Text, StyleSheet, Image } from 'react-native'
import WelcomeEllipse from '../../assets/welcome-ellipse.svg'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import ContinueButton from '../components/ContinueButton'
import { WelcomeHeader } from '../components/WelcomeHeader'

export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <WelcomeHeader />
      <View>
        <Text style={styles.text}>
          La aplicación que te brindará una {'\n'} nueva experiencia en
          distintos {'\n'} restaurantes, bares y cafeterias.
        </Text>
        <Text style={styles.text}>
          Te invitamos a vivir la experiencia {'\n'} HALF con nosotros.
        </Text>
      </View>
      <View style={styles.ellipseContainer}>
        <WelcomeEllipse style={styles.welcomeEllipse} />
        <Image
          style={styles.welcomeFood}
          source={require('../../assets/welcome-food-png.png')}
        />
      </View>
      <View style={styles.continueBtn}>
        <ContinueButton to={'/howdoesitworks'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp('100.00%'),
    height: hp('100.00%'),
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
    lineHeight: 30,
  },
  continueBtn: {
    zIndex: 1,
    position: 'absolute',
    bottom: hp(10),
    left: wp(25),
    borderRadius: 7,
  },
  welcomeFood: {
    width: wp('50.00%'),
    height: hp('25.00%'),
    position: 'absolute',
    left: wp(25),
    bottom: hp(-30),
  },
  welcomeEllipse: {
    width: wp('100.00%'),
    height: hp('100.00%'),
    position: 'absolute',
    top: hp(-10),
    zIndex: 0,
  },
})
