import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CheckBox } from 'react-native-elements'
import IconVisa from '../../assets/iconVisa.svg'
import {fonts} from '../utils/theme'

const ExistingCard = ({addCard, setAddCard}) => {
  return (
    <View style={styles.cardPayElement}>
      <IconVisa style={styles.cardPayIcon} />
      <View>
        <Text style={styles.cardPayText}>Kelly Márquez</Text>
        <Text style={styles.cardPayText}>xxxx xxxx xxxx xx90</Text>
      </View>
      <CheckBox
        checkedColor="red"
        checked={addCard}
        uncheckedIcon={'circle-o'}
        checkedIcon={'dot-circle-o'}
        onPress={() => setAddCard(!addCard)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardPayElement:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cardPayIcon: {
    elevation: 2,
  },
  cardPayText: {
    fontFamily: fonts.poppins.regular,
    fontSize: 15
  },
});

export default ExistingCard;
