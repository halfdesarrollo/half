import {
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Alert,
  StyleSheet,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import QrImage from '../../assets/qrscreenpng.png'
import { useNavigate } from 'react-router-native'
import ScanQRComponent from '../components/ScanQRComponent.jsx'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import TitlePage from '../components/TitlePage'

export function QrScreen() {
  const [hasPermission, setHasPermission] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    Alert.alert(
      'Debes activar tu cámara',
      '¿Das permisos para activar la cámara?',
      [
        { text: 'Si', onPress: () => setHasPermission(true) },
        { text: 'No', onPress: () => navigate('/mainmenu'), style: 'cancel' },
      ]
    )
  }, [])

  return (
    <SafeAreaView style={styles.container_Qr}>
      <TitlePage text='Volver a Inicio' route='/mainmenu' />
      <View style={{ height: Dimensions.get('window').height / 1.2 }}>
        <Image source={QrImage} style={styles.image} />
        {hasPermission && (
          <View style={styles.container_scanQr}>
            <ScanQRComponent style={{ height: '100%' }} />
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container_Qr: {
    top: wp('-7%'),
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    width: wp('100.00%'),
    height: hp('100.00%'),
  },
  image: {
    width: wp('100.00%'),
  },

  container_scanQr: {
    position: 'absolute',
    top: 200,
    marginHorizontal: 45,
    width: wp('100.00%'),
    height: hp('100.00%'),
  },
})
