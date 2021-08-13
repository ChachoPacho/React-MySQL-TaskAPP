import React from 'react'
import { View, StyleSheet } from 'react-native'

const Layouts = ({ children }) => {
    return <View style={ styles.container } >{ children }</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dddddd',
        padding: 20,
        flex: 1,
        alignItems: 'center'
    }
})

export default Layouts
