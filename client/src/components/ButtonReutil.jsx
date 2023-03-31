import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const ButtonReutil = ({text, colorBtn, styleText, action}) => {
  return (
    <TouchableOpacity style={colorBtn} onPress={()=> action()}>
      <Text style={styleText}>{text}</Text>
    </TouchableOpacity>
  )
}


export default ButtonReutil