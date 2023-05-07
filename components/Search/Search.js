import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";
import { PokemonView } from './../shared/PokemonView/PokemonView';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export function Search() {
    const [pokemon, setPokemon] = useState(null);
    const [query, setQuery] = useState('');

    const search = () => {
        if(!query) {
            return Alert.alert('Enter pokemon name please!');
        }
        fetch(BASE_URL+query.toLowerCase())
            .then(result => result.json())
            .then(setPokemon)
            .catch(() => Alert.alert('Not found'));
    }

    return (
        <View>
            <View style={styles.search_container}>
                <TextInput 
                    style={styles.input} 
                    onChangeText={setQuery} 
                    value={query} 
                    placeholder='Enter pokemon name...'
                    onEndEditing={search}
                />
                <Button title='🔎︎' onPress={search}/>
            </View>
            {pokemon ? <PokemonView pokemon={pokemon}/> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    search_container: {
        flexDirection: 'row',
        gap: 8,
        padding: 10,
        alignItems: "center"
    },
    input: {
        borderRadius: 8,
        borderColor: '#ddd',
        borderStyle: 'solid',
        borderWidth: 2,
        fontSize: 24,
        padding: 8,
        flex: 1
    }
});