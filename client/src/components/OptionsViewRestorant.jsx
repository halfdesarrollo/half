import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import OffersCardButtons from './OffersCardButtons'
import OffersHalf from './OffersHalf'
import LetterFilters from './LetterFilters'

const OptionsViewRestorant = () => {
  // el estado almacena el componente que se debe mostrar segun el boton presionado
  const [viewOffer, setViewOffer] = useState();
  const [viewLetter, setViewLetter] = useState(<LetterFilters/>);

  // controla si el boton fue presionado o no
  const [statusBtn, setStatusBtn] = useState('carta')

  const handleViewOffert = () => {
    setViewOffer(<OffersHalf/>)
    setViewLetter()
    setStatusBtn('offer')
  }

  const handleViewLetter = () => {
    setViewLetter(<LetterFilters/>)
    setViewOffer()
    setStatusBtn('carta')
  }  

  return (
    <View>
      <View style={styles.containerInterno}>
        <OffersCardButtons viewOffer={handleViewOffert} viewLetter={handleViewLetter} statusBtn={statusBtn}/>
      </View>
      {viewOffer && viewOffer}
      {viewLetter && viewLetter}
    </View>
  )
}

const styles = StyleSheet.create({
  containerInterno: {
    paddingBottom: 14,
  }
})

export default OptionsViewRestorant
