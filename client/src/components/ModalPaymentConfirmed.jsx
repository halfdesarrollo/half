import { StyleSheet, View, Text, Modal, Pressable } from 'react-native'
import { fonts, colors } from '../utils/theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Confeti from '../../assets/confeti'
import { useNavigate } from 'react-router-native'

const ModalPaymentConfirmed = ({ paymentCode, modalVisible, setModalVisible }) => {

  const navigation = useNavigate()
  const handleRediret = () => {
    setModalVisible(false)
    navigation('/menucard/0')
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Confeti style={styles.iconModal} />

            <Text style={styles.modalText}>Pago Confirmado</Text>
            <Text style={styles.modalText2}>Código de pago: #9876543</Text>
            <View style={styles.buttonModalContainer}>
              <Pressable style={styles.button} onPress={handleRediret}>
                <Text style={styles.textStyle}>Revisar Comprobante</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  // modal container
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // modal
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
  // modal button
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 5,
    width: wp('60.00%'),
    height: hp('6.00%'),
    backgroundColor: colors.primaryOrange,
  },

  buttonModalContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: hp('5%'),
  },

  modalButton: {
    width: wp('20.00%'),
    height: hp('5.00%'),
  },
  // modal button text
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: wp('4.00%'),
    fontFamily: fonts.poppins.regular,
    fontWeight: '500',
  },
  modalText: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: fonts.poppins.medium,
    fontWeight: '400',
    marginBottom: 15,
    textAlign: 'center',
    marginTop: hp('3%'),
    color: colors.primaryGreen,
  },
  modalText2: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: fonts.poppins.medium,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: hp('-2%'),
    color: colors.secundary8,
  },

  iconModal: {
    width: wp('50.00%'),
    height: hp('20.00%'),
  },
})

export default ModalPaymentConfirmed
