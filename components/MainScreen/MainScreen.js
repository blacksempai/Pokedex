import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import { PokemonPreview } from './PokemonPreview/PokemonPreview';
import { Pagination } from './Pagination/Pagination';

export const MainScreen = ({navigation}) => {
    const [pokemons, setPokemons] = useState({results:[]});
    const [limit, setLimit] = useState('20');
    const [lastPage, setLastPage] = useState(65);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => 
            <Button title='🔎︎' color='#FF0032' onPress={() => navigation.navigate('Search')}/>
        });
    }, [navigation]);

    const getPokemons = (url) => {
        if(url) {
            fetch(url)
            .then(response => response.json())
            .then(data => setPokemons(data || {results:[]}));
        }
    }

    const requestPokemonsWithLimit = () => {
        getPokemons('https://pokeapi.co/api/v2/pokemon?limit='+limit);
    }

    const next = () => getPokemons(pokemons?.next);

    const prev = () => getPokemons(pokemons?.previous);

    const last = () => getPokemons(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${pokemons.count-limit}`);

    useEffect(requestPokemonsWithLimit, []);

    return (
        <View>
            <Pagination 
                last={last} 
                next={next} 
                prev={prev} 
                limit={limit} 
                setLimit={setLimit} 
                onLimitSubmit={requestPokemonsWithLimit}
                lastPage={lastPage}
                setLastPage={setLastPage} 
                pokecount={pokemons.count} 
            />
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