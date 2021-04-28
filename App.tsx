import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, SafeAreaView, Platform } from 'react-native';
import Todos from './component/Todos'
import InputCom from './component/InputCom';
export default function App(): JSX.Element {
  const [input, setInput] = useState<string>('')
  const [todo, setTodo] = useState<string[]>([])
  const addTodo: () => void = () => { !input ? alert('Please Enter Something') : setTodo([...todo, input]), setInput('') }
  const delTodo: (id: number) => void = id => setTodo(todo => todo.filter((e, i) => i !== id))
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <SafeAreaView style={styles.droidSafeArea}>
          {todo.map((todo: string, id: number) => <Todos delTodo={delTodo} todo={todo} key={id} id={id} />)}
        </SafeAreaView>
      </ScrollView>
      <InputCom input={input} setInput={setInput} addTodo={addTodo} />
    </View>
  );
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
    paddingTop: Platform.OS === 'android' ? 50 : 0
  },
});