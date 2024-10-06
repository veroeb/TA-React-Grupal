
import { actionsTypes } from './State';

const apiUrl = 'http://localhost:3000/api/tasks';

const fetchTasks = async ( dispatch ) => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    dispatch({
        type: actionsTypes.SET_TASKS,
        payload: data
    });
};

const addTask = async ( dispatch, task ) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    const data = await response.json();
    dispatch({
        type: actionsTypes.ADD_TASK,
        payload: data
    });
};

const updateTask = async ( dispatch, task ) => {
    const response = await fetch(apiUrl + `/${task.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    const data = await response.json();
    dispatch({
        type: actionsTypes.UPDATE_TASK,
        payload: data
    });
};

const deleteTask = async ( dispatch, task ) => {
    const response = await fetch(apiUrl + `/${task.id}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    dispatch({
        type: actionsTypes.DELETE_TASK,
        payload: data
    });
};

export { fetchTasks, addTask, updateTask, deleteTask };