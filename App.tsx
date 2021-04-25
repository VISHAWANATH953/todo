import { StatusBar } from 'expo-status-bar';
import { getTodos, setTodos } from './localStorage/local'
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Platform } from 'react-native';
import { Input } from "react-native-elements/dist/input/Input"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Todos from './component/Todos'
export default function App() {
  const [input, setInput] = useState<string>('')
  const [todo, setTodo] = useState<any>([])
  const addTodo: () => void = () => {
    if (!input) {
      alert('Please enter something')
    }
    else {
      setTodo([...todo, input])
      setInput('')
    }
  }
  useEffect(() => {
    setTodos(todo)
  }, [todo])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <SafeAreaView style={styles.droidSafeArea}>
          {
            todo.map((todo: string, id: number) => { return <Todos todo={todo} key={id} /> })
          }
        </SafeAreaView>
      </ScrollView>
      <View>
        <Input defaultValue={input} onChangeText={text => setInput(text)} containerStyle={{ width: 400 }}
          inputStyle={{ paddingLeft: 5 }}
          label="Add Todo Task"
          rightIcon={
            <Icon
              name="plus"
              size={40}
              style={{ color: "grey" }}
              onPress={addTodo}
            />
          }
          placeholder="Enter Task"
        />
      </View>
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
