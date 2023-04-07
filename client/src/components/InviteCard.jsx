import { Image, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { colors, fonts } from '../utils/theme';
import { useState } from 'react';

const InviteCard = ({ id, name, img, guests, setGuests }) => {
    const [checked, setChecked] = useState(false);
    const handlePress = () => {
        setChecked(!checked)
        if (!checked) {
            setGuests([...guests, { id, name, img }])
        } else {
            setGuests(guests.filter(e => e.id !== id))
        }
    }

    return (
        <View style={styles.contacts}>
            <View style={styles.box}>
                <Image style={styles.img} source={{ uri: img }} />
                <Text style={styles.name}>{name}</Text>
            </View>
            <CheckBox
                checked={checked}
                onPress={() => handlePress()}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor={colors.primaryGreen}
            />
        </View>
    );
};

export default InviteCard;

const styles = StyleSheet.create({
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