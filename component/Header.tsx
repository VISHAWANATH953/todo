import React from 'react';
import { Header, Icon } from "react-native-elements";
interface header {
    navigation: any,
    title: string
}
const HeaderCom: React.FC<header> = ({ navigation, title }) => {
    const Menu = () => {
        return (
            <Icon
                color="#fff"
                name="menu"
                onPress={() => navigation.openDrawer()}
                size={40}
                type="material" />
        );
    };
    const Home = () => {
        return (
            <Icon
                color="#fff"
                name="home"
                onPress={() => navigation.navigate(Home)}
                size={40}
                type="material" />
        );
    };
    return (
        <Header
            barStyle="default"
            centerComponent={{
                text: title,
                style: { color: "#fff", fontSize: 20.25, paddingTop: 10 }
            }}
            containerStyle={{ width: "100%", height: 90 }}
            leftComponent={Menu()}
            placement="center"
            rightComponent={Home()}
        />
    )
}
export default HeaderCom