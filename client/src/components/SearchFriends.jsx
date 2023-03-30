import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import SearchSvg from '../../assets/search.svg';

const SearchFriends = () => {
    const [input, setInput] = useState('')

    const handleInput = (input) => {
        setInput(input)
    }
    return (
        <View style={styles.container}>
            <SearchSvg style={styles.svg} />
            <TextInput
                placeholder='Busca por nombre o numero'
                onChangeText={handleInput}
                value={input}
                placeholderTextColor='#BDBDBD'
                style={styles.input}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: wp('80%'),
        marginVertical: 20,
        backgroundColor: '#FEFEFE',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },

    input: {

    }
})

export default SearchFriends;