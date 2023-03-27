import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, {useState} from 'react'

const Search = () => {
  // guardamos los datos del input
  const [input, setInput] = useState();

  // funcion para enviar los datos del input
  const onSearchButton = () => {
    console.log(input);
  }

  return (
    <View style={styles.searchContainer}>
      <TextInput placeholder='¿Tienes algún local o comida en mente?' onChangeText={setInput} value={input}/>
      <TouchableOpacity onPress={onSearchButton} style={styles.searchInput}><Text>Search</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    width: 260,
    flexDirection: 'row',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#a8a8a8'
  },
  searchInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'steelblue',
    paddingHorizontal: 6,
    paddingVertical: 10,
    width: 50
  }
})

export default Search