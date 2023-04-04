import { 
  View,
  TextInput, 
  Text, 
  StyleSheet 
} from 'react-native';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors, fonts } from '../utils/theme';

const InputReutil = ({
  state, 
  setState, 
  nameInput, 
  errors, 
  setErrors, 
  textLabel,
  type,
  secure
}) => {
  const handleInputChange = (value) => {
    setErrors && setErrors({
      ...errors,
      [state.nameInput] : value,
    })
    setState({
      ...state,
      [state.nameInput] : value,
    })
  }
  return(
    <View style={styles.container} >
      <Text style={styles.label}>{textLabel || 'Label'}</Text>
      <TextInput
        name={nameInput}
        style={styles.input}
        value={state.InputReutil}
        keyboardType={type}
        secureTextEntry={secure||false}
        onChangeText={handleInputChange}
      />
      {errors?.[nameInput] && 
        <Text style={[ styles.label, styles.errorText ]}>
          { errors[nameInput] }
        </Text>
      }
    </View >
  )
}

const styles = StyleSheet.create({
  container:{
    justifycontent:'center',
    alignItems:'center',
    marginTop:20,
  },
  input:{
    width: wp(89),
    height: 48,
    borderColor:'#BEC5D1',
    borderWidth:1,
    borderRadius:5,
    padding:10,
    fontFamily: fonts.poppins.medium,
    fontSize: 14,
    color:colors.secundary2,
  },
  label:{
    width:wp(84),
    height: 36,
    color:colors.secundary2,
    fontFamily: fonts.poppins.medium,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 36,
  },
  errorText:{
    color:'#EB5757'
  }
})

export default InputReutil;