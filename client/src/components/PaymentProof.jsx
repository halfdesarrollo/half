import { View } from "react-native";
import ButtonReutil from "./ButtonReutil";
import { StyleSheet, Text } from "react-native";
import InputReutil from "./InputReutil"; 
import { useState } from "react";
import { colors, fonts } from "../utils/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PaymentProof = () => {
  const [ paymentProof, setPaymentProof ] = useState('ticket');
  const [ ticketForm, setTicketForm ] = useState({
    dni:''
  });
  const [ invoiceForm, setInvoiceForm ] = useState({
    ruc:'',
    direction:''
  });
  const handleChangeToTicket = () =>{
    setPaymentProof('ticket')
  }
  const handleChangeToInvoice = () =>{
    setPaymentProof('invoice') 
  }
  const styleButtons = (name) => {
    return name === paymentProof?
      [styles.button, styles.buttonSelected]:
      [styles.button]
  }
  const styleTextButton = (name) => {
    return name === paymentProof?
    [styles.textButton, styles.textButtonSelected]:
    [styles.textButton]
  }
  return(
    <View style={styles.contain}>
      <Text style={styles.subTitle}>Comprobante de pago</Text>
      <View style={styles.containDatas}>
        <ButtonReutil 
          action={handleChangeToTicket}
          text={'Boleta'}
          colorBtn={styleButtons('ticket')}
          styleText={styleTextButton('ticket')}
        />
        <ButtonReutil 
        action={handleChangeToInvoice}
        text={'Factura'}
        colorBtn={styleButtons('invoice')}
        styleText={styleTextButton('invoice')}
        />
      </View>
      { paymentProof === 'ticket'?
          <InputReutil 
            nameInput={'dni'}
            state={ticketForm}
            textLabel={'DNI'}
            type={'default'}
            setState={setTicketForm}
          />
          :
          <>
          <InputReutil 
            nameInput={'ruc'}
            state={invoiceForm}
            textLabel={'RUC'}
            type={'default'}
            setState={setInvoiceForm}
          />
           <InputReutil 
            nameInput={'direction'}
            state={invoiceForm}
            textLabel={'Dirección'}
            type={'default'}
            setState={setInvoiceForm}
          />
          </>
      }
    </View>
  )
}

export default PaymentProof;


const styles = StyleSheet.create({
  contain:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:15,
  },
  containDatas:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    gap:5,
  },
  subTitle:{
    width: wp(86),
    fontFamily:fonts.poppins.medium,
    fontSize:14,
    textAlign:'left',
    lineHeight:21,
    marginVertical:hp(3),
  },
  button:{
    minWidth: wp(41), 
    height:35,
    backgroundColor:'transparent',
    justifyContent:'center',
    borderRadius:5,
    borderColor:'#4B5563',
    borderWidth:1,
  },
  buttonSelected:{
    backgroundColor:colors.primaryGreen,
    borderWidth:0,
  },
  textButton:{
    textAlign:'center',
    fontSize:14,
    fontFamily: fonts.poppins.medium,
    lineHeight:21,
    color: colors.secundary2,
  },
  textButtonSelected:{
    fontFamily:fonts.poppins.semiBold,
    color:'#FFFFFF',
  },  
})