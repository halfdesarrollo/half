import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NativeRouter } from 'react-router-native'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import Main from './Main'
import store from './src/redux'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

//Fonts
import {
  useFonts as usePoppins,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';

import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';


const persistor = persistStore(store)

export default function App() {

  //<!Fonts
  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
  });
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });

  if (!poppinsLoaded || !robotoLoaded) return null

  //>

  return (
    <>
      <StatusBar style='auto' />
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <NativeRouter>
            <SafeAreaProvider>
              <SafeAreaView edges={['top']}>
                <Main />
              </SafeAreaView>
            </SafeAreaProvider>
          </NativeRouter>
        </Provider>
      </PersistGate>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
