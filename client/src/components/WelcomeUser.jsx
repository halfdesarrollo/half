import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../utils/theme';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
const WelcomeUser = ({ user }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenid@, </Text>
            <Text style={styles.user} >{user}</Text>
        </View>
    );
};

export default WelcomeUser;

const styles = StyleSheet.create({
    container: {
        width: wp("85"),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    text: {
        color: colors.secundary4,
        fontFamily: fonts.poppins.medium,
        fontSize: 20,
    },
    user: {
        fontFamily: fonts.poppins.regular,
        fontSize: 18
    }
})