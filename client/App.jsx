import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NativeRouter } from 'react-router-native'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import Main from './Main'
import store from './src/redux'

const persistor = persistStore(store)

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <NativeRouter>
            <Main />
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
