import React, { useState } from 'react';
import { View, Switch, TextInput } from 'react-native';

const InputReutil = ({state, setState, errors, setErrors}) => {
  const [isEnabled, setIsEnabled] = useState(false);
 
 
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  
  const handleInputChange = () => {

  }

  return(
    <View>
  {/* <Switch
    trackColor={{ false: "#767577", true: "#81b0ff" }}
    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
    ios_backgroundColor="#3e3e3e"
    onValueChange={toggleSwitch}
    value={isEnabled}
  /> */}
</View>

    // <View >
    //   <Text>{textLabel}</Text>
    //   <TextInput
    //     value={state}
    //     onChange={handleInputChange}
    //   />
    // </View >
  )
}

// const styles = StyleSheet.create({
//   label:{
//   },
//   input:{
    
//   }
// });

export default InputReutil;