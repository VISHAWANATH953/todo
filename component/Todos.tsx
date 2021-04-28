import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from "react-native-elements";

interface todoss {
    todo: string,
    key: number,
    id: number,
    delTodo: any,
}
const Todos: React.FC<todoss> = ({ todo, delTodo, id }): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.todos}>
                <Text style={{ fontSize: 18 }}>{todo}</Text>
                <Icon
                    color="#0CC"
                    name="delete"
                    onPress={() => delTodo(id)}
                    size={35}
                    type="material"
                />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        paddingRight: 25,
        marginBottom: 10,
    }, todos: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: "grey",
        borderRadius: 25,
        paddingLeft: 25,
        paddingRight: 10,
        padding: 10,
        width: "auto",
    }
});

export default Todos

