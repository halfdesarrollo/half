import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { colors, fonts } from '../utils/theme';
import contacts from '../mocks/contactos'
// import {CheckBox} from 'react-native'

const Contacts = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contactos que ya tienen Half</Text>
            <ScrollView style={styles.contactsBox}>
                {
                    contacts?.map(e => {
                        return (
                            <View style={styles.contacts}>
                                <View style={styles.box}>
                                    <Image style={styles.img} source={{ uri: e.img }} />
                                    <Text style={styles.name}>{e.name}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
};

export default Contacts;

const styles = StyleSheet.create({
    container: {
        width: wp('90%'),
        marginVertical: 20,
    },
    title: {
        fontSize: 17,
        fontFamily: fonts.poppins.bold,
        color: colors.secundary4,
        paddingBottom: 5
    },
    contacts: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#4B556333',
    },
    contactsBox: {
        height: 460,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    name: {
        fontFamily: fonts.poppins.medium,
    }
})