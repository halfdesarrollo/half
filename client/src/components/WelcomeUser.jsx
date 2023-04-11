import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../utils/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
const WelcomeUser = () => {
  const { user } = useSelector((state) => state.userState);
  return (
    <View style={styles.border}>
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenid@, </Text>
        <Text style={styles.user}>
          {user.userLogged?.name || user.userRegistered?.name}
        </Text>
      </View>
    </View>
  );
};

export default WelcomeUser;

const styles = StyleSheet.create({
  border: {
    width: wp('100'),
    alignItems: 'center',
    borderColor: colors.primaryOrange,
    borderBottomWidth: 1,
  },
  container: {
    width: wp('85'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.secundary4,
    fontFamily: fonts.poppins.medium,
    fontSize: 20,
  },
  user: {
    fontFamily: fonts.poppins.regular,
    fontSize: 18,
  },
});
