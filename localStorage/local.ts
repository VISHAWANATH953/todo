import AsyncStorage from '@react-native-async-storage/async-storage';
const getTodos: () => void = async () => {
    try {
        let getodos = await AsyncStorage.getItem('todo')
        return getodos != null ? JSON.parse(getodos) : null;
    } catch (e) {
        alert(console.warn(e))
    }
}
const setTodos: (item: string[]) => void = async (item) => {
    try {
        let setodos = await AsyncStorage.setItem('todo', JSON.stringify(item))
        return setodos
    } catch (e) {
        alert(console.warn(e))
    }
}
export { getTodos, setTodos }