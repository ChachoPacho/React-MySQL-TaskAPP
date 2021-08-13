const API = 'http://192.168.0.36:3000/tasks';

export async function getTasks() {
    const response = await fetch(API);
    return await response.json();
}

export async function getTask(id) {
    const response = await fetch(API + '/' + id);
    return await response.json();
}

export async function saveTask(newTask) {
    const res = await fetch(API, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newTask)
    });

    return await res.json();
}

export async function updateTask(id, newTask) {
    await fetch(API + '/' + id, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newTask)
    });
}

export async function deleteTask(id) {
    await fetch(API + '/' + id, {
        method: 'DELETE'
    });
}