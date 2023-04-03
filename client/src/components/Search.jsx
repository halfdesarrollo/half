import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { searchValidationSchema } from '../utils/validationSearchScheme';
import SearchSvg from '../../assets/search.svg';
import { colors, fonts } from '../utils/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const Search = () => {

  // guardamos los datos del input
  const [input, setInput] = useState({
    data: ""
  });

  // estado para manejo de errores
  const [viewError, setViewError] = useState();

  // capturamos el texto ingresado en el TextInput
  const onChangeInput = (text) => {
    setInput({ data: text });
  };

  // funcion para enviar los datos del input validando con el esquema creado en yup
  const onSearchButton = () => {
    searchValidationSchema.validate(input).then(() => {
      console.log(input);
      setInput({ data: "" })
    }).catch((error) => {
      setViewError(Alert.alert(error.message))
    })
  };

  return (
    <View style={styles.search}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="¿Tienes algún local o comida en mente?"
          onChangeText={onChangeInput}
          name='data'
          value={input.data}
          style={styles.searchInput}
        />
        <TouchableOpacity onPress={onSearchButton} style={styles.searchTouch}>
          <SearchSvg />
        </TouchableOpacity>
      </View>
      {viewError && viewError}
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('8%'),
  },
  searchContainer: {
    width: wp('80%'),
    flexDirection: 'row',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.secundary2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    fontFamily: fonts.poppins.regular,
    width: wp('70%'),
  },
  searchTouch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});

export default Search;