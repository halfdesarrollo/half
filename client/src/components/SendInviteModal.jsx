import { StyleSheet, Text, View, Modal, Alert } from 'react-native'
import React, { useEffect } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { fonts } from '../utils/theme'
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
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType='fade'
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <SendInviteIcon style={styles.modalIcon} />
          <Text style={styles.modalText}>
            Hemos enviado tu{'\n'} invitación
          </Text>
        </View>
      </View>
    </Modal>
  )
}

export default SendInviteModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#55555555',
  },
  modalView: {
    width: wp('80.00%'),
    height: hp('50.00%'),
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
