import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fonts } from '../utils/theme';
import Trash from '../../assets/trash.svg'
import { useDispatch } from 'react-redux';
import { deleteGuest } from '../redux/slices/table/tableSlice';

const GuestCard = ({ id, name, img }) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteGuest(id))
    }
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image style={styles.img} source={{ uri: img }} />
                <Text style={styles.name}>{name}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDelete()}>
                <Trash />
            </TouchableOpacity>
        </View>
    );
};

export default GuestCard;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#4B556333',
    },
    contacts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#4B556333',
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