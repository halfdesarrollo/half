import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigate } from 'react-router-native';
import { colors, fonts } from '../utils/theme';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const BigButtonPay = ({ text, route }) => {
    const navigate = useNavigate()
    const handlePress = () => {
        navigate(route)
    }

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress} >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default BigButtonPay;
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primaryGreen,
        paddingVertical: 13,
        borderRadius: 5,
        width: wp('80%')
    },
    text: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: fonts.poppins.bold
    }
})
