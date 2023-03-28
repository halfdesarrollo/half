import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { searchValidationSchema } from './validationSearchScheme';

const Search = () => {

  // guardamos los datos del input
  const [input, setInput] = useState({
    data: ""
  });

  // estado para manejo de errores
  const [viewError, setViewError] = useState();

  // capturamos el texto ingresado en el TextInput
  const onChangeInput = (text) => {
    setInput({data:text});
  };

  // funcion para enviar los datos del input validando con el esquema creado en yup
  const onSearchButton = () => {
    searchValidationSchema.validate(input).then(()=>{
      console.log(input);
      setInput({data: ""})
    }).catch((error)=>{
      setViewError(Alert.alert(error.message))
    })
  };

  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="¿Tienes algún local o comida en mente?"
          onChangeText={onChangeInput}
          name='data'
          value={input.data}
        />
        <TouchableOpacity onPress={onSearchButton} style={styles.searchInput}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      {viewError && viewError}
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: 260,
    flexDirection: 'row',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#a8a8a8',
  },
  searchInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'steelblue',
    paddingHorizontal: 6,
    paddingVertical: 10,
    width: 50,
  },
});

export default Search;