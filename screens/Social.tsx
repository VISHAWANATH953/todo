import React from 'react'
import { Text, View } from 'react-native'
import HeaderCom from '../component/Header';
interface social {
    navigation: any
}
const Social: React.FC<social> = ({ navigation }) => {
    return (
        <View>
            <HeaderCom navigation={navigation} title="Social" />
            <Text> textInComponent </Text>
        </View>
    )
}

export default Social
