import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const LogRegScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container_logReg}>
      <View style={styles.container_logo}>
        <Text>Logo Half</Text>
      </View>

      <View style={styles.container_inputs}>
        <Text style={styles.title}>Iniciar Sesion</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onBlur, onChange } }) => (
            <TextInput
              style={styles.input}
              placeholder="Correo Electronico"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          defaultValue=""
        />
        {errors.email && <Text>{errors.email.message}</Text>}

        <Controller
          control={control}
          name="password"
          render={({ field: { value, onBlur, onChange } }) => (
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          defaultValue=""
        />
        {errors.password && <Text>{errors.password.message}</Text>}

        <Button
          style={styles.button}
          title="Iniciar"
          onPress={handleSubmit(onSubmit)}
        />
        <Text>Aun no tienes cuenta? Registrate aca</Text>
      </View>
      <View>
        <Text>O ingresa con</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_logReg: {
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: "100%",
    flex: 1,
    borderColor: "thistle",
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: "#87BE56",
    width: Dimensions.get("window").width,
  },
  container_logo: {
    backgroundColor: "red",
    width: "100%",
    height: "50%",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    justifyContent: "center",
    color: "blue",
  },
  container_inputs: {
    paddingHorizontal: 20,
    width: Dimensions.get("window").width,
    paddingVertical: 10,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 7,
  },
});
