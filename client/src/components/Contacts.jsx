import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { colors, fonts } from '../utils/theme';
import contacts from '../mocks/contactos'
import InviteCard from './InviteCard';

const Contacts = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contactos que ya tienen Half</Text>
            <ScrollView style={styles.contactsBox}>
                {
                    contacts?.map(e => {
                        return (
                            <InviteCard key={e.id} name={e.name} img={e.img} />
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
    contactsBox: {
        height: 460,
    },
})