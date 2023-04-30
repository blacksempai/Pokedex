import { Button, View, StyleSheet, TextInput } from "react-native"

export const Pagination = ({next, prev, limit, setLimit, onLimitSubmit, last}) => {
    return (
        <View style={styles.pagination_container}>
            <TextInput 
                onEndEditing={() => onLimitSubmit} 
                onChangeText={text => setLimit(text.replace(/[^0-9]/g, ''))}
                value={limit} 
                style={styles.limit_piker} 
                keyboardType="numeric"/>
            <Button title="|<" onPress={() => onLimitSubmit()}/>
            <Button title="<" onPress={() => prev()}/>
            <Button title=">"onPress={() => next()}/>
            <Button title=">|" onPress={() => last()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    pagination_container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
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