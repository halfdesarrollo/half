import { 
    View,
    Text,
    StyleSheet, 
    ScrollView,
    TouchableOpacity,
    Alert
} from "react-native"
import { fonts, colors } from "../utils/theme"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const LetterFilters = () => {
    return(
        <ScrollView 
        horizontal={true}
        style={style.container} >
            <View style={style.containerView} >
                <TouchableOpacity
                    onPress={()=> Alert.alert('hola')}
                >
                <Text style={style.textButton} >elemento 1</Text>
                </TouchableOpacity>
                
                <Text style={style.textButton} >elemento 2</Text>
                <Text style={style.textButton} >elemento 3</Text>
                <Text style={style.textButton} >elemento 4</Text>
                <Text style={style.textButton} >elemento 5</Text>
            </View> 
        </ScrollView>
    )
}
const style = StyleSheet.create({
    containerOne:{
        flex:1,
        flexDirection:'row',
    },
    container:{
        borderWidth:1,
        borderColor:'blue',
        width: wp('100'),
        maxWidth:wp('100'),
        height: hp('8'),
        maxHeight: hp('8')
    },
    containerView:{
        flex:1,
        flexDirection:'row',
        borderWidth:1,
        gap:30,
    },
    buttonsLetter:{
        
    },
    textButton:{
        fontFamily:fonts.roboto,
        color:colors.secundary2,
        fontSize: 25,
        fontWeight: 700
    },
    test:{
        // backgroundColor:'blue',
        // borderWidth:1,
        // borderColor:'red',
    }
})


export default LetterFilters;


