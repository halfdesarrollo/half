import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { colors, fonts } from "../utils/theme";
import { useSelector } from 'react-redux';

const RequestsFromOtherMembers = () => {
  const membersOrders = useSelector(state => state.tableState.orders)
  console.log(membersOrders)
  return(
        <View style={styles.container}>
          <Text style={styles.text}>Pedidos de los demás miembros</Text>
            <View style={styles.line}></View>
              <RequestCardMembers 
                name={'Anibal López'}
                foodDish={'Caldo de Gallina'}
                price={'22.90'}
              />
        </View>
  )
}


const RequestCardMembers = ({name, price, foodDish}) => {
  const [ select, setSelect ] = useState(false)
  return(
    <View style={stylesMembers.container}>
        <View style={stylesMembers.viewDatas}>
            <Text style={stylesMembers.name}>{name ||'Sin nombre'}</Text>
            <Text style={stylesMembers.food}>{foodDish || 'Sin nombre'}</Text>
            <Text style={stylesMembers.price}>S/.{price || 'Sin precio'}</Text>
        </View>
        <View style={stylesMembers.viewCheckBox}>
          <CheckBox 
            select={select} 
            setSelect={setSelect}
          />
        </View>
    </View>
  )
}

const CheckBox = ({select, setSelect}) => {
  const changeStyle = () => {
    return select
      ? [stylesCheck.CheckBox, stylesCheck.backgroundGreen]
      : stylesCheck.CheckBox
  }
  return(
    <View style={stylesCheck.container}>
      <TouchableOpacity
        style={changeStyle()}
        onPress={() => setSelect(!select) }
      >
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:wp(90),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#FFFFFF',  
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },
  text:{
    width:wp(85),
    paddingTop:8,
    paddingBottom:5,
    paddingStart:4,
    color:colors.secundary4,
    fontFamily: fonts.poppins.semiBold,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign:'left'  
  },
  line:{
    width:wp(88),
    borderBottomWidth:1,
    borderColor:colors.secundary4,
  }
})
const stylesMembers = StyleSheet.create({
  container:{
    width: wp(90),
    height: hp(13),
    flexDirection:'row',
  },
  viewCheckBox:{
    width:wp(25),
    justifyContent:'center',
    alignItems:'center',
  },
  viewDatas:{
    gap:10,
    paddingStart:11,
    width:wp(65)
  },
  name:{
    paddingStart:4,
    color:colors.secundary4,
    fontFamily: fonts.poppins.semiBold,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0,
    marginTop:10,
  },
  food:{
    fontFamily: fonts.poppins.medium,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
    color:colors.secundary2
  },
  price:{
    fontFamily: fonts.poppins.regular,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  }
})
const stylesCheck = StyleSheet.create({
  container:{
    width:wp(100),
    height:hp(100),
    justifyContent:'center',
    alignItems:'center',
  },
  CheckBox:{
    width:24,
    height:24,
    borderColor:colors.primaryGreen,
    borderWidth:1,
    borderRadius:5,
  },
  backgroundGreen:{
    backgroundColor:colors.primaryGreen,
  }
})


export default RequestsFromOtherMembers;