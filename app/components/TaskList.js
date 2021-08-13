import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';

import TaskItem from './TaskItem';

import { getTasks, deleteTask } from '../api';
import { useIsFocused } from '@react-navigation/native';

const TaskList = () => {
    const [ tasks, setTasks ] = useState([]);
    const [ refreshing, setRefreshing ] = useState(false);
    const isFocussed = useIsFocused();

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    }

    useEffect(() => {
        loadTasks();
    }, [isFocussed]);

    const renderItem = ({ item }) => {
        return <TaskItem task={ item } handleDelete={ handleDelete } />
    }

    const handleDelete = async (id) => {
        await deleteTask(id);
        await loadTasks();
    }

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await loadTasks();
        setRefreshing(false);
    })

    return (
        <FlatList 
        style={{ width: '100%' }}
        data={ tasks }
        keyExtractor={(item) => String(item.id)}
        renderItem={ renderItem }
        refreshControl={
            <RefreshControl 
                refreshing={ refreshing }
                onRefresh={ onRefresh }
            />
        }
        />
    )
}

export default TaskList
