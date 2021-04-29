import React, { Dispatch, SetStateAction } from 'react'
import { View, Platform } from 'react-native'
import { Input } from "react-native-elements/dist/input/Input"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
interface inputcom {
    addTodo: () => void,
    input: string,
    setInput: Dispatch<SetStateAction<string>>,
}

const InputCom: React.FC<inputcom> = ({ addTodo, input, setInput }): JSX.Element => {
    return (
        <View>
            <Input defaultValue={input} onChangeText={text => setInput(text)} containerStyle={{ width: Platform.OS === 'android' ? 360 : "80%" }}
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
    )
}

export default InputCom
