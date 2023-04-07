import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { colors, fonts } from '../utils/theme';
import InviteCard from './InviteCard';
import { useNavigate } from 'react-router-native';
import { addNewGuest } from '../redux/slices/table/tableSlice';

const Contacts = ({ modalVisible, setModalVisible }) => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const contacts = useSelector(state => state.userState.contacts)

    const [guests, setGuests] = useState([]);

    const handlePress = () => {
        setModalVisible(!modalVisible)
        dispatch(addNewGuest(guests))
        // setTimeout(() => navigate('/'), 1500)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contactos que ya tienen Half</Text>
            <ScrollView style={styles.contactsBox}>
                {
                    contacts?.map(e => {
                        return (
                            <InviteCard key={e.id} id={e.id} name={e.name} img={e.img} guests={guests} setGuests={setGuests} />
                        )
                    })
                }
            </ScrollView>
            {/* Boton para enviar invitacion */}
            <TouchableOpacity style={styles.button} onPress={handlePress} disabled={guests.length < 1} >
                <Text style={styles.text}>Enviar invitación</Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: colors.primaryGreen,
        paddingVertical: 11,
        borderRadius: 6,
        width: wp('90%'),
        marginTop: 30,

    },
    text: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: fonts.poppins.bold,
    },
})