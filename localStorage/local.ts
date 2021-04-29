import AsyncStorage from '@react-native-async-storage/async-storage';
export const getTodos: () => void = async () => {
    try {
        let getodos = await AsyncStorage.getItem('todo')
        getodos != null ? JSON.parse(getodos) : null
    } catch (e) {
        alert(e)
    }
}
export const setTodos: (item: string[]) => void = async item => {
    try {
        let setodos = await AsyncStorage.setItem('todo', JSON.stringify(item))
        return setodos
    } catch (e) {
        alert(e)
    }
}