import { View, Text, StyleSheet } from 'react-native';

export const Header = () => {


    return (
        <View style={styles.header}>
            <Text style={styles.text}>Pokedex</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FF0032',
        paddingTop: 40,
        height: 100,
        alignItems: 'flex-start'
    },
    text: {
        fontSize: 35,
        paddingLeft: 20,
        paddingBottom: 5,
        color: '#fff',
        fontFamily: 'Pokemon'
    }
});
