import React, { useState, useRef } from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import RegsiterForm from '../components/RegisterForm';
import LoginComponent from '../components/LoginComponent';
import HalfLogo from '../../assets/HalfSVG.svg';
import WelcomeElipse from '../../assets/EllipseOrange.svg';
import ElipseHalf1 from '../../assets/elipseHalf1.svg';
import ElipseHalf2 from '../../assets/elipseHalf2.svg';
import BotElipse from '../../assets/welcome-ellipse.svg';
import { fonts } from '../utils/theme';
import { color } from 'react-native-elements/dist/helpers';

export const LoginScreen = () => {
  const [login, setLogin] = useState(false);

  return (
    <SafeAreaView
      style={{
        width: wp('100.00%'),
        height: hp('100.00%'),
        backgroundColor: 'white',
      }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-300}
      >
        <WelcomeElipse
          style={{
            position: 'absolute',
            marginHorizontal: '-12%',
            marginVertical: 15,
            width: 400,
            height: 200,
            top: '-9%',
            zIndex: 1,
          }}
        />

        <View style={styles.login_container}>
          <View style={styles.login_topLogo}>
            <HalfLogo style={styles.image_logo} />
            <ElipseHalf1
              style={{
                position: 'absolute',
                width: 480,
                height: 373,
                left: -93,
                top: -80,
              }}
            />
            <ElipseHalf2
              style={{
                position: 'absolute',
                width: 480,
                height: 373,
                left: -93,
                top: -90,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              marginTop: hp(8),
            }}
          >
            <TouchableOpacity onPress={() => setLogin(false)}>
              <Text style={[styles.text, login === false && styles.line]}>
                Inicia sesión
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setLogin(true)}>
              <Text style={[styles.text, login === true && styles.line]}>
                Regístrate
              </Text>
            </TouchableOpacity>
          </View>
          {login ? (
            <ScrollView>
              <RegsiterForm />
            </ScrollView>
          ) : (
            <ScrollView>
              <LoginComponent />
            </ScrollView>
          )}
        </View>
      </KeyboardAvoidingView>
      <BotElipse
        style={{
          zIndex: -1,
          position: 'absolute',
          bottom: -520,
          with: 300,
        }}
      />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  login_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  login_topLogo: {
    backgroundColor: 'white',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    top: -40,
  },
  image_logo: {
    width: 290,
    height: 200,
    top: 80,
    resizeMode: 'contain',
    zIndex: 1,
  },
  image_eclipseTop: {
    backgroundColor: '#FFAD3F',
    position: 'absolute',
    top: 170,
    borderRadius: 100,

    width: wp('100.00%'),
    height: hp('10.00%'),
    position: 'absolute',
  },
  image_eclipseBot: {
    backgroundColor: '#87BE56',
    position: 'absolute',
    bottom: -60,
    right: -55,
    width: 500,
    height: 300,
    borderRadius: 100,
  },

  inputs_container: {
    height: hp('45.00%'),
    width: '86%',
    borderTopColor: '#A4A4A4',
    borderTopWidth: 1,
  },
  button: {
    backgroundColor: '#87BE56',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },

  inputs: {
    borderWidth: 1,
    borderColor: '#A4A4A4',
    marginHorizontal: 1,
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  socialMedia_container: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    width: '70%',
    bottom: -60,
  },

  socialMedia_logo: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    margin: 10,
  },

  text: {
    fontFamily: fonts.poppins.bold,
    color: '#4B5563',
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: '#4B5563',
  },
});
