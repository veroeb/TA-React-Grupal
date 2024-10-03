const initialState = {
    tasks: [],
    statusArray: ['Backlog', 'To Do', 'In Progress', 'Blocked', 'Done']
};

const actionsTypes = {
    SET_TASKS: 'SET_TASKS',
    ADD_TASK: 'ADD_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
    DELETE_TASK: 'DELETE_TASK'
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionsTypes.SET_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        case actionsTypes.UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
            };
        case actionsTypes.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case actionsTypes.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export { initialState, actionsTypes, reducer };