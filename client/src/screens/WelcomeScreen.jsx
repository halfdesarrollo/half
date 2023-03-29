import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import WelcomePingIcon from '../../assets/welcome-ping-icon.svg'
import WelcomeFood from '../../assets/welcome-food.svg'
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
      <View>
        <WelcomeFood style={styles.welcomeFood} />
        <ContinueButton to={'/howdoesitworks'} />
        <WelcomeEllipse style={styles.welcomeEllipse} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp('100.00%'),
    height: hp('100.00%'),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcomeHalf: {
    marginTop: 50,
    marginLeft: 50,
    fontSize: 28,
  },
  logo: {
    width: wp('15.00%'),
    height: hp('10.00%'),
    marginTop: 40,
    marginLeft: 2,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
    lineHeight: 30,
  },
  welcomeFood: {
    width: wp('60.00%'),
    height: hp('60.00%'),
    zIndex: 1,
    left: 85,
    bottom: 100,
  },
  welcomeEllipse: {
    width: wp('100.00%'),
    height: hp('60.00%'),
    position: 'absolute',
    top: 50,
  },
})
