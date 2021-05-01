import React, { Dispatch, SetStateAction } from 'react'
import { Input } from "react-native-elements/dist/input/Input"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
interface inputcom {
    addTodo: () => void,
    input: string,
    setInput: Dispatch<SetStateAction<string>>,
}
const InputCom: React.FC<inputcom> = ({ addTodo, input, setInput }): JSX.Element => {
    return (
            <Input defaultValue={input} onChangeText={text => setInput(text)} containerStyle={{ width:  "95%" }}
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
    )
}
export default InputCom
