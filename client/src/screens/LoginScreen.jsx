import React from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import facebookLogo from "../../assets/facebook-logo.png";
import gmailLogo from "../../assets/gmail-logo.png";
import halfLogo from "../../assets/Icon-half.png";
import ecliplseTopLogo from "../../assets/Ellipse 172.png";
import ecliplseBotLogo from "../../assets/Ellipse 170.png";
import { styles } from "../styles/loginStyles";

//Schema para validacion de formulario
const schema = yup.object().shape({
  email: yup.string().email("Email is not Valid").required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

export const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const onPressButton = (data) => {
    console.log(data);
  };
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.login_container}>
          <View style={styles.login_topLogo}>
            <Image style={styles.image_logo} source={halfLogo} />
          </View>
          <Image style={styles.image_eclipseTop} source={ecliplseTopLogo} />
          <Text style={{ fontSize: 20 }}>Inicia Sesion</Text>
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
              <Image source={gmailLogo} style={styles.socialMedia_logo} />
              <Image source={facebookLogo} style={styles.socialMedia_logo} />
            </View>

            <Image style={styles.image_eclipseBot} source={ecliplseBotLogo} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
