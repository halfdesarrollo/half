import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Alert
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

const FoodCard = ({title, description,image, price}) => {
  let cantidad = '00'; 
    return(
      <View>
        
          
            <View style={styles.containerFoodCard}>
              <View style={styles.viewImage}>
                <Image style={styles.image} source={image || undefined}/>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.title}>{title || 'Papa a la huancaína' ||'Sin titulo'}</Text>
                <Text style={styles.description}>{description || 'Papa andina mediana, con aceituna, huevo y toque de leche.' ||'Sin descripcion'}</Text>
                <View style={styles.viewOrder}>
                  <Text style={styles.price}>S/.{price || '13.90'}</Text>
                  <View style={styles.viewSvgs}>
                    <TouchableOpacity 
                      onPress={()=>Alert.alert('menos')}>
                      <MinusButton style={styles.svgs}/>
                    </TouchableOpacity>
                    <Text style={styles.price}>{cantidad}</Text>
                    <TouchableOpacity 
                      onPress={()=>Alert.alert('mas')}>
                      <MoreButton style={styles.svgs}/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          
            <View style={styles.containerFoodCard}>
              <View style={styles.viewImage}>
                <Image style={styles.image} source={image || undefined}/>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.title}>{title || 'Papa a la huancaína' ||'Sin titulo'}</Text>
                <Text style={styles.description}>{description || 'Papa andina mediana, con aceituna, huevo y toque de leche.' ||'Sin descripcion'}</Text>
                <View style={styles.viewOrder}>
                  <Text style={styles.price}>S/.{price || '13.90'}</Text>
                  <View style={styles.viewSvgs}>
                    <TouchableOpacity 
                      onPress={()=>Alert.alert('menos')}>
                      <MinusButton style={styles.svgs}/>
                    </TouchableOpacity>
                    <Text style={styles.price}>{cantidad}</Text>
                    <TouchableOpacity 
                      onPress={()=>Alert.alert('mas')}>
                      <MoreButton style={styles.svgs}/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          
         
            <View style={styles.containerFoodCard}>
              <View style={styles.viewImage}>
                <Image style={styles.image} source={image || undefined}/>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.title}>{title || 'Papa a la huancaína' ||'Sin titulo'}</Text>
                <Text style={styles.description}>{description || 'Papa andina mediana, con aceituna, huevo y toque de leche.' ||'Sin descripcion'}</Text>
                <View style={styles.viewOrder}>
                  <Text style={styles.price}>S/.{price || '13.90'}</Text>
                  <View style={styles.viewSvgs}>
                    <TouchableOpacity 
                      onPress={()=>cantidad = cantidad - 1}>
                      <MinusButton style={styles.svgs}/>
                    </TouchableOpacity>
                    <Text style={styles.price}>{cantidad || '00'}</Text>
                    <TouchableOpacity 
                      onPress={()=>cantidad = cantidad + 1}>
                      <MoreButton style={styles.svgs}/>
                    </TouchableOpacity>
                  </View>
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
  price:{
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