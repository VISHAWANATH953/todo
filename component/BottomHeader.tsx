import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

interface bHeader {
    navigation: any,
    title: string
}
const BottomHeader: React.FC<bHeader> = ({ navigation, title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Icon
                    color='#3BB9FF'
                    name='home'
                    onPress={() => navigation.navigate('Home')}
                    size={40}
                    type='material' />
            </View>
            <View style={styles.icon}>
                <Icon
                    color='#3BB9FF'
                    name='link'
                    onPress={() => navigation.navigate('Social')}
                    size={40}
                    type='material' />
            </View>
        </View>
    )
}
export default BottomHeader

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#3BB9FF'
    },
    icon: {
        flex:1,
        height:'100%',
        borderWidth: .5,
        borderColor: '#3BB9FF',
        justifyContent: 'center'
    }
})