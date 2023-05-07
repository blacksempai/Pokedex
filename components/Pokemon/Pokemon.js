import { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import { PokemonView } from '../shared/PokemonView/PokemonView';

export const Pokemon = ({route}) => {
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

    return <PokemonView pokemon={pokemon}/>

}
