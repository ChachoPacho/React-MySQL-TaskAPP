import React, { useEffect, useState } from 'react'
import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import Layouts from '../components/Layouts';

import { saveTask, getTask, updateTask } from '../api';

const TaskFormScreen = ({ navigation, route }) => {
    const [ task, setTask ] = useState({
        title: '',
        descripcion: ''
    });
    const [ editing, setEditing ] = useState(false);

    const handleChange = (name, value) => setTask({...task, [name]: value});
    const handleSubmit = async () => {
        try {
            if (task.title && task.descripcion) {
                if (!editing) {
                    await saveTask(task);
                } else {
                    await updateTask(route.params.id, { ...task });
                }
                await navigation.navigate('HomeScreen');
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (route.params && route.params.id) {
            setEditing(true);
            navigation.setOptions({ headerTitle: 'Actualizar Tarea' });

            (async () => {
                const task = (await getTask(route.params.id))[0];
                setTask({ title: task.title, descripcion: task.descripcion })
            })();
        }
    }, [])

    return (
        <Layouts>
            <TextInput 
                style={ styles.input }
                placeholder="Título"
                placeholderTextColor='#666666'
                onChangeText={ text => handleChange('title', text) }
                value={ task.title }
            />
            <TextInput 
                style={ styles.input }
                placeholder="Descripción"
                placeholderTextColor='#666666'
                onChangeText={ text => handleChange('descripcion', text) }
                value={ task.descripcion }
            />
            {!editing ? (
                <TouchableOpacity 
                    style={ styles.buttonSave } 
                    onPress={ handleSubmit }
                >
                    <Text style={{ color: '#ffffff' }}>Guardar Tarea</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity 
                    style={ styles.buttonUpdate } 
                    onPress={ handleSubmit }
                >
                    <Text style={{ color: '#ffffff' }}>Actualizar Tarea</Text>
                </TouchableOpacity>
            )}
        </Layouts>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 35,
        marginBottom: 7,
        padding: 4,
        borderWidth: 1,
        borderColor: '#444444',
        borderRadius: 5,
        fontSize: 14,
        color: '#333333'
    },
    buttonSave: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 3,
        backgroundColor: "#10ac84"
    },
    buttonUpdate: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 3,
        backgroundColor: "#e58e26"
    }
})

export default TaskFormScreen
