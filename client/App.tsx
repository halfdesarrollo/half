import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import estilos from './App.styles'
import LogRegScreen from './src/screens/LogRegScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <LogRegScreen />
    </View>
  );
}





const styles = StyleSheet.create(estilos);
