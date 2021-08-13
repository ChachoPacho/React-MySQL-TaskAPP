import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const TaskItem = ({ task, handleDelete }) => {
    const navigation = useNavigation();

    return (
        <View style={ styles.itemContainer } >
            <TouchableOpacity
                onPress={ () => navigation.navigate('TaskScreen', { id: task.id }) }
            >
                <Text style={ styles.itemTitle } >{ task.title }</Text>
                <Text style={ styles.itemDesc } >{ task.descripcion }</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={ styles.buttonDelete } 
                onPress={() => { handleDelete(task.id) }}
            >
                <Text style={ styles.itemDesc } >Eliminar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 8,
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonDelete: {
        backgroundColor: 'red',
        padding: 7,
        borderRadius: 5
    },
    itemTitle: {
        color: '#ffffff',
        textTransform: 'uppercase'
    },
    itemDesc: {
        color: '#ffffff'
    }
})

export default TaskItem
