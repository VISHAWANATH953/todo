import React from 'react';
import { Header, Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
interface header {
    navigation: any,
    title: string
}
const HeaderCom: React.FC<header> = ({ navigation, title }) => {
    return (
        <Header
            barStyle="default"
            centerComponent={{
                text:  title ,
                style: { color: "#fff" }
            }}
            containerStyle={{ width: "100%",height: 90}}
            leftComponent={{ icon: "menu", color: "#fff" }}
            placement="center"
            rightComponent={{ icon: "home", color: "#fff" }}
        />
    )
}
export default HeaderCom