import { useEffect, useReducer } from 'react';
import { initialState, reducer } from './state/State';
import { fetchTasks } from './state/StateManager';
import TaskColumn from './TaskColumn';

function TaskManager() {

   const [state, dispatch] = useReducer(reducer, initialState);

   useEffect(() => {
       fetchTasks(dispatch);
   }, []);

    return (
        <div className='task-manager'>
            <h1>Gestor de tareas</h1>
            <TaskColumn status="Backlog" tasks={state.tasks.filter(task => task.status === 'Backlog')} />
            <TaskColumn status="To do" tasks={state.tasks.filter(task => task.status === 'To Do')} />
            <TaskColumn status="In Progress" tasks={state.tasks.filter(task => task.status === 'In Progress')} />
            <TaskColumn status="Done" tasks={state.tasks.filter(task => task.status === 'Done')} />
            <TaskColumn status="Blocked" tasks={state.tasks.filter(task => task.status === 'Blocked')} />
        </div>
    );
}

export default TaskManager;