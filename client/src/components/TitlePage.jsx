import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { colors, fonts } from '../utils/theme'
import Back from '../../assets/back-arrow.svg'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const TitlePage = ({ value, route }) => {
    const navigate = useNavigate()

    const handlePress = () => {
        navigate(route)
    }

    return (
        <View style={styles.container}>
            <View style={styles.box} >
                <Back style={styles.back} onPress={handlePress} />
                <Text style={styles.text} >{value}</Text>
            </View>
        </View>
    );
};

export default TitlePage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryGreen,
        height: 80,
        justifyContent: 'flex-end',
        paddingHorizontal: 25,
        paddingVertical: 15,

    },
    box: {
        flexDirection: 'row',
        gap: 20,
    },
    text: {
        color: '#fff',
        fontFamily: fonts.poppins,
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center'
    },
    back: {
        height: hp('2.3%'),
        width: wp('2.3%'),
        alignSelf: 'center'
    }
})
