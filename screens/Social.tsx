import React, { useCallback } from 'react'
import { View, StyleSheet, Text, Linking } from 'react-native'
import { SocialIcon, Avatar } from "react-native-elements";
import HeaderCom from '../component/Header';
import BottomHeader from '../component/BottomHeader';
interface social {
    navigation: any
}
const Social: React.FC<social> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderCom navigation={navigation} title="SOCIAL" />
            <View style={styles.main}>
                <View style={styles.ava}>
                    <Avatar
                        activeOpacity={0.2}
                        containerStyle={{ backgroundColor: "#3BB9FF" }}
                        rounded
                        size="xlarge"
                        title="V"
                        titleStyle={{
                            color: "#fff",
                        }}
                    />
                    <Text style={styles.text}>Hi,I Am Vish</Text>
                    <Text style={styles.txts} onPress={() => Linking.openURL('mailto://vishkokre@gmail.com')}>Vishkokre@gmail.com</Text>
                </View>
                <View style={styles.icon}>
                    <SocialIcon
                        iconSize={40}
                        iconType="font-awesome"
                        loading={false}
                        onPress={() => Linking.openURL('https://github.com/VISHAWANATH953')}
                        style={{ paddingHorizontal: 10 }}
                        type="github"
                    /><SocialIcon
                        iconSize={35}
                        iconType="font-awesome"
                        onPress={() => Linking.openURL('https://www.facebook.com/kokarevish')}
                        style={{ paddingHorizontal: 10 }}
                        title="GitHub"
                        type="instagram"
                    /><SocialIcon
                        iconSize={25}
                        iconType="font-awesome"
                        onPress={() => Linking.openURL('https://www.instagram.com/vishawanath_kokare/')}
                        style={{ paddingHorizontal: 10 }}
                        type="facebook"
                    /><SocialIcon
                        iconSize={25}
                        iconType="font-awesome"
                        onPress={() => Linking.openURL('https://twitter.com/VishawanathKok5')}
                        style={{ paddingHorizontal: 10 }}
                        type="twitter"
                    />
                </View>
            </View>
            <BottomHeader style={styles.bottom} navigation={navigation} title="HOME" />
        </View>
    )
}

export default Social
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    main: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    text: {
        fontSize: 40,
        marginTop: 30
    },
    txts: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 10,
        color: "#3BB9FF"
    },
    ava: {
        alignItems: 'center',
    },
    bottom: {
        position: 'absolute',
        bottom: 1,
        left: 1,
    }
})