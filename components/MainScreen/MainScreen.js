import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { PokemonPreview } from './PokemonPreview/PokemonPreview';

export const MainScreen = ({navigation}) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(data => setPokemons(data.results || []));
    }, []); 

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {pokemons.map(p => <PokemonPreview key={p.name} pokemon={p} navigation={navigation}/>)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingBottom: 10
    }
});