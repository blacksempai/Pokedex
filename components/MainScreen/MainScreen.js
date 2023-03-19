import { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../Header/Header';
import { PokemonPreview } from './PokemonPreview/PokemonPreview';

export const MainScreen = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(data => setPokemons(data.results || []));
    }, []); 

    return (
        <View>
            <Header/>
            <ScrollView contentContainerStyle={styles.container}>
                {pokemons.map(p => <PokemonPreview key={p.name} pokemon={p}/>)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingBottom: 50
    }
});