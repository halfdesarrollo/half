import { StyleSheet, Text, View } from 'react-native';
import LocationSvg from '../../assets/welcome-ping-icon.svg'
import Arrow from '../../assets/bottom-arrow.svg'
import Bell from '../../assets/bell.svg'
import { colors, fonts } from '../utils/theme';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const TitlePageLocation = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box} >
                <View style={styles.locationBox} >
                    <LocationSvg style={styles.locationSvg} />
                    <Text style={styles.text} >Surquillo 1056</Text>
                </View>
                <Arrow style={styles.arrow} />
            </View>
            <Bell style={styles.bell} />
        </View>
    );
};

export default TitlePageLocation;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryGreen,
        height: hp(8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 10,
        width: wp('100%')
    },
    box: {
        flexDirection: 'row',
        gap: 20,
    },
    locationBox: {
        flexDirection: 'row',
        gap: 5
    },
    text: {
        color: '#fff',
        fontFamily: fonts.poppins.bold,
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center'
    },
    arrow: {
        height: hp('4%'),
        width: wp('4%'),
        alignSelf: 'center'
    },
    locationSvg: {
        height: hp('4%'),
        width: wp('8%'),
        alignSelf: 'center',
    },
    bell: {
        height: hp('5.8%'),
        width: wp('14%'),
        top: 8,
    }
})