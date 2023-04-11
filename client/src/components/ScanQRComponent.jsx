import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StatusBar } from 'expo-status-bar';
import { useNavigate } from 'react-router-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import TopLeft from '../../assets/qrtopizquierdo.svg';
import TopRight from '../../assets/qrtopderecho.svg';
import BotRight from '../../assets/qrbotderecho.svg';
import BotLeft from '../../assets/qrbotizquierdo.svg';

export default function ScanQRComponent() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View>
        <Text>Da Permisos a la camara por favor</Text>
        <Button title="Volver Inicio" onPress={() => navigate('/mainmenu')}>
          Inicio
        </Button>
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setHasPermission(!hasPermission);
    navigate(`/menucard/${data}`);
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[styles.barscan, StyleSheet.absoluteFillObject]}
      />
      <StatusBar style="auto" />
      <View style={{ bottom: 430, position: 'absolute' }}>
        <TopLeft style={{ position: 'absolute', top: -260, left: -180 }} />
        <TopRight style={{ position: 'absolute', top: -260, left: 110 }} />
        <BotLeft style={{ position: 'absolute', top: 130, left: -180 }} />
        <BotRight style={{ position: 'absolute', top: 140, left: 100 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -200,
    marginHorizontal: -45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    flexDirection: 'column',
    width: wp('100.00%'),
    height: hp('100.00%'),
  },
  scanner: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  top_text: {
    color: 'white',
    fontSize: 25,
    textShadowColor: 'grey',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  barscan: {
    marginVertical: -5,
    paddingHorizontal: 200,
    width: wp('150.00%'),
    height: hp('100.00%'),
  },
  icons_container: {
    backgroundColor: 'red',
    width: wp('100.00%'),
    position: 'relative',
  },
});
