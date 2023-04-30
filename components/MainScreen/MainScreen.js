import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PokemonPreview } from './PokemonPreview/PokemonPreview';
import { Pagination } from './Pagination/Pagination';

export const MainScreen = ({navigation}) => {
    const [pokemons, setPokemons] = useState({results:[]});

    const getPokemons = (url) => {
        if(url) {
            fetch(url)
            .then(response => response.json())
            .then(data => setPokemons(data || {results:[]}));
        }
    }

    const next = () => getPokemons(pokemons?.next);

    const prev = () => getPokemons(pokemons?.previous);

    useEffect(() => getPokemons('https://pokeapi.co/api/v2/pokemon'), []);

    return (
        <View>
            <Pagination next={next} prev={prev}/>
            <ScrollView contentContainerStyle={styles.container}>
                {pokemons?.results?.map(p => <PokemonPreview key={p.name} pokemon={p} navigation={navigation}/>)}
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