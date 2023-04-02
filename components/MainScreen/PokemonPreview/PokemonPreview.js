import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const PokemonPreview = ({pokemon, navigation}) => {

    const getImgLink = () => {
        const pathArray = pokemon.url.split('/');
        const id = pathArray[pathArray.length - 2].padStart(3, 0);
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
    }

    const navigateToPokemon = () => {
        navigation.navigate('Pokemon', pokemon);            
    }

    return (
        <View style={styles.card_wrapper}>
            <TouchableOpacity style={styles.card} onPress={navigateToPokemon}>
                <Image source={{uri: getImgLink()}} blurRadius={35} style={{
                    position: 'absolute',
                    top: -250,
                    left: -250,
                    right: 0,
                    bottom: 250,
                    width: 1000,
                    height: 1000
                }}/>
                <Image style={styles.img} source={{uri: getImgLink()}}/>
                <Text style={styles.text}>{pokemon.name}</Text>
            </TouchableOpacity>
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
        overflow: 'hidden',
        position: 'relative'
    },
    text: {
        fontSize: 25,
        textTransform: 'capitalize'
    }
});

