import { 
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { 
    fonts,
    colors
} from "../utils/theme";

const FoodCard = ({title, description,image}) => {
    return(
          <View>
            <View style={styles.containerFoodCard}>
              <View style={styles.viewImage}>
                <Image style={styles.image} source={image || undefined}/>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.title}>{title || 'Papa a la huancaína' ||'Sin titulo'}</Text>
                <Text style={styles.description}>{description || 'Sin descripcion'}</Text>
              </View>
            </View>
          </View>
    )
}

export const styles = StyleSheet.create({
  container:{
    borderColor:'green',
    borderWidth:2,
  },
  containerFoodCard:{
    borderColor:'blue',
    borderWidth:2,
    width: wp(98),
    height: hp(18),
    flexDirection:'row'   
    },
  viewImage:{
    justifyContent:'center',
    alignItems:'center',
    borderColor:'blue',
    borderWidth:2,
    width: wp(30),
    borderRadius:8
  },
  image: {
    backgroundColor:'red',
    width: 80,
    height: 80, 
  },
  viewText: {
    width: wp(70),
    borderColor:'red',
    borderWidth:2,
  },
  title: {
    fontSize: 16,
    font: fonts.poppins.medium,
  },
  description: {
    fontSize: 14,
    font: fonts.poppins.regular,
    color: colors.secundary7,
    fontWeight: 700,
  }
})


export default FoodCard;