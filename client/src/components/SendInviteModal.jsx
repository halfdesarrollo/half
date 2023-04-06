import { StyleSheet, Text, View, Pressable, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { fonts, colors } from '../utils/theme'
import SendInviteIcon from '../../assets/send-invite-icon.svg'

const SendInviteModal = ({ modalVisible, setModalVisible }) => {

  // useEffect para que luego de tocar "Enviar Invitacion" el modal se cierre despues de los 2.5 segs
  const delay = 2.5

  useEffect(() => {
    let timer = setTimeout(() => {
      setModalVisible(false)
    }, delay * 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [modalVisible])

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <SendInviteIcon style={styles.modalIcon} />
            <Text style={styles.modalText}>
              Hemos enviado tu{'\n'} invitación
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default SendInviteModal

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: wp('80.00%'),
    height: hp('50.00%'),
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  //
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: fonts.poppins.bold,
    fontSize: 26,
    textAlign: 'center',
    color: '#4B5563',
    lineHeight: 45,
  },

  modalIcon: {
    width: wp('36.00%'),
    height: hp('30.00%'),
  },
})
