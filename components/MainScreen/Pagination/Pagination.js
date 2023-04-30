import { useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native"


export const Pagination = ({next, prev}) => {
    const [page, setPage] = useState(1);

    return (
        <View style={styles.pagination_container}>
            <Text>{page}</Text>
            <Button title="<" onPress={()=> {
                prev();
                setPage(page => page - 1);
            }}/>
            <Button title=">"onPress={()=> {
                next();
                setPage(page => page + 1);
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    pagination_container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        gap: 10
    }
});