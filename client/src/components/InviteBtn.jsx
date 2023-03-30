import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import {colors} from '../utils/theme'
import Add from '../../assets/add.svg'
import ThreePointOptions from '../../assets/threePointsOptions.svg'
import {useNavigate} from 'react-router-native'

const InviteBtn = () => {

  const navigate = useNavigate();

  // esta funcion redirige al usuario a la vista para agregar mas personas
  const addPeoples = () => {
    // agregar el path de la vista de agregar mas personas
    navigate('')
  }

  return (
    <View style={styles.inviteBtn}>
      <Image style={styles.inviteBtnImage} source={require('../../assets/profilePictureTemp.png')} />
      <TouchableOpacity style={styles.inviteBtnAdd} onPress={addPeoples}>
        <Add/>
      </TouchableOpacity>
      <TouchableOpacity>
        <ThreePointOptions/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inviteBtn:{
    flexDirection: 'row',
    backgroundColor: '#000', // remover background cuando halla un fondo
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  inviteBtnImage:{
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: colors.primaryOrange,
  },
  inviteBtnAdd: {
    width: 50,
    height: 50,
    backgroundColor: colors.primaryOrange,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    left: -20,
  },
})

export default InviteBtn