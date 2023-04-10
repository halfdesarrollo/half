import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { fonts, colors } from '../utils/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { CheckBox } from 'react-native-elements';
import ModalReutil from './ModalReutil';
import { useNavigate } from 'react-router-native';
import { useDispatch } from 'react-redux';
import { addCoupon } from '../redux/slices/order/orderSlice';

const Coupon = ({ viewCheck }) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  // estados capturadores de los cupones
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [discount, setDiscount] = useState(0);  
  const [viewModal, setViewModal] = useState();


  // valida que exista un cupon seleccionado, agrega el valor del cupo al estado para aplicar descuento y redirecciona a la ventana anterior
  const addCouponValidate = () => {
    if(!checkedOne && !checkedTwo){           
      setViewModal(<ModalReutil  textPrimary={'No hay cupon seleccionado'} />)
      setTimeout(()=>{
        setViewModal()
      },1000)
    }
    else if(checkedOne && checkedTwo){         
      setViewModal(<ModalReutil  textPrimary={'solo un cupon a la vez'} />)
      setTimeout(()=>{
        setViewModal()
      },1500)
    }else {
      setViewModal(<ModalReutil  textPrimary={'Cupon Agregado'} asset={'ok'} />)
      setTimeout(()=>{
        setViewModal()
        navigate('/addpaymethod')
      },1500)
      dispatch(addCoupon(discount))
    }
  }

  const addDiscount = (percentage, state, setState) => {
    if(!state && discount === 0) setDiscount(percentage)
    else setDiscount(0)
    setState(!state)
  }
  return (
    <View style={styles.coupon}>
      <ScrollView style={styles.couponScroll}>
        <View style={viewCheck ? styles.couponElements : styles.couponSetWidth}>
          <View style={styles.couponInfo}>
            <Image
              style={styles.couponImage}
              source={require('../../assets/ofertaOne.png')}
            />
            <View style={styles.couponTexts}>
              <Text style={styles.couponSubtitle}>
                10% de desct. por tu 1era visita.
              </Text>
              <Text style={styles.couponText}>
                Por elegirnos en está ocasión te estaremos brindando 10% de dsct.
                Podrás agregarlo a la hora de pagar.
              </Text>
            </View>
          </View>
          {viewCheck && (
            <CheckBox
              checkedIcon="checkbox-outline"
              uncheckedIcon={'checkbox-blank-outline'}
              iconType="material-community"
              checked={checkedOne}
              onPress={()=>addDiscount(10, checkedOne, setCheckedOne)}
              checkedColor={colors.primaryGreen}
              size={26}
            />
          )}
        </View>

        <View style={viewCheck ? styles.couponElements : styles.couponSetWidth}>
          <View style={styles.couponInfo}>
            <Image
              style={styles.couponImage}
              source={require('../../assets/ofertaTwo.png')}
            />
            <View style={styles.couponTexts}>
              <Text style={styles.couponSubtitle}>
                50% de desct. en entradas.
              </Text>
              <Text style={styles.couponText}>
                Por elegirnos en está ocasión te estaremos brindando una entrada
                de con 50% de desct. Podrás agregarlo a la hora de pagar.
              </Text>
            </View>
          </View>
          {viewCheck && (
            <CheckBox
              checkedIcon="checkbox-outline"
              uncheckedIcon={'checkbox-blank-outline'}
              iconType="material-community"
              checked={checkedTwo}
              onPress={() => addDiscount(50, checkedTwo, setCheckedTwo)}
              checkedColor={colors.primaryGreen}
              size={26}
            />
          )}
        </View>
      </ScrollView>
      
      <View style={styles.couponModal}>
        {viewModal && viewModal}
      </View>

      <View style={styles.couponAdd}>
        <TouchableOpacity style={styles.couponButton} onPress={addCouponValidate}>
            <Text style={styles.couponTextBtn}>Agregar cupón</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coupon: {
    width: wp('100%'),
    paddingHorizontal: 10,
    position: 'relative',
  },
  couponElements: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('80%'),
    height: hp('20%'),
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.secundary2,
    borderRadius: 10,
    marginBottom: 10,
  },
  couponInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
  },
  couponImage: {
    width: wp('20%'),
  },
  couponTexts: {
    height: hp('10%'),
    width: wp('52%'),
    justifyContent: 'center',
    gap: 4,
  },
  couponSetWidth: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('94%'),
    height: hp('20%'),
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.secundary2,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  couponSubtitle: {
    fontFamily: fonts.poppins.bold,
  },
  couponText: {
    fontFamily: fonts.poppins.regular,
  },
  couponScroll: {
    height: hp('82%'),
    paddingVertical: 10,
  },
  couponAdd: {
    width: wp('100%'),
    alignItems: 'center',
  },
  couponButton: {
    backgroundColor: colors.primaryGreen,
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 10,
    width: wp('70%'),
  },
  couponTextBtn: {
    textAlign: 'center',
    color: colors.secundary6,
    fontFamily: fonts.poppins.bold,
    fontSize: 16,
  },
  couponModal:{
    position: 'absolute',
    left: wp('15%'),
    top: hp('20%'),
    zIndex: 2,
  }
});

export default Coupon;
