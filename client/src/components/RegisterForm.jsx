import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { CheckBox } from 'react-native-elements';
import { register } from '../redux/slices/user/userActions';
import { useNavigate } from 'react-router-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { colors, fonts } from '../utils/theme';
import { registerSchema } from '../utils/validationSearchScheme';
import { yupResolver } from '@hookform/resolvers/yup';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSelected, setSelection] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(registerSchema) });
  const onSubmit = (data) => {
    const { name, email, password } = data;
    try {
      dispatch(register(name, email, password));
      navigate('/mainmenu');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Nombre</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="ingresa tu nombre"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.inputs}
            />
          )}
          name="name"
        />
        {errors.name && <Text style={styles.text4}>Ingresar nombre</Text>}
      </View>
      <View>
        <Text>Correo</Text>
        <Controller
          control={control}
          name="email"
          rules={{
            maxLength: 30,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="prueba@prueba.com"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.inputs}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.text4}>{errors.email.message}</Text>
        )}
      </View>
      <View>
        <Text>Contraseña</Text>
        <Controller
          control={control}
          rules={{
            minLength: 8,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
              style={styles.inputs}
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.text4}>Contraseña no menor a 8 caracteres</Text>
        )}
      </View>
      <View>
        <View style={styles.checkContainer}>
          <CheckBox
            checked={isSelected}
            onPress={() => setSelection(!isSelected)}
          />
        </View>
        <Text style={styles.text}>
          Al iniciar sesión o registrarse, acepta los
        </Text>
        <Text style={styles.text2}>
          Términos y condiciones y la Política de privacidad.
        </Text>
      </View>
      <TouchableHighlight
        underlayColor="#FFAD3F"
        onPress={handleSubmit(onSubmit)}
        style={styles.but}
      >
        <Text style={styles.text3}>Crear cuenta</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 340,
    height: wp('100.00%'),
    borderColor: '#A4A4A4',
    borderTopWidth: 1,
  },
  but: {
    backgroundColor: colors.primaryGreen,
    height: 45,
    bottom: 20,
    borderRadius: 10,
    paddingLeft: 105,
    paddingTop: 10,
    marginTop: 50,
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#A4A4A4',
    marginHorizontal: 1,
    marginVertical: 10,
    paddingVertical: 6,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  checkContainer: {
    // borderWidth: 1,
    width: 50,
    height: 54,
  },
  text: {
    // borderWidth: 1,
    marginLeft: 60,
    marginTop: 15,
    position: 'absolute',
  },
  text2: {
    // borderWidth: 1,
    marginTop: 35,
    marginLeft: 30,
    position: 'absolute',
    color: '#87BE56',
    width: 315,
  },
  text3: {
    // borderWidth: 1,
    width: 140,
    paddingLeft: 10,
    fontFamily: fonts.poppins.bold,
    fontSize: 16,
    color: 'white',
  },
  text4: {
    color: 'red',
    fontSize: 10,
  },
});
