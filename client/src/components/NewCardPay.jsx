import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import AddSvg from '../../assets/add.svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {colors, fonts} from '../utils/theme'
import Admiracion from '../../assets/admiracion.svg'
import ModalReutil from './ModalReutil'
import { useNavigate } from 'react-router-native'
import ExistingCard from './ExistingCard'

const NewCardPay = () => {

  // capturador de la tarjeta
  const [addCard, setAddCard] = useState(false);
  // muestra el modal de alerta
  const [viewAlert, setViewAlert] = useState();

  const navigate = useNavigate();

  // valida que exista una sola tarjeta seleccionada
  const validateAddCard = () => {
    if(!addCard){
      setViewAlert(<ModalReutil textPrimary={'No hay una tarjeta seleccionada'}/>)
      setTimeout(()=> {
        setViewAlert()
      },1500)
    }

    if(addCard){
      setViewAlert(<ModalReutil textPrimary={'Tarjeta agregada'} asset={'ok'}/>)
      setTimeout(()=> {
        setViewAlert()
        navigate('/addpaymethod')
      },1500)
    }
  }

  return (
    <View style={styles.newCardContent}>
      <View style={styles.newCardAdd}>
        <Image source={require('../../assets/cardIcon.png')}/>
        <Text style={styles.newCardAddText}>Nueva tarjeta</Text>
        <TouchableOpacity style={styles.newCardAddBtn}>
          <AddSvg/>
        </TouchableOpacity>
      </View>

      <View style={styles.newCardService}>
        <Admiracion/>
        <Text style={styles.newCardServiceTxt}>El cargo por servicio no es reembolsable</Text>
      </View>

      <ScrollView>
        <ExistingCard addCard={addCard} setAddCard={setAddCard}/>
      </ScrollView>

      <View style={styles.contentModal}>
        {viewAlert && viewAlert}
      </View>

      <View style={styles.addCardContent}>
        <TouchableOpacity style={styles.addCardBtn} onPress={validateAddCard}>
          <Text style={styles.addCardText}>Seleccionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  newCardContent: {
    height: hp('90%'),
    paddingHorizontal: 14,
    paddingVertical: 20,
    position: 'relative'
  },
  newCardAdd: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 100,
    elevation: 3,
  },
  newCardAddText: {
    fontFamily: fonts.poppins.semiBold
  },
  newCardAddBtn: {
    backgroundColor: colors.primaryGreen,
    borderRadius: 50,
    paddingHorizontal: 13,
    paddingVertical: 13,
  },
  newCardService: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 14,
    marginBottom: 20,
  },
  newCardServiceTxt: {
    color: colors.primaryOrange,
    fontFamily: fonts.roboto.regular,
    fontSize: 12
  },
  cardPayContent:{

  },
  addCardContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCardBtn: {
    borderRadius: 6,
    backgroundColor: colors.primaryGreen,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: wp('65%'),
  },
  addCardText: {
    fontFamily: fonts.poppins.bold,
    color: colors.secundary6,
    textAlign: 'center',
    fontSize: 14,
  },
  contentModal: {
    position: 'absolute',
    left: wp('15%'),
    top: hp('20%'),
    zIndex: 2,
  }
})

export default NewCardPay
