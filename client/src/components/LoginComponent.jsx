import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-native';
import FacebookLogo from '../../assets/facebook.svg';
import gmail from '../../assets/gmail-logo.png';
import { login } from '../redux/slices/user/userActions';
import { loginSchema } from '../utils/validationSearchScheme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(loginSchema) });
  const onPressButton = async (data) => {
    const { email, password } = data;
    try {
      const result = await dispatch(login(email, password));
      result.success ? navigate('/mainmenu') : alert('Datos incorrectos');
    } catch (error) {
      alert(error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.inputs_container}>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field: { value, onBlur, onChange } }) => (
            <TextInput
              placeholder="Correo Electronico"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.inputs}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.text_error}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          name="password"
          render={({ field: { value, onBlur, onChange } }) => (
            <TextInput
              placeholder="Contraseña"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry
              style={styles.inputs}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.text_error}>{errors.password.message}</Text>
        )}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginVertical: 20,
          }}
        >
          <TouchableHighlight
            underlayColor="#FFAD3F"
            onPress={handleSubmit(onPressButton)}
            style={styles.button}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>Iniciar</Text>
          </TouchableHighlight>

          <Text>Aún no tienes cuenta? Registrate acá</Text>
          <Text>o Ingresa con: </Text>
        </View>

        <View style={styles.socialMedia_container}>
          <Image style={styles.socialMedia_logo} source={gmail} />
          <FacebookLogo style={styles.socialMedia_logo} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
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
    height: 100,
    resizeMode: 'contain',
  },
  image_eclipseTop: {
    backgroundColor: '#FFAD3F',
    position: 'absolute',
    top: -270,
    width: 400,
    height: 300,
    borderRadius: 50,
  },
  image_eclipseBot: {
    backgroundColor: '#87BE56',
    position: 'absolute',
    bottom: -260,
    right: -55,
    width: 500,
    height: 300,
    borderRadius: 100,
  },

  inputs_container: {
    height: hp('40.00%'),
    backgroundColor: 'white',
    width: 350,
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
    bottom: -50,
  },

  socialMedia_logo: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    margin: 10,
  },

  greenBottomThinEllipse: {
    width: wp('100.00%'),
    height: hp('100.00%'),
    position: 'absolute',
    bottom: hp('-70.00%'),
    zIndex: 0,
  },
  greenBottomEllipse: {
    width: wp('100.00%'),
    height: hp('100.00%'),
    position: 'absolute',
    bottom: hp('-70.00%'),
    zIndex: 0,
  },

  text_error: {
    color: 'red',
    fontSize: 10,
    marginHorizontal: 10,
  },
});
