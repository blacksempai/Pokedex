import { View, Text, Image, StyleSheet } from 'react-native';

export const PokemonPreview = ({pokemon}) => {
    return (
        <View style={styles.card_wrapper}>
            <View style={styles.card}>
                <Image style={styles.img} source={{
                    uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
                }}/>
                <Text style={styles.text}>{pokemon.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 80,
        height: 80
    },
    card_wrapper: {
        flexBasis: '50%',
        padding: 10
    },
    card: {
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    text: {
        fontSize: 25,
        textTransform: 'capitalize'
    }
});

