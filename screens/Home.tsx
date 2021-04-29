import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView, Platform, ToastAndroid } from 'react-native'
import Todos from '../component/Todos'
import InputCom from '../component/InputCom';
import HeaderCom from '../component/Header';
import BottomHeader from '../component/BottomHeader';
interface home {
    navigation: any,
}
const Home: React.FC<home> = ({ navigation }) => {
    const [input, setInput] = useState<string>('')
    const [todo, setTodo] = useState<string[]>([])
    const addTodo: () => void = () => { !input ? ToastAndroid.showWithGravityAndOffset("Enter Something!", ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 1000) : setTodo([...todo, input]), setInput('') }
    const delTodo: (id: number) => void = id => setTodo(todo => todo.filter((e, i) => i !== id))
    return (
        <View style={styles.container}>
            <HeaderCom navigation={navigation} title="HOME" />
            <ScrollView>
                <SafeAreaView style={styles.droidSafeArea}>
                    {todo.map((todo: string, id: number) => <Todos delTodo={delTodo} todo={todo} key={id} id={id} />)}
                </SafeAreaView>
            </ScrollView>
            <InputCom input={input} setInput={setInput} addTodo={addTodo} />
            <BottomHeader navigation={navigation} title="HOME" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
    },
    droidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 10 : 0
    },
});
export default Home;