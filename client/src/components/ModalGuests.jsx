import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Close from '../../assets/close.svg'
import { fonts } from '../utils/theme';
import { useSelector } from 'react-redux'
import GuestCard from './GuestCard';
const ModalGuests = ({ displayGuests, setDisplayGuests }) => {
    const guests = useSelector(state => state.tableState.guests)
    return (
        <Modal
            visible={displayGuests}
            transparent={true}
            onRequestClose={() => setDisplayGuests(false)}
            animationType="fade"
        >
            <View style={styles.container} >
                <View style={styles.modal}>
                    <View style={styles.headerBox}>
                        <Text style={styles.headerText}>Mis invitados</Text>
                        <TouchableOpacity onPress={() => setDisplayGuests(false)} >
                            <Close />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        {
                            guests?.map(e => (
                                <GuestCard key={e.id} id={e.id} name={e.name} img={e.img} />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default ModalGuests;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#55555555'
    },
    modal: {
        width: wp('80%'),
        height: hp('42%'),
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        gap: 5
    },
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        fontFamily: fonts.poppins.medium,
    },
})