import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";

import FacebookLogo from "../../assets/facebooklogosvg.svg";
import GmailLogo from "../../assets/gmaillogosvg.svg";
import { styles } from "../styles/loginStyles";
import { login } from "../redux/slices/user/userSlice";

//Schema para validacion de formulario
const schema = yup.object().shape({
  email: yup.string().email("Email is not Valid").required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

const LoginComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  const onPressButton = (data) => {
    console.log(data);
    dispatch(login(data.email, data.password));
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
              velue={value}
              style={styles.inputs}
            />
          )}
        />
        {errors.email && (
          <Text style={{ fontSize: 15, textAlign: "center" }}>
            {errors.email.message}
          </Text>
        )}
        <Controller
          control={control}
          name="password"
          defaultValue=""
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

        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <TouchableHighlight
            underlayColor="#FFAD3F"
            onPress={handleSubmit(onPressButton)}
            style={styles.button}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Iniciar</Text>
          </TouchableHighlight>

          <Text>Aun no tienes cuenta? Registrate aca</Text>
          <Text>o Ingresa con: </Text>
        </View>

        <View style={styles.socialMedia_container}>
          <FacebookLogo style={styles.socialMedia_logo} />
          <GmailLogo style={styles.socialMedia_logo} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginComponent;
