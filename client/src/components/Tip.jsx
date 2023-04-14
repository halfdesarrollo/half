import { View, Text, TextInput, StyleSheet } from 'react-native'
import TipIcon from '../../assets/tipIcon.svg'
import { fonts, colors } from '../utils/theme'
import { useDispatch, useSelector } from 'react-redux'
import { addTip } from '../redux/slices/order/orderSlice'

const Tip = () => {
  const dispatch = useDispatch()

  const { tip } = useSelector(state => state.orderState)

  const onChangeTipInput = (value) => {
    dispatch(addTip(Number(value)))
  }

  return (
    <>
      <View style={styles.tipContent}>
        <View style={styles.tipItems}>
          <TipIcon />
          <Text style={styles.tipText}>Propina</Text>
        </View>
        <TextInput
          value={tip?.toString()}
          onChangeText={onChangeTipInput}
          style={styles.tipInput}
          inputMode='numeric'
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  tip: {},
  tipContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  tipItems: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  tipIcon: {},
  tipText: {
    fontFamily: fonts.poppins.medium,
  },
  tipInput: {
    borderBottomColor: colors.secundary2,
    borderBottomWidth: 1,
    width: 100,
    textAlign: 'center',
    fontFamily: fonts.poppins.regular,
  },
})

export default Tip
