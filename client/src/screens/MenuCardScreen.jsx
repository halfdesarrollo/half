import { View, Text } from 'react-native'
import OptionsViewRestorant from '../components/OptionsViewRestorant'
import ViewOrderButton from '../components/ViewOrderButton'

export const MenuCardScreen = () => {
  return (
    <View>
      <ViewOrderButton />
      <OptionsViewRestorant />
    </View>
  )
}
