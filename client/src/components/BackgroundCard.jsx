import React from 'react'
import { View, StyleSheet, SafeAreaView, Text, Image } from 'react-native'
import TitlePage from './TitlePage'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import ViewOrderButton from './ViewOrderButton'
import HeartLogo from '../../assets/CorazonLogo.svg'
import img from '../../assets/image154.png'
import InviteBtn from './InviteBtn'

const BackgroundCard = ({ logo }) => {
  return (
    <SafeAreaView>
      <TitlePage text='Inicio' route={'/mainmenu'} />
      <View style={styles.backgroundCard_container}>
        <Image style={styles.backgroundImage} source={img} />
        <Image
          source={{ uri: logo }}
          resizeMode='cover'
          alt='Image error'
          style={styles.backgroundCard_logo}
        />
        <View style={styles.background_text}>
          <Text style={styles.text}>N° de Mesa: 05</Text>
          <Text style={styles.text}>N° de Comensales:{' 1 '}</Text>
          <HeartLogo style={{ marginVertical: 10 }} />
        </View>
        <View style={styles.backgroundCard_button}>
          <InviteBtn />
          <ViewOrderButton />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backgroundCard_container: {
    width: wp(100),
    maxWidth: wp(100),
    height: hp(25),
    backgroundColor: '#fff',
    alignItems: 'center',
    // paddingRight: 300,
  },
  backgroundImage: {
    width: wp(100),
    height: hp(25),
    resizeMode: 'cover',
    opacity: 0.56,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  backgroundCard_logo: {
    height: '40%',
    width: '35%',
    position: 'absolute',
    left: '7%',
    top: '10%',
  },

  background_text: {
    color: 'white',
    position: 'absolute',
    width: '50%',
    left: '7%',
    top: '60%',
  },
  backgroundCard_button: {
    position: 'absolute',
    width: '50%',
    height: '80%',
    left: '56%',
    top: '0%',
    flexDirection: 'column',
  },
  text: {
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
})

export default BackgroundCard
