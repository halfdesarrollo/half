import { View } from 'react-native'
import { Routes, Route } from 'react-router-native'
import { LoginScreen } from './src/screens/LoginScreen'
import { WelcomeScreen } from './src/screens/WelcomeScreen'
import { MainMenuScreen } from './src/screens/MainMenuScreen'
import { HowDoesItWorksScreen } from './src/screens/HowDoesItWorksScreen'
import { AddPayMethodScreen } from './src/screens/AddPayMethodScreen'
import { QrScreen } from './src/screens/QrScreen'
import OrderScreen from './src/screens/OrderScreen'
import PayScreen from './src/screens/PayScreen'
import ViewOrderScreen from './src/screens/ViewOrderScreen'
import { MenuCardScreen } from './src/screens/MenuCardScreen'
import InviteFriendsScreen from './src/screens/InviteFriendsScreen'
import CouponScreen from './src/screens/CouponScreen'
import AddCardPayScreen from './src/screens/AddCardPayScreen'

export default function Main() {
  return (
    <View>
      <Routes>
        <Route path='/' element={<WelcomeScreen />} />
        <Route path='/howdoesitworks' element={<HowDoesItWorksScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/mainmenu' element={<MainMenuScreen />} />
        <Route path='/qrscreen' element={<QrScreen />} />
        <Route path='/menucard/:id' element={<MenuCardScreen />} />
        <Route path='/order' element={<OrderScreen />} />
        <Route path='/vieworder' element={<ViewOrderScreen />} />
        <Route path='/pay' element={<PayScreen />} />
        <Route path='/addpaymethod' element={<AddPayMethodScreen />} />
        <Route path='/invitefriends' element={<InviteFriendsScreen />} />
        <Route path='/couponscreen' element={<CouponScreen />} />
        <Route path='/addcard' element={<AddCardPayScreen />} />
      </Routes>
    </View>
  )
}
