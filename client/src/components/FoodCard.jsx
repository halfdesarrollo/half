import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { 
    fonts,
    colors
} from "../utils/theme";
import MoreButton from '../../assets/more-button';
import MinusButton from '../../assets/minus-button';
import { useState } from "react";

const FoodCard = ({title, description, image_plato, price}) => {
  const [quantity, setQuantity] = useState('00')
  const quantityCalculate = (sign) => {
    let calculate;
    if(sign === '-' && Number(quantity) > 0) 
      calculate = Number(quantity)-1;
    else if (sign === '+') 
      calculate = Number(quantity) + 1;
    else return;
    const result = calculate.toString().at(1)? calculate.toString() : '0'+calculate
    setQuantity(result);
  }
    return(
          <View style={styles.containerFoodCard}>
            <View style={styles.viewImage}>
              <Image style={styles.image} source={image_plato || 'https://www.recetasderechupete.com/wp-content/uploads/2019/09/Leche-de-tigre.jpg'}/>
            </View>
            <View style={styles.viewText}>
              <Text style={styles.title}>{title || 'Papa a la huancaína' ||'Sin titulo'}</Text>
              <Text style={styles.description}>{description || 'Papa andina mediana, con aceituna, huevo y toque de leche.' ||'Sin descripcion'}</Text>
              <View style={styles.viewOrder}>
                <Text style={styles.priceAndQuantity}>S/.{price || '13.90'}</Text>
                <View style={styles.viewSvgs}>
                  <TouchableOpacity 
                    onPress={()=>quantityCalculate('-')}>
                    <MinusButton style={styles.svgs}/>
                  </TouchableOpacity>
                  <Text style={styles.priceAndQuantity}>{String(quantity) || '00'}</Text>
                  <TouchableOpacity 
                    onPress={()=>quantityCalculate('+')}>
                    <MoreButton style={styles.svgs}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
    )
}

export const styles = StyleSheet.create({
  containerFoodCard:{
    marginVertical:4,
    borderColor:'lightgray',
    borderWidth:2,
    borderRadius:12,
    width: wp(97),
    minHeight: hp(18),
    flexDirection:'row',
  },
  viewImage:{
    justifyContent:'center',
    alignItems:'center',
    width: wp(26),
    height:135,
    maxHeight: 135,
    borderRadius:8
  },
  image: {
    borderRadius:5,
    backgroundColor:'red',
    width: 82,
    height: 82, 
  },
  viewText: {
    width: wp(74),
    paddingStart:10,
    paddingEnd:24,
    marginBottom:6,
  },
  title: {
    marginVertical:5,
    fontSize: 14,
    fontFamily: fonts.poppins.bold,
  },
  description: {
    fontSize: 12,
    fontFamily : fonts.poppins.medium,
    color: colors.secundary7,
  },
  viewOrder:{
    paddingEnd:18,
    flexDirection:'row',
    marginTop:18,  
    width: wp(68),
    height:hp(6),
    justifyContent:'space-between',
    alignItems:'center',
  },
  priceAndQuantity:{
    textAlignVertical:'center',
    textAlign:'center',
    fontSize:16,
    fontFamily:fonts.poppins.medium,
    height: hp(6),
  },
  svgs:{
    width: 42,
    height: 42,
  },
  viewSvgs:{
    flexDirection:'row',
    width: wp(30),
    height: hp(6),
    textAlign:'center',
    justifyContent:'space-around',
    alignContent:'center'
  }
})


export default FoodCard;