import React from 'react'
import { View } from 'react-native'
import HeaderCom from '../component/Header';
import BottomHeader from '../component/BottomHeader';
interface social {
    navigation: any
}
const Social: React.FC<social> = ({ navigation }) => {
    return (
        <View>
            <HeaderCom navigation={navigation} title="SOCIAL" />
            <BottomHeader navigation={navigation} title="HOME" />
        </View>
    )
}

export default Social
