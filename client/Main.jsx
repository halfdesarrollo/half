import { View } from 'react-native'
import { Routes, Route } from 'react-router-native'
import { LoginScreen } from './src/screens/LoginScreen'
import { WelcomeScreen } from './src/screens/WelcomeScreen'
import { MainMenuScreen } from './src/screens/MainMenuScreen'
import { HowDoesItWorksScreen } from './src/screens/HowDoesItWorksScreen'
import { AddPayMethodScreen } from './src/screens/AddPayMethodScreen'

export default function Main() {
  return (
    <View>
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/welcome' element={<WelcomeScreen />} />
        <Route path='/howdoesitworks' element={<HowDoesItWorksScreen />} />
        <Route path='/' element={<MainMenuScreen />} />
        <Route path='/addpaymethod' element={<AddPayMethodScreen />} />
      </Routes>
    </View>
  )
}
