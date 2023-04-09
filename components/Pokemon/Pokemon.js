import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { types } from './PokemonTypes.domain';
export {types} from './PokemonTypes.domain';

export const Pokemon = ({route, navigation}) => {
    const {name, url} = route.params;
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(setPokemon);
    }, [])

    if(!pokemon) {
        return (
            <View>
                <Text>{name}</Text>
            </View>
        )
    }

    return (
        <View>
            <View style={styles.image_container}>
                <Image source={{uri: pokemon.sprites.other['official-artwork'].front_default}} 
                    blurRadius={35} 
                    style={styles.pokemon_background}/>
                <Image 
                source={{uri: pokemon.sprites.other['official-artwork'].front_default}} 
                style={styles.main_image}/>
                <View style={styles.small_sprites_container}>
                    <Image source={{uri: pokemon.sprites.front_default}} style={styles.small_sprite}/> 
                    <Image source={{uri: pokemon.sprites.back_default}} style={styles.small_sprite}/> 
                </View>
            </View>
            <Text style={styles.pokemon_name}>{name}</Text>
            <View style={styles.types_container}>
                {pokemon.types.map(t => 
                    <Text key={t.slot} style={{
                        backgroundColor: types.get(t.type.name),
                        fontSize: 20,
                        width: 125,
                        height: 30,
                        borderRadius: 14,
                        color: '#fff',
                        textAlign: 'center'
                    }}>
                        {t.type.name}
                    </Text>
                )}
            </View>
            <View style={styles.params_container}>
                <View>
                    <Text style={styles.param_text_main}>{pokemon.weight} KG</Text>
                    <Text style={styles.param_text_sub}>Weight</Text>
                </View>
                <View>
                    <Text style={styles.param_text_main}>{pokemon.height} M</Text>
                    <Text style={styles.param_text_sub}>Height</Text>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    main_image: {
        width: 200,
        height: 200
    },
    image_container: {
        alignItems: 'center',
        padding: 10,
        position: 'relative',
        overflow: 'hidden',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        marginBottom: 8
    },
    pokemon_background: {
        position: 'absolute',
        top: -3000,
        left: -3000,
        right: 0,
        bottom: 0,
        width: 6000,
        height: 6000
    },
    small_sprites_container: {
        position: 'absolute',
        right: 10,
        top: 20,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 30
    },
    small_sprite: {
        width: 80,
        height: 80
    },
    pokemon_name: {
        textAlign: 'center',
        fontSize: 40,
        textTransform: 'capitalize'
    },
    types_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
        marginVertical: 10
    },
    params_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20
    },
    param_text_main: {
        fontSize: 24,
        textAlign: 'center'
    },
    param_text_sub: {
        fontSize: 16,
        color: '#aaa',
        textAlign: 'center'
    }
});