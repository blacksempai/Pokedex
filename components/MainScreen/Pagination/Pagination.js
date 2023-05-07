import { useState } from "react";
import { Button, View, StyleSheet, TextInput, Text } from "react-native"

export const Pagination = ({next, prev, limit, setLimit, onLimitSubmit, last, lastPage, setLastPage, pokecount}) => {
    [page, setPage] = useState(1);

    const nextPage = () => {
        if (page < lastPage) {
            next()
            setPage(page => page + 1)
        }
    }

    const prevPage = () => {
        if (page > 1) {
            prev()
            setPage(page => page - 1)
        }
    }

    const toLastPage = () => {
        last()
        setPage(lastPage)
    }

    const toFirstPage = () => {
        onLimitSubmit()
        setPage(1)
    }

    const setLimitWithLastPage = () => {
        toFirstPage()
        setLastPage(Math.ceil(pokecount / limit))
    }

    return (
        <View style={styles.pagination_container}>
            <Text>Page: {page}, Pokemons on page:</Text>
            <TextInput 
                onEndEditing={setLimitWithLastPage} 
                onChangeText={text => setLimit(text.replace(/[^0-9]/g, ''))}
                value={limit} 
                style={styles.limit_piker} 
                keyboardType="numeric"/>
            <Button title="|<" onPress={toFirstPage}/>
            <Button title="<" onPress={prevPage}/>
            <Button title=">"onPress={nextPage}/>
            <Button title=">|" onPress={toLastPage}/>
        </View>
    )
}

const styles = StyleSheet.create({
    pagination_container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        gap: 10
    },
    limit_piker: {
        borderColor: '#3200FF',
        borderStyle: 'solid',
        borderWidth: 2,
        width: 40,
        paddingHorizontal: 5,
        borderRadius: 4
    }
});