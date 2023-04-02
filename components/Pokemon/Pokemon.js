import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export const Pokemon = ({route, navigation}) => {
    const {name, url} = route.params;
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(setPokemon);
    }, [])

    if(!pokemon) {
        return (
            <View>
                <Text>{name.toUpperCase()}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text>{name.toUpperCase()}</Text>
            <Text>Height: {pokemon.height} M</Text>
            <Text>Weight: {pokemon.weight} KG</Text>
        </View>
    )

}